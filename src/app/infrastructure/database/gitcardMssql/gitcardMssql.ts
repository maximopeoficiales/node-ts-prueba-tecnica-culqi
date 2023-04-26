import mssql, { ConnectionPool } from 'mssql'
import { sqlConfig } from '../config/options.db';


export const getConnectionPool = async () => {
    try {
        return await mssql.connect(sqlConfig);
    } catch (error) {
        console.log("Ocurrio un error en la conexion a MSSQL", error);
    }
}
