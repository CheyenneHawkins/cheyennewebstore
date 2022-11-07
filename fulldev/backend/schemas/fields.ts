import { checkbox } from '@keystone-next/fields';

export const permissionFields = {
  canManageProducts: checkbox({
    defaultValue: false,
    label: 'Update and delete any product',
  }),
  canSeeOtherUsers: checkbox({
    defaultValue: false,
    label: 'Query other users',
  }),
  canManageUsers: checkbox({
    defaultValue: false,
    label: 'Edit other users',
  }),
  canManageRoles: checkbox({
    defaultValue: false,
    label: 'CRUD roles',
  }),
  canManageCart: checkbox({
    defaultValue: false,
    label: 'See and manage cart and cart items',
  }),
  canManageOrders: checkbox({
    defaultValue: false,
    label: 'See and manage orders',
  }),
};

export type Permission = keyof typeof permissionFields;

// array of the permissions types
export const permissionsList: Permission[] = Object.keys(
  permissionFields
) as Permission[];
