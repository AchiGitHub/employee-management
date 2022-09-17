import { IsNotEmpty, IsEmail, IsEnum, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export enum Gender {
  MALE = 'M',
  FEMALE = 'F',
}

export class CreateEmployeeDto {
  @ApiProperty({
    type: String,
    required: true,
    description: 'first_name is required',
  })
  @IsNotEmpty()
  @IsString()
  first_name: string;

  @ApiProperty({
    type: String,
    required: true,
    description: 'last_name is required',
  })
  @IsNotEmpty()
  @IsString()
  last_name: string;

  @ApiProperty({
    type: String,
    required: true,
    description: 'email is required',
  })
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @ApiProperty({
    type: String,
    required: true,
    description: 'number is required',
  })
  @IsNotEmpty()
  @IsString()
  number: string;

  @ApiProperty({
    type: String,
    required: true,
    description: 'gender is required',
  })
  @IsNotEmpty()
  @IsEnum(Gender)
  gender: Gender;

  @ApiProperty({
    type: String,
    required: false,
  })
  @ApiProperty({
    type: String,
    required: false,
  })
  photo: string;
}
