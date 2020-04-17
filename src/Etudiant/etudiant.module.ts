import { Module } from '@nestjs/common';
import { EtudiantService } from './etudiant.service';
import { EtudiantController } from './etudiant.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Etudiant } from 'src/entities/etudiant.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Etudiant])],
  providers: [EtudiantService],
  controllers: [EtudiantController],
})
export class EtudiantModule { }
