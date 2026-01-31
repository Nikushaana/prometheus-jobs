import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Category } from './entity/category.entity';
import { CreateCategoryDto } from './dto/create-category.dto';

@Injectable()
export class CategoryService {
    constructor(
        @InjectRepository(Category)
        private readonly categoryRepo: Repository<Category>,
    ) { }

    async create(dto: CreateCategoryDto) {
        const category = this.categoryRepo.create(dto);
        return this.categoryRepo.save(category);
    }

    async findAll() {
        return this.categoryRepo.find();
    }
}
