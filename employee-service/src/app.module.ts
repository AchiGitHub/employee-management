import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { EmployeeModule } from './employee/employee.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://mongodb:27017/employees'),
    EmployeeModule,
  ],
})
export class AppModule {}
