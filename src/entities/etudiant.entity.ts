import { Entity, Column, PrimaryColumn, OneToOne, JoinColumn, OneToMany } from 'typeorm';
import { Utilisateur } from './utilisateur.entity';
import { Etablissement } from './etablissement.entity';
import { Cursus } from './cursus.entity';
import { PlageHoraire } from './plage-horaire.entity';
import { Matiere } from './matiere.entity';

@Entity()
export class Etudiant extends Utilisateur {

    @Column({ nullable: true })
    dateNaissance: Date;

    @Column('float')
    note: number;

    @OneToOne(() => Etablissement)
    @JoinColumn()
    etablissement: Etablissement;

    @OneToOne(() => Cursus)
    @JoinColumn()
    cursus: Cursus;

    @OneToMany(type => PlageHoraire, horaire => horaire.etudiant)
    horaires: PlageHoraire[];

    @OneToMany(type => Matiere, matiere => matiere.etudiant)
    matieres: Matiere[];
}
