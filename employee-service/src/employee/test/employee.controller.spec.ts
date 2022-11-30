import { Test, TestingModule } from '@nestjs/testing';
import { CreateEmployeeDto } from '../dto/create-employee.dto';
import { UpdateEmployeeDto } from '../dto/update-employee.dto';
import { EmployeeController } from '../employee.controller';
import { EmployeeService } from '../employee.service';
import { Employee } from '../entities/employee.entity';
import { employeeStub } from './stubs/employee.stud';

jest.mock('../employee.service');

describe('EmployeeController', () => {
  let employeeController: EmployeeController;
  let employeeService: EmployeeService;

  beforeEach(async () => {
    const moduleRef: TestingModule = await Test.createTestingModule({
      controllers: [EmployeeController],
      providers: [EmployeeService],
    }).compile();

    employeeService = moduleRef.get<EmployeeService>(EmployeeService);
    employeeController = moduleRef.get<EmployeeController>(EmployeeController);
    jest.clearAllMocks();
  });

  describe('findAll', () => {
    let employees: Employee[];

    beforeEach(async () => {
      employees = await employeeController.findAll();
    });
    it('should call employee service', async () => {
      expect(employeeService.findAll).toHaveBeenCalled();
    });
    it('should return an array of employees', async () => {
      expect(employees).toEqual([employeeStub()]);
    });
  });

  describe('create', () => {
    let employee: Employee;
    let createEmployeeDto: CreateEmployeeDto;

    beforeEach(async () => {
      createEmployeeDto = {
        first_name: employeeStub().first_name,
        last_name: employeeStub().last_name,
        email: employeeStub().email,
        gender: employeeStub().gender,
        number: employeeStub().number,
        photo: employeeStub().photo,
      };
      employee = await employeeController.create(createEmployeeDto);
    });

    it('should call employee service', async () => {
      expect(employeeService.create).toHaveBeenCalledWith({
        first_name: createEmployeeDto.first_name,
        email: createEmployeeDto.email,
        gender: createEmployeeDto.gender,
        last_name: createEmployeeDto.last_name,
        number: createEmployeeDto.number,
        photo: createEmployeeDto.photo,
      });
    });
    it('should return an employee', async () => {
      expect(employee).toEqual(employeeStub());
    });
  });

  describe('update', () => {
    let employee: Employee;
    let updateEmployeeDto: UpdateEmployeeDto;

    beforeEach(async () => {
      updateEmployeeDto = {
        first_name: employeeStub().first_name,
        last_name: employeeStub().last_name,
        email: employeeStub().email,
        gender: employeeStub().gender,
        number: employeeStub().number,
        photo: employeeStub().photo,
      };
      employee = await employeeController.update('1', updateEmployeeDto);
    });

    it('should call employee service', async () => {
      expect(employeeService.update).toHaveBeenCalledWith('1', {
        first_name: updateEmployeeDto.first_name,
        email: updateEmployeeDto.email,
        gender: updateEmployeeDto.gender,
        last_name: updateEmployeeDto.last_name,
        number: updateEmployeeDto.number,
        photo: updateEmployeeDto.photo,
      });
    });
    it('should return an employee', async () => {
      expect(employee).toEqual(employeeStub());
    });
  });
});
