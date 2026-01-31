import { IsString } from 'class-validator';

export class CreateSalaryTypeDto {
  @IsString()
  name: string;
}
