import { ListAccessArgs } from './types';

export function isSignedIn({ session }: ListAccessArgs) {
  return !!session;
}

// permissions check
export const permissions = {
  canManageProducts({ session }) {
    return !!session?.data.role?.canManageProducts;
  },

  canSeeOtherUsers({ session }) {
    return !!session?.data.role?.canSeeOtherUsers;
  },

  canManageUsers({ session }) {
    return !!session?.data.role?.canManageUsers;
  },

  canManageRoles({ session }) {
    return !!session?.data.role?.canManageRoles;
  },

  canManageCart({ session }) {
    return !!session?.data.role?.canManageCart;
  },

  canManageOrders({ session }) {
    return !!session?.data.role?.canManageOrders;
  },
};

// returns boolean or filter
export const rules = {
  //
  canManageProducts({ session }: ListAccessArgs) {
    //
    // checks if signed in
    if (!isSignedIn({ session })) {
      return false;
    }

    // checks to see if user has overall permission
    if (permissions.canManageProducts({ session })) {
      return true;
    }
    // if not, checks to see if user is owner of the item
    return { user: { id: session.itemId } };
  },

  canOrder({ session }: ListAccessArgs) {
    //
    // checks if signed in
    if (!isSignedIn({ session })) {
      return false;
    }

    // checks to see if user has overall permission
    if (permissions.canManageCart({ session })) {
      return true;
    }
    // if not, checks to see if user is owner of the item
    return { user: { id: session.itemId } };
  },

  canManageOrderItems({ session }: ListAccessArgs) {
    //
    // checks if signed in
    if (!isSignedIn({ session })) {
      return false;
    }

    // checks to see if user has overall permission
    if (permissions.canManageCart({ session })) {
      return true;
    }
    // if not, checks to see if user is owner of the order
    return { order: { user: { id: session.itemId } } };
  },

  canReadProducts({ session }: ListAccessArgs) {
    //
    // // checks if signed in
    // if (!isSignedIn({ session })) {
    //   return false;
    // }

    // checks to see if user has overall permission
    if (permissions.canManageProducts({ session })) {
      return true;
    }
    // if not, only shows 'available' products
    return { status: 'AVAILABLE' };
  },

  canManageUsers({ session }: ListAccessArgs) {
    //
    // checks if signed in
    if (!isSignedIn({ session })) {
      return false;
    }

    // checks to see if user has overall permission
    if (permissions.canManageCart({ session })) {
      return true;
    }
    // if not, they can only manage themselves
    return { id: session.itemId };
  },
};
