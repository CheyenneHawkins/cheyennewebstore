/* eslint-disable */

import { KeystoneContext } from '@keystone-next/types';
import { CartItemCreateInput } from '../.keystone/schema-types';
import { Session } from '../types';

export default async function addToCart(
  root: any,
  { productId }: { productId: string },
  context: KeystoneContext
): Promise<CartItemCreateInput> {

  // console.log('ADDING TO CART!!');

  // see if user is signed in
  const sesh = context.session as Session;
  if (!sesh.itemId) {
    throw new Error('You must be logged in to do this!');
  }

  // query the user's cart
  const allCartItems = await context.lists.CartItem.findMany({
    where: { user: { id: sesh.itemId }, product: { id: productId } },
    resolveFields: 'id, quantity'
  });
  
  const [existingCartItem] = allCartItems;

  // check if item is in cart - if so increment quantity
  if (existingCartItem) {
    console.log(`There are ${existingCartItem.quantity}, increment by 1!`);
    return await context.lists.CartItem.updateOne({
      id: existingCartItem.id,
      data: { quantity: existingCartItem.quantity + 1 },
    });
  }

  //otherwise create cart item
  return await context.lists.CartItem.createOne({
    data: {
        product: {connect: { id: productId}},
        user: { connect: {id: sesh.itemId}}
    }
  })

}
