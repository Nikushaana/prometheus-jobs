import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateCityDto } from './dto/create-city.dto';
import { CityService } from './city.service';

@Controller('city')
export class CityController {
    constructor(private readonly cityService: CityService) { }

    @Post()
    create(@Body() dto: CreateCityDto) {
        return this.cityService.create(dto);
    }

    @Get()
    findAll() {
        return this.cityService.findAll();
    }
}
