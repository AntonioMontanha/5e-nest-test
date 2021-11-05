import { Injectable } from "@nestjs/common";

@Injectable()
export class ClassService {
    getClasses() : string {
        return 'Classes';
    }
}