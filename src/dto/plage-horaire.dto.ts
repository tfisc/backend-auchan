import { Etudiant } from 'src/entities/etudiant.entity';

export class PlageHoraireDto {
    jour: string;
    dateDebut: number;
    dateFin: number;
    etudiant: Etudiant;
}
