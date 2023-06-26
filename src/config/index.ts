import { config } from 'dotenv';

import pkg from '../../package.json';

config();

export default {
  APP: {
    NAME: pkg.name,
    VERSION: pkg.version,
    DESCRIPTION: pkg.description,
    AUTHOR: pkg.author,
    STAGE: (process.env.NODE_ENV === 'development' ? 'dev' : 'prod') as 'dev' | 'prod',
    ENV: (process.env.NODE_ENV || 'development') as 'development' | 'production',
  },
};
