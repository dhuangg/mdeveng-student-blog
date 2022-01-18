require('dotenv').config();

import { config } from '@keystone-6/core';
import { lists } from './schema/schema';

export default config({
    db: { provider: 'postgresql', url: `postgres://${process.env.USERNAME}@localhost/mdeveng-student-blog` },
    experimental: {
        generateNextGraphqlAPI: true,
        generateNodeAPI: true,
    },
    lists,
});