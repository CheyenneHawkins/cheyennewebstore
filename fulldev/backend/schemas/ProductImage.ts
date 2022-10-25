import { cloudinaryImage } from '@keystone-next/cloudinary';
import { relationship, text, select } from '@keystone-next/fields';
import { list } from '@keystone-next/keystone/schema';
import 'dotenv/config';

export const cloudinary = {
  cloudName: process.env.CLOUDINARY_CLOUD_NAME,
  apiKey: process.env.CLOUDINARY_KEY,
  apiSecret: process.env.CLOUDINARY_SECRET,
  folder: 'fulldev',
};

export const ProductImage = list({
  fields: {
    image: cloudinaryImage({
      cloudinary,
      label: 'Source',
    }),
    altText: text(),
    product: relationship({ ref: 'Product.photo' }),
    buttness: select({
      options: [
        { label: 'Round', value: 'ROUND' },
        { label: 'Flat', value: 'FLAT' },
        { label: 'Nondescript', value: 'NONDESCRIPT' },
      ],
    }),
  },
  ui: {
    listView: {
      initialColumns: ['image', 'altText', 'product', 'buttness'],
    },
  },
});
