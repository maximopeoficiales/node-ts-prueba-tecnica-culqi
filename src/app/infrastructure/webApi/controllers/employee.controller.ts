import { Request, Response } from "express";
import HttpStatusCode from "../../shared/httpStatusCode";
import { injectable } from 'tsyringe';
import { container } from "tsyringe";
import { employesService, EmployesService } from "../../../application/use_cases/employes.service";
import { ErrorResponse } from "../../shared/errorResponse";
@injectable()
export class EmployeeController {
    constructor(
        private service: EmployesService
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
            console.log(error);
            return res.status(error.errorCode || HttpStatusCode.INTERNAL_SERVER_ERROR).send({
                errorCode: error.errorCode || "serviceNotAvailable",
                errorMessage: error.message || "Internal Server Error",
                status: false,
                errors: ""
            });
        }

    }



}

export const employeeController = container.resolve(EmployeeController);
