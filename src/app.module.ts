import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UtilisateurModule } from './utilisateur/utilisateur.module';
import { EtudiantModule } from './Etudiant/etudiant.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Utilisateur } from './entities/utilisateur.entity';
import { Etudiant } from './entities/etudiant.entity';
import { Cursus } from './entities/cursus.entity';
import { Academie } from './entities/academie.entity';
import { TypeUtilisateur } from './entities/type-utilisateur.entity';
import { Etablissement } from './entities/etablissement.entity';
import { Matiere } from './entities/matiere.entity';
import { CursusModule } from './cursus/cursus.module';
import { EtablissementModule } from './etablissement/etablissement.module';
import { MatiereModule } from './matiere/matiere.module';
import { PlageHoraire } from './entities/plage-horaire.entity';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'localhost',
    port: 5431,
    username: 'postgres',
    password: 'password',
    database: 'workshop-auchan',
    entities: [
      Utilisateur, Etudiant, Cursus, Etablissement, Academie, TypeUtilisateur, Matiere, PlageHoraire,
    ],
    synchronize: true,
  }),
    UtilisateurModule, EtudiantModule, CursusModule, EtablissementModule, MatiereModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
