import { integer, relationship, select, text } from '@keystone-next/fields';
import { list } from '@keystone-next/keystone/schema';
import { isSignedIn, rules } from '../access';
import { Tag } from './Tags';

export const Product = list({
  access: {
    create: isSignedIn,
    read: rules.canReadProducts,
    update: rules.canManageProducts,
    delete: rules.canManageProducts,
  },
  fields: {
    name: text({ isRequired: true }),
    description: text({
      ui: {
        displayMode: 'textarea',
      },
    }),
    tags: relationship({
      ref: 'Tag.product',
      many: true,
      ui: {
        displayMode: 'select',
        // cardFields: ['name'],
        // inlineCreate: { fields: ['name'] },
        // inlineEdit: { fields: ['name'] },
      },
    }),
    photo: relationship({
      ref: 'ProductImage.product',
      ui: {
        displayMode: 'cards',
        cardFields: ['image', 'altText'],
        inlineCreate: { fields: ['image', 'altText'] },
        inlineEdit: { fields: ['image', 'altText'] },
      },
    }),
    status: select({
      options: [
        { label: 'Draft', value: 'DRAFT' },
        { label: 'Unavailable', value: 'UNAVAILABLE' },
        { label: 'Available', value: 'AVAILABLE' },
      ],
      defaultValue: 'DRAFT',
      ui: {
        displayMode: 'segmented-control',
        createView: { fieldMode: 'edit' },
      },
    }),
    price: integer(),
    user: relationship({
      ref: 'User.products',
      defaultValue: ({ context }) => ({
        connect: { id: context.session.itemId },
      }),
    }),
  },
});
