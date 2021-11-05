import {Controller, Get} from '@nestjs/common';
import { ClassService } from './class.service';

@Controller('classes')
export class ClassController {
    constructor(private readonly classService: ClassService) {}

    @Get()
    getClasses(): string {
        return this.classService.getClasses();
    }
}