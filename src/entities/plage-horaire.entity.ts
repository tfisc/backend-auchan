import {
    Entity,
    OneToOne,
    JoinColumn,
    PrimaryColumn,
    ManyToOne,
    Column,
    PrimaryGeneratedColumn,
} from 'typeorm';

import { Etudiant } from './etudiant.entity';
import { JourSemaine } from './jour-semaine.entity';

@Entity()
export class PlageHoraire {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ enum: ['LUNDI', 'MARDI', 'MERCREDI', 'JEUDI', 'VENDREDI', 'SAMEDI', 'DIMANCHE'] })
    jour: string;

    @Column()
    dateDebut: number;

    @Column()
    dateFin: number;

    @ManyToOne(type => Etudiant, etudiant => etudiant.horaires)
    etudiant: Etudiant;
}
