import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { VacanciesService } from './vacancies.service';
import { CreateVacancyDto } from './dto/create-vacancy.dto';

@Controller('vacancies')
export class VacanciesController {
    constructor(private readonly vacanciesService: VacanciesService) { }

    @Post()
    create(@Body() dto: CreateVacancyDto) {
        return this.vacanciesService.create(dto);
    }

    @Get()
    findAll() {
        return this.vacanciesService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.vacanciesService.findOne(id);
    }
}
