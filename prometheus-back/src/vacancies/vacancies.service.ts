import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Vacancy } from './entity/vacancy.entity';
import { Company } from 'src/companies/entity/company.entity';
import { Repository } from 'typeorm';
import { CreateVacancyDto } from './dto/create-vacancy.dto';
import { City } from 'src/city/entity/city.entity';
import { Category } from 'src/category/entity/category.entity';
import { WorkType } from 'src/work-type/entity/work-type.entity';
import { SalaryType } from 'src/salary-type/entity/salary-type.entity';

@Injectable()
export class VacanciesService {
    constructor(
        @InjectRepository(Vacancy)
        private readonly vacancyRepo: Repository<Vacancy>,
        @InjectRepository(Company)
        private readonly companyRepo: Repository<Company>,
        @InjectRepository(City)
        private readonly cityRepo: Repository<City>,
        @InjectRepository(Category)
        private readonly categoryRepo: Repository<Category>,
        @InjectRepository(WorkType)
        private readonly workTypeRepo: Repository<WorkType>,
        @InjectRepository(SalaryType)
        private readonly salaryTypeRepo: Repository<SalaryType>,
    ) { }

    async create(dto: CreateVacancyDto) {
        const company = await this.companyRepo.findOne({ where: { id: dto.companyId } });
        if (!company) throw new NotFoundException('Company not found');

        const city = await this.cityRepo.findOne({ where: { id: dto.cityId } });
        if (!city) throw new NotFoundException('City not found');

        const category = await this.categoryRepo.findOne({ where: { id: dto.categoryId } });
        if (!category) throw new NotFoundException('Category not found');

        const workType = await this.workTypeRepo.findOne({ where: { id: dto.workTypeId } });
        if (!workType) throw new NotFoundException('WorkType not found');

        const salaryType = await this.salaryTypeRepo.findOne({ where: { id: dto.salaryTypeId } });
        if (!salaryType) throw new NotFoundException('SalaryType not found');

        const vacancy = this.vacancyRepo.create({
            ...dto,
            company,
            city,
            category,
            workType,
            salaryType
        });

        return this.vacancyRepo.save(vacancy);
    }

    async findAll() {
        return this.vacancyRepo.find({ order: { createdAt: 'DESC' } });
    }

    async findOne(id: string) {
        const vacancy = await this.vacancyRepo.findOne({ where: { id } });
        if (!vacancy) throw new NotFoundException('Vacancy not found');
        return vacancy;
    }
}
