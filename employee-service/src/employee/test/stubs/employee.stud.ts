import { Gender } from '../../dto/create-employee.dto';
import { Employee } from 'src/employee/entities/employee.entity';

export const employeeStub = (): Employee => {
  return {
    first_name: 'Henri',
    last_name: 'Rodriguez',
    email: 'Darrin_Rippin@gmail.com',
    number: '+94771277218',
    gender: Gender.MALE,
    photo: 'https://randomuser.me/api/portraits/men/92.jpg'
  };
};
