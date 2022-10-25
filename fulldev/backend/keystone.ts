import { config, createSchema } from '@keystone-next/keystone/schema';
import { User } from './schemas/User';
import 'dotenv/config';

const databaseURL = process.env.DATABASE_URL || '';

// sets cookie
const sessionConfig = {
  maxAge: 60 * 60 * 24 * 360, // secs * mins * hours * days
  secret: process.env.COOKIE_SECRET,
};

export default config({
  // @ts-ignore
  server: {
    cors: {
      origin: [process.env.FRONTENED_URL],
      credentials: true,
    },
  },
  db: {
    adapter: 'mongoose',
    url: databaseURL,
  },
  lists: createSchema({
    // scema items
    User,
  }),
  ui: {
    // change this for different roles
    isAccessAllowed: () => true,
  },
  // TODO: add session values here
});
