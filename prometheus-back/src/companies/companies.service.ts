import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Company } from './entity/company.entity';
import { Repository } from 'typeorm';
import { CreateCompanyDto } from './dto/create-company.dto';

@Injectable()
export class CompaniesService {
    constructor(
        @InjectRepository(Company)
        private readonly companyRepo: Repository<Company>,
    ) { }

    async create(dto: CreateCompanyDto) {
        const company = this.companyRepo.create(dto);
        return this.companyRepo.save(company);
    }

    async findAll() {
        return this.companyRepo.find();
    }
}
