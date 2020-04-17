import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
} from 'typeorm';

@Entity()
export class EtatCours {
    @PrimaryGeneratedColumn()
    id?: number;

    @Column({ enum: ['En attente', 'Validé', 'Refusé', 'En cours', 'Terminé'] })
    libelle: string;
}
