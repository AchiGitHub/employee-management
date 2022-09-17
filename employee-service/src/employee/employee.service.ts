import { Injectable, OnModuleInit } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';
import { Employee, EmployeeDocument } from './entities/employee.entity';
import employeeData from './employees.json';

@Injectable()
export class EmployeeService implements OnModuleInit {
  constructor(
    @InjectModel(Employee.name)
    private readonly employeeModel: Model<EmployeeDocument>,
  ) { }

  // Load data to DB
  onModuleInit() {
    employeeData.map(async (employee) => {
      const { first_name, last_name, email, gender, number, photo } = employee;
      await this.employeeModel.create({
        first_name,
        last_name,
        email,
        gender,
        number,
        photo,
      });
    });
  }

  async create(createEmployeeDto: CreateEmployeeDto): Promise<Employee> {
    const newEmployee = await this.employeeModel.create(createEmployeeDto);
    return newEmployee;
  }

  async findAll(): Promise<Employee[]> {
    return this.employeeModel.find().exec();
  }

  async findOne(id: string): Promise<Employee> {
    return this.employeeModel.findOne({ _id: id }).exec();
  }

  async update(
    id: string,
    updateEmployeeDto: UpdateEmployeeDto,
  ): Promise<Employee> {
    const updatedEmployee = await this.employeeModel
      .findByIdAndUpdate({ _id: id }, updateEmployeeDto)
      .exec();
    return updatedEmployee;
  }

  async remove(id: string) {
    const deletedEmployee = await this.employeeModel
      .findByIdAndRemove({ _id: id })
      .exec();
    return deletedEmployee;
  }
}
