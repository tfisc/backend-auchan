import { UtilisateurDto } from './utilisateur.dto';
import { Etablissement } from 'src/entities/etablissement.entity';
import { Cursus } from 'src/entities/cursus.entity';
import { PlageHoraire } from 'src/entities/plage-horaire.entity';

export class EtudiantDto extends UtilisateurDto {
    dateNaissance: Date;
    etablissement: Etablissement;
    cursus: Cursus;
    note: number;
    horaires: PlageHoraire[];
}
