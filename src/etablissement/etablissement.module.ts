import { Module } from '@nestjs/common';
import { EtablissementService } from './etablissement.service';
import { EtablissementController } from './etablissement.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Etablissement } from 'src/entities/etablissement.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Etablissement])],
  providers: [EtablissementService],
  controllers: [EtablissementController],
})
export class EtablissementModule { }
