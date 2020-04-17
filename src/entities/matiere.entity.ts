import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, ManyToMany } from 'typeorm';
import { Etudiant } from './etudiant.entity';

@Entity()
export class Matiere {
    @PrimaryGeneratedColumn()
    idMatiere?: number;

    @Column({ enum: ['MATHEMATIQUES', 'FRANCAIS', 'ANGLAIS', 'ESPAGNOL', 'PHYSIQUE CHIMIE', 'SVT', 'HISTOIRE', 'GEOGRAPHIE'] })
    libelle: string;

    @ManyToMany(type => Etudiant, etudiant => etudiant.matieres)
    etudiants: Etudiant[];
}
