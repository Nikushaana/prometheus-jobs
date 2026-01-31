import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
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
    findAll(@Query() query: any) {
        return this.vacanciesService.findAll(query);
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.vacanciesService.findOne(id);
    }
}
