import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SalaryType } from './entity/salary-type.entity';
import { SalaryTypeService } from './salary-type.service';
import { SalaryTypeController } from './salary-type.controller';

@Module({
  imports: [TypeOrmModule.forFeature([SalaryType])],
  controllers: [SalaryTypeController],
  providers: [SalaryTypeService]
})
export class SalaryTypeModule {}
