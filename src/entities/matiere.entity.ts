import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Etudiant } from './etudiant.entity';

@Entity()
export class Matiere {
    @PrimaryGeneratedColumn()
    idMatiere?: number;

    @Column({ enum: ['MATHEMATIQUES', 'FRANCAIS', 'ANGLAIS', 'ESPAGNOL', 'PHYSIQUE CHIMIE', 'SVT', 'HISTOIRE', 'GEOGRAPHIE'] })
    libelle: string;

    @ManyToOne(type => Etudiant, etudiant => etudiant.matieres)
    etudiant: Etudiant;
}
