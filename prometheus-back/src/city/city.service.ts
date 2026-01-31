import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { City } from './entity/city.entity';
import { CreateCityDto } from './dto/create-city.dto';

@Injectable()
export class CityService {
    constructor(
        @InjectRepository(City)
        private readonly cityRepo: Repository<City>,
    ) { }

    async create(dto: CreateCityDto) {
        const city = this.cityRepo.create(dto);
        return this.cityRepo.save(city);
    }

    async findAll() {
        return this.cityRepo.find();
    }
}
