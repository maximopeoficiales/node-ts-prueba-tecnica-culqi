import { Request, Response } from "express";
import HttpStatusCode from "../../shared/httpStatusCode";
import { injectable } from 'tsyringe';
import { container } from "tsyringe";
import { ErrorResponse } from "../../shared/errorResponse";
@injectable()
export class EmployeeController {
    constructor(
    ) {

    }
    async getAll(req: Request, res: Response) {
        try {
            // const employes = await employesService.getEmployees();

            // if (employes) {
            //     return res.status(HttpStatusCode.OK).json(employes);
            // } else {
            //     throw new ErrorResponse(HttpStatusCode.NOT_FOUND, "Employees not found");
            // }
            throw new ErrorResponse(HttpStatusCode.NOT_FOUND, "Employees not found");

        } catch (error) {

        }

    }



}

export const employeeController = container.resolve(EmployeeController);
