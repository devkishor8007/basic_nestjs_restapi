import { Module } from '@nestjs/common';
import { EmployeeController } from '../employee/employee.controller';
import { OfficeRecordController } from '../office-record/office-record.controller';

@Module({
  imports: [],
  controllers: [EmployeeController, OfficeRecordController],
})
// eslint-disable-next-line prettier/prettier
export class AppModule { }
