import { Enfant } from 'src/entities/enfant.entity';
import { Matiere } from 'src/entities/matiere.entity';
import {PlageHoraire} from 'src/entities/plage-horaire.entity';
import { EtatCours } from 'src/entities/etat-cours.entity';

export class CoursDto {
    plageHoraire: PlageHoraire;
    idEnfant: Enfant;
    idEtat: EtatCours;
    idMatiere: Matiere;
}
