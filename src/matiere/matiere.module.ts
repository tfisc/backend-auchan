import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Matiere } from 'src/entities/matiere.entity';
import { MatiereController } from './matiere.controller';
import { MatiereService } from './matiere.service';

@Module({
    imports: [TypeOrmModule.forFeature([Matiere])],
    controllers: [MatiereController],
    providers: [MatiereService],
})
export class MatiereModule { }
