/* eslint-disable */

import { CartItem } from '../schemas/CartItem';
import { KeystoneContext, SessionStore } from '@keystone-next/types';
import { CartItemsCreateInput } from '../.keystone/schema-types';
import stripeConfig from '../lib/stripe';
import { useContext } from 'react';

const graphql = String.raw;

interface Arguments {
    token: string
}

async function checkout(
  root: any,
  { token }: Arguments,
  context: KeystoneContext
): Promise<OrderCreateInput> {
  //check if signed in
const userId = context.session.itemId;
if(!userId){
    throw new Error('You must be signed in to create an order!')
};


const user = await context.lists.User.findOne({
    where: { id: userId },
    resolveFields: graphql`
      id
      name
      email
      cart {
        id
        quantity
        product {
          name
          price
          description
          id
          photo {
            id
            image {
              id
              publicUrlTransformed
            }
          }
        }
      }
    `
});


  //calculate total order price
const cartItems = user.cart.filter(cartItem => cartItem.product);
const amount = cartItems.reduce(function(tally: number, cartItem: CartItemsCreateInput) {
    return tally + cartItem.quantity * cartItem.product.price
},0);

//create charge with stripe library
const charge = await stripeConfig.paymentIntents.create({
    amount,
    currency: 'USD',
    confirm: true,
    payment_method: token,
}).catch(err=>{
    console.log(err);
    throw new Error(err.message);
});

console.log("THE CHARGE IS:")
console.log(charge)
  //convert cartItems to orderItems

const orderItems = cartItems.map(cartItem => {
const orderItem = {
    name: cartItem.product.name,
    description: cartItem.product.description,
    price: cartItem.product.price,
    quantity: cartItem.quantity,
    photo: { connect: { id: cartItem.product.photo.id }},
}
return orderItem;
})

//create order and return it
const order = await context.lists.Order.createOne({
    data: {
      total: charge.amount,
      charge: charge.id,
      items: { create: orderItems },
      user: { connect: { id: userId }}
    },
    resolveFields: false,
  });

  //cleanup

const cartItemIds = user.cart.map(cartItem => cartItem.id);
console.log('gonna delete cartItems')
await context.lists.CartItem.deleteMany({
ids: cartItemIds
});

console.log(cartItemIds)

return order;
}

export default checkout;