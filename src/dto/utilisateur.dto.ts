import { TypeUtilisateur } from '../entities/type-utilisateur.entity';

export class UtilisateurDto {
    nom: string;
    prenom: string;
    mail: string;
    password: string;
    description: string;
    photo: string;
    type: TypeUtilisateur;
}