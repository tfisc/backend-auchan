import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
} from 'typeorm';

@Entity()
export class JourSemaine {
    @PrimaryGeneratedColumn()
    id?: number;

    @Column({ enum: ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche'] })
    libelle: string;
}
