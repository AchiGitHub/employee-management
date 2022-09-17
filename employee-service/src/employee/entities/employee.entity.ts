import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Gender } from '../dto/create-employee.dto';

export type EmployeeDocument = Employee & Document;

@Schema()
export class Employee {
  @Prop()
  first_name: string;
  @Prop()
  last_name: string;
  @Prop()
  email: string;
  @Prop()
  number: string;
  @Prop()
  gender: Gender;
  @Prop()
  photo: string;
}

export const EmployeeSchema = SchemaFactory.createForClass(Employee);
