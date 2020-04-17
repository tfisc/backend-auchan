import { Classe } from 'src/entities/classe.entity';
import { Utilisateur } from 'src/entities/utilisateur.entity';

export class EnfantDto {
    prenom: string;
    idParent: Utilisateur;
    idClasse: Classe;
}
