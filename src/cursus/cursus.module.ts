import { Module } from '@nestjs/common';
import { CursusService } from './cursus.service';
import { CursusController } from './cursus.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Cursus } from 'src/entities/cursus.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Cursus])],
  providers: [CursusService],
  controllers: [CursusController],
})
export class CursusModule { }
