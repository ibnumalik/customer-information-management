import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
} from '@nestjs/common';
import { CustomerService } from './customer.service';
import { Customer } from './customer.entity';

@Controller('customer')
export class CustomerController {
  constructor(private customerService: CustomerService) {}

  @Get()
  index(): Promise<Customer[]> {
    return this.customerService.findAll();
  }

  @Post('create')
  async create(@Body() customerData: Customer): Promise<any> {
    return this.customerService.create(customerData);
  }

  @Put(':id/update')
  async update(@Param('id') id, @Body() customerData: Customer): Promise<any> {
    customerData.id = Number(id);
    console.log(`Update #${customerData.id}`);
    return this.customerService.update(customerData);
  }

  @Delete(':id/delete')
  async delete(@Param('id') id): Promise<any> {
    return this.customerService.delete(id);
  }
}
