import { Module } from '@nestjs/common';
import { VacanciesController } from './vacancies.controller';
import { VacanciesService } from './vacancies.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Vacancy } from './entity/vacancy.entity';
import { Company } from 'src/companies/entity/company.entity';
import { City } from 'src/city/entity/city.entity';
import { Category } from 'src/category/entity/category.entity';
import { WorkType } from 'src/work-type/entity/work-type.entity';
import { SalaryType } from 'src/salary-type/entity/salary-type.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Vacancy, Company, City, Category, WorkType, SalaryType])],
  controllers: [VacanciesController],
  providers: [VacanciesService]
})
export class VacanciesModule {}
