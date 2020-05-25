import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { IsNotEmpty, IsEmail } from 'class-validator';

@Entity()
export class Customer {
  @PrimaryGeneratedColumn()
  id: number;

  @IsNotEmpty()
  @Column()
  name: string;

  @IsNotEmpty()
  @IsEmail()
  @Column()
  email: string;

  @IsNotEmpty()
  @Column()
  phone: string;

  @IsNotEmpty()
  @Column()
  address: string;
}
