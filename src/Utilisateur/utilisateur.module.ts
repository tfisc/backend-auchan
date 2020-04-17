import { Module } from '@nestjs/common';
import { UtilisateurService } from './utilisateur.service';
import { UtilisateurController } from './utilisateur.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Utilisateur } from 'src/entities/utilisateur.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Utilisateur])],
  providers: [UtilisateurService],
  controllers: [UtilisateurController]
})
export class UtilisateurModule { }
