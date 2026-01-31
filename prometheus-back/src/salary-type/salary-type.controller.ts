import { Body, Controller, Get, Post } from '@nestjs/common';
import { SalaryTypeService } from './salary-type.service';
import { CreateSalaryTypeDto } from './dto/create-salary-type.dto';

@Controller('salary-type')
export class SalaryTypeController {
    constructor(private readonly salaryTypeService: SalaryTypeService) { }

    @Post()
    create(@Body() dto: CreateSalaryTypeDto) {
        return this.salaryTypeService.create(dto);
    }

    @Get()
    findAll() {
        return this.salaryTypeService.findAll();
    }
}
