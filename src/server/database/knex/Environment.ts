import { Knex } from 'knex';
import path from 'path';


export const deevelopment: Knex.Config = {
    client: 'sqlite3',
    useNullAsDefault: true,
    connection: {
        filename: path.resolve(__dirname, '..', '..', '..', '..', 'database.sqlite')
    },
    migrations: {
        directory: path.resolve(__dirname, '..', 'migrations')
    },
    seeds: {
        directory: path.resolve(__dirname, '..', 'seeds')
    },
    pool: {
        afterCreate: (connection: any, done: Function) => {
            connection.run('PRAGMA foreign_keys =ON');
            done();
        }
    }
};

export const test: Knex.Config = {
    ...deevelopment,
    connection: ':memory:',
};

export const production: Knex.Config = {
    ...deevelopment,
};