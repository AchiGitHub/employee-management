export type Employee = {
    _id?: string,
    first_name: string,
    last_name: string,
    email: string,
    gender: string,
    number: string,
    photo: string
}

export interface EmployeeState {
    list: {
        loading: boolean;
        data: Employee[];
        error: any;
        hasError: boolean;
    };
    employee: {
        loading: boolean;
        data: Employee;
        error: any;
        hasError: boolean;
    };
    selectedEmployee: {
        loading: boolean;
        data: any;
        error: any;
        hasError: boolean;
    };
}