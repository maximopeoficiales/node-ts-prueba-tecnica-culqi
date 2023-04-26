import "reflect-metadata";
import mssql, { ConnectionPool } from 'mssql'
import { injectable } from 'tsyringe';
import { sqlConfig } from '../config/options.db';
import { container } from "tsyringe";

@injectable()
export class SqlServer {
    conn: ConnectionPool;
    constructor() {
    }
    async getConnection(): Promise<ConnectionPool> {
        try {
            this.conn = await mssql.connect(sqlConfig);
            return this.conn;
        } catch (error) {
            console.log(error);
            return null;
        }
    }



}


export const instanceSqlServer = container.resolve(SqlServer);