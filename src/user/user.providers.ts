import { Connection } from 'mongoose';
import { CONNECTIONS, MODELS } from 'src/commons/constants';
import { UserSchema } from './schemas/user.schema';

export const catsProviders = [
  {
    provide: MODELS.USER_MODEL,
    useFactory: (connection: Connection) =>
      connection.model('User', UserSchema),
    inject: [CONNECTIONS.DATABASE_CONNECTION],
  },
];
