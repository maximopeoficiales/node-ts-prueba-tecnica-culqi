import { employeeRepository, EmployeeRepository } from "../../infrastructure/database/employeeRepository";

import { injectable } from 'tsyringe';
import { container } from "tsyringe";
import { Employee } from "../../domain/entitys/employee.entity";
@injectable()
export class EmployesService {
    constructor(
        // private employesRepository: EmployeeRepository,
    ) {

    }

    async getEmployees(): Promise<Employee[]> {
        return await employeeRepository.getEmployees();
    }
}

export const employesService = container.resolve(EmployesService);