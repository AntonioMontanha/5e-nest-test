import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClassController } from './class.controller';
import { ClassService } from './class.service';

@Module({
  imports: [HttpModule],
  controllers: [AppController, ClassController],
  providers: [AppService, ClassService],
  
})
export class AppModule {}
