import { Body, Controller, Get, Post } from '@nestjs/common';
import { WorkTypeService } from './work-type.service';
import { CreateWorkTypeDto } from './dto/create-work-type.dto';

@Controller('work-type')
export class WorkTypeController {
    constructor(private readonly workTypeService: WorkTypeService) { }

    @Post()
    create(@Body() dto: CreateWorkTypeDto) {
        return this.workTypeService.create(dto);
    }

    @Get()
    findAll() {
        return this.workTypeService.findAll();
    }
}
