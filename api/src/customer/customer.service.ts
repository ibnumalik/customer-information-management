import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Customer } from './customer.entity';
import { Repository, UpdateResult, DeleteResult } from 'typeorm';

@Injectable()
export class CustomerService {
  constructor(
    @InjectRepository(Customer)
    private customerRepository: Repository<Customer>,
  ) {}

  async findAll(): Promise<Customer[]> {
    return await this.customerRepository.find();
  }

  async find(id: number): Promise<Customer> {
    return await this.customerRepository.findOneOrFail(id);
  }

  async create(customer: Customer): Promise<Customer> {
    return await this.customerRepository.save(customer);
  }

  async update(customer: Customer): Promise<UpdateResult> {
    return await this.customerRepository.update(customer.id, customer);
  }

  async delete(id: number): Promise<DeleteResult> {
    return await this.customerRepository.delete(id);
  }
}
