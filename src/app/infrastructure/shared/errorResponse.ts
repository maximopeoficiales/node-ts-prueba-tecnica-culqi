import HttpStatusCode from "./httpStatusCode"

export class ErrorResponse<T> {
    constructor(
        private errorCode: HttpStatusCode,
        private errorMessage: string,
        private errors: T = null,
        private status: boolean = false,
    ) {

    }

}