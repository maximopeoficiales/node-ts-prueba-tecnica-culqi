import "reflect-metadata";
import { injectable } from 'tsyringe';
import { container } from "tsyringe";
import { Employee } from "../../domain/entitys/employee.entity";
import { instanceSqlServer, SqlServer } from "./gitcardMssql/SqlServer";

@injectable()
export class EmployeeRepository {
    constructor(
    ) {

    }

    async getEmployees(): Promise<Employee[]> {
        try {
            let employees = await instanceSqlServer.conn.query(`SELECT * FROM employees`);
            console.log(employees);

            return employees.recordset as Employee[];
        } catch (error) {
            console.log(error);
            return null;
        }
    }

}

export const employeeRepository = container.resolve(EmployeeRepository);