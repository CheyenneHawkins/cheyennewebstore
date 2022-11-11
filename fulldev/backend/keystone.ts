import { createAuth } from '@keystone-next/auth';
import { config, createSchema } from '@keystone-next/keystone/schema';
import {
  withItemData,
  statelessSessions,
} from '@keystone-next/keystone/session';
import { relationship } from '@keystone-next/fields';
import { CartItem } from './schemas/CartItem';
import { OrderItem } from './schemas/OrderItem';
import { Order } from './schemas/Order';
import { Tag } from './schemas/Tags';
import { User } from './schemas/User';
import { Product } from './schemas/Product';
import { ProductImage } from './schemas/ProductImage';
import 'dotenv/config';
import { insertSeedData } from './seed-data';
import { sendPasswordResetEmail } from './lib/mail';
import { extendGraphqlSchema } from './mutations';
import { Role } from './schemas/Roles';
import { permissionsList } from './schemas/fields';

const databaseURL = process.env.DATABASE_URL || '';

// sets cookie
const sessionConfig = {
  maxAge: 60 * 60 * 24 * 360, // secs * mins * hours * days
  secret: process.env.COOKIE_SECRET,
};

const { withAuth } = createAuth({
  listKey: 'User',
  identityField: 'email',
  secretField: 'password',
  initFirstItem: {
    fields: ['name', 'email', 'password'],
    // TODO: add initial roles here
  },
  passwordResetLink: {
    async sendToken(args) {
      await sendPasswordResetEmail(args.token, args.identity);
      console.log('THIS IS ARGS');
      console.log(args);
    },
  },
});

export default withAuth(
  config({
    // @ts-ignore
    server: {
      cors: {
        origin: true,
        // origin: [process.env.FRONTENED_URL],
        credentials: true,
      },
    },
    db: {
      adapter: 'mongoose',
      url: databaseURL,
      async onConnect(keystone) {
        console.log('CONNECTED BABY!');
        if (process.argv.includes('--seed-data')) {
          await insertSeedData(keystone);
        }
      },
    },
    lists: createSchema({
      // this defines the categories in Keystone interface
      User,
      Product,
      ProductImage,
      CartItem,
      OrderItem,
      Order,
      Role,
      Tag,
    }),
    extendGraphqlSchema,
    ui: {
      // change this for different roles

      // show the UI only for people who pass this test
      // isAccessAllowed: ({ session }) => !!session?.data,
      isAccessAllowed: ({ session }) => !!session?.data,
    },
    // relevent information about the logged in user to the session
    // permissionsList is the array of role permissions
    session: withItemData(statelessSessions(sessionConfig), {
      User: `id name email role { ${permissionsList.join(' ')}}`,
    }),
  })
);
