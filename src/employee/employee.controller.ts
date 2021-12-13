import { Controller, Get, Post, Put } from '@nestjs/common';

@Controller('employee')
export class EmployeeController {
  @Get()
  employeeAll(): string {
    return 'getting all employee';
  }
  @Get('/:employeeId')
  getEmployeeById(): string {
    return 'Getting employee by id';
  }
  @Post()
  createEmplotee(): string {
    return 'create employee';
  }
  @Put('/:employeeId')
  updateEmployee(): string {
    return 'update employee by id';
  }
}
