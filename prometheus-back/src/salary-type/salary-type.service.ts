import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateSalaryTypeDto } from './dto/create-salary-type.dto';
import { SalaryType } from './entity/salary-type.entity';

@Injectable()
export class SalaryTypeService {
    constructor(
        @InjectRepository(SalaryType)
        private readonly salaryTypeRepo: Repository<SalaryType>,
    ) { }

    async create(dto: CreateSalaryTypeDto) {
        const salaryType = this.salaryTypeRepo.create(dto);
        return this.salaryTypeRepo.save(salaryType);
    }

    async findAll() {
        return this.salaryTypeRepo.find();
    }
}
