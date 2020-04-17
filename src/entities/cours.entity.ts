import { OneToOne, JoinColumn, PrimaryGeneratedColumn, Entity, ManyToOne, Column } from 'typeorm';

import { PlageHoraire } from './plage-horaire.entity';
import { Enfant } from './enfant.entity';
import { EtatCours } from './etat-cours.entity';
import { Matiere } from './matiere.entity';
import { Etudiant } from './etudiant.entity';

@Entity()
export class Cours {

    @PrimaryGeneratedColumn()
    id?: number;

    @Column('timestamptz')
    date: number;

    @OneToOne(() => PlageHoraire, { cascade: true })
    @JoinColumn()
    plageHoraire: PlageHoraire;

    @ManyToOne(() => Enfant)
    @JoinColumn()
    idEnfant: Enfant;

    @ManyToOne(() => Etudiant)
    @JoinColumn()
    idEtudiant: Etudiant;

    @ManyToOne(() => EtatCours)
    @JoinColumn()
    idEtat: EtatCours;

    @ManyToOne(() => Matiere)
    @JoinColumn()
    idMatiere: Matiere;

}
