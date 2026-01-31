import { IsString } from 'class-validator';

export class CreateWorkTypeDto {
  @IsString()
  name: string;
}
