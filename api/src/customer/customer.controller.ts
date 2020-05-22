import { Controller, Get } from '@nestjs/common';

@Controller('customer')
export class CustomerController {
  @Get()
  index() {
    return 'This action will return customer';
  }
}
