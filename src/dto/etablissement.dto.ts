import { Academie } from 'src/entities/academie.entity';

export class EtablissementDto {
    libelle: string;
    type: string;
    statut: string;
    academie: Academie;
}
