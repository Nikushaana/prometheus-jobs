import { Module } from '@nestjs/common';
import { VacanciesController } from './vacancies.controller';
import { VacanciesService } from './vacancies.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Vacancy } from './entity/vacancy.entity';
import { Company } from 'src/companies/entity/company.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Vacancy, Company])],
  controllers: [VacanciesController],
  providers: [VacanciesService]
})
export class VacanciesModule {}
