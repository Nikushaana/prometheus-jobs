import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { WorkType } from './entity/work-type.entity';
import { CreateWorkTypeDto } from './dto/create-work-type.dto';

@Injectable()
export class WorkTypeService {
    constructor(
        @InjectRepository(WorkType)
        private readonly workTypeRepo: Repository<WorkType>,
    ) { }

    async create(dto: CreateWorkTypeDto) {
        const workType = this.workTypeRepo.create(dto);
        return this.workTypeRepo.save(workType);
    }

    async findAll() {
        return this.workTypeRepo.find();
    }
}
