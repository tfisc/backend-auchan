import { Entity, PrimaryColumn, OneToOne, JoinColumn } from 'typeorm';
import { Matiere } from './matiere.entity';
import { Etudiant } from './etudiant.entity';

@Entity()
export class MatiereEtudiant {
    @PrimaryColumn()
    @OneToOne(() => Etudiant)
    @JoinColumn()
    idEtudiant: number;

    @PrimaryColumn()
    @OneToOne(() => Matiere)
    @JoinColumn()
    idMatiere: number;
}
