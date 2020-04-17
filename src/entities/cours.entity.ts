import { OneToOne, JoinColumn, PrimaryGeneratedColumn, Entity } from 'typeorm';

import { PlageHoraire } from './plage-horaire.entity';
import { Enfant } from './enfant.entity';
import { EtatCours } from './etat-cours.entity';
import { Matiere } from './matiere.entity';

@Entity()
export class Cours {

    @PrimaryGeneratedColumn()
    id?: number;

    @OneToOne(() => PlageHoraire)
    @JoinColumn()
    plageHoraire: PlageHoraire;

    @OneToOne(() => Enfant)
    @JoinColumn()
    idEnfant: Enfant;

    @OneToOne(() => EtatCours)
    @JoinColumn()
    idEtat: EtatCours;

    @OneToOne(() => Matiere)
    @JoinColumn()
    idMatiere: Matiere;

}
