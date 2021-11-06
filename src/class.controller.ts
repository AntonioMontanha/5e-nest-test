import {Controller, Get} from '@nestjs/common';
import { AxiosResponse } from 'axios';
import { Observable } from 'rxjs';
import { ClassService } from './class.service';

@Controller('classes')
export class ClassController {
    constructor(private readonly classService: ClassService) {}

    @Get()
    getClasses(): Observable<AxiosResponse<any, any>> {
        return this.classService.getClasses();
    }
}