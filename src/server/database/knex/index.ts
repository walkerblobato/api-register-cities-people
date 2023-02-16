import { knex } from 'knex';
import { deevelopment, production, test } from './Environment';


const getEnvironment = () => {
    switch (process.env.NODE_ENV) {
        case 'production': return production;
        case 'test': return test;

        default: return deevelopment;
    }
};

export const Knex = knex(getEnvironment());