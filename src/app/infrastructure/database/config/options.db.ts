import { mssqlConfiguration } from "../../../../config";
import mssql from 'mssql'
export const sqlConfig: mssql.config = {
    user: mssqlConfiguration.USER,
    password: mssqlConfiguration.PASSWORD,
    database: mssqlConfiguration.DATABASE,
    server: mssqlConfiguration.HOST,
    pool: {
        max: 10,
        min: 0,
        idleTimeoutMillis: 30000
    },
    options: {
        encrypt: false, // for azure
        trustServerCertificate: false, // change to true for local dev / self-signed certs
        trustedConnection: false
    }
}