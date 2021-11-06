import { HttpService } from "@nestjs/axios";

import { Injectable } from "@nestjs/common";
import { AxiosResponse } from "axios";
import { Observable } from "rxjs";


@Injectable()
export class ClassService {
    constructor(private httpService: HttpService) {}

    getClasses() : Observable<AxiosResponse<any, any>> {
      return this.httpService.get('https://www.dnd5eapi.co/api/classes');
        
    }
}



