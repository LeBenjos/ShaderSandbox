import 'dotenv/config';
import { Kysely, PostgresDialect } from 'kysely';
import { Pool } from 'pg';
import { IDatabase } from '../../constants/Types/DatabaseInterface.ts';

export const db = new Kysely<IDatabase>({
    dialect: new PostgresDialect({
        pool: new Pool({
            database: process.env.DB_NAME,
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            host: process.env.DB_HOST,
            port: Number(process.env.DB_PORT),
            max: 10,
        }),
    })
});
