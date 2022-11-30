import { employeeStub } from '../test/stubs/employee.stud';

export const EmployeeService = jest.fn().mockReturnValue({
  findOne: jest.fn().mockResolvedValue(employeeStub()),
  create: jest.fn().mockResolvedValue(employeeStub()),
  findAll: jest.fn().mockResolvedValue([employeeStub()]),
  update: jest.fn().mockResolvedValue(employeeStub()),
});
