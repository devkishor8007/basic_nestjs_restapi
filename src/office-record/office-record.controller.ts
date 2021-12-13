import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';

@Controller('office')
export class OfficeRecordController {
  @Get()
  getOfficeData() {
    return 'get all data';
  }

  @Get('/:officeId')
  getOfficeById(@Param('officeId') officeId: string) {
    return `get office by id ${officeId}`;
  }

  @Post()
  createOffice(@Body() body) {
    return `${JSON.stringify(body)}`;
  }

  @Put('/:officeId')
  updateOffice(@Param('officeId') officeId: string, @Body() body) {
    return `can be updat with the id of ${officeId} with data of ${JSON.stringify(
      body,
    )}`;
  }

  @Delete('/:id')
  deleteOffice(@Param('id') id: string) {
    return `delete the id ${id}`;
  }
}
