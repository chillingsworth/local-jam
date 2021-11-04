// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Jam, Area, User } = initSchema(schema);

export {
  Jam,
  Area,
  User
};