import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Vacancy } from './entity/vacancy.entity';
import { Company } from 'src/companies/entity/company.entity';
import { Repository } from 'typeorm';
import { CreateVacancyDto } from './dto/create-vacancy.dto';

@Injectable()
export class VacanciesService {
    constructor(
        @InjectRepository(Vacancy)
        private readonly vacancyRepo: Repository<Vacancy>,
        @InjectRepository(Company)
        private readonly companyRepo: Repository<Company>,
    ) { }

    async create(dto: CreateVacancyDto) {
        const company = await this.companyRepo.findOne({ where: { id: dto.companyId } });
        if (!company) throw new NotFoundException('Company not found');

        const vacancy = this.vacancyRepo.create({
            ...dto,
            company,
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
