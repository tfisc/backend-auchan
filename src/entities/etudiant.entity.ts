import { Entity, Column, JoinColumn, OneToMany, ManyToOne, ManyToMany, JoinTable } from 'typeorm';
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

    @ManyToOne(() => Etablissement)
    @JoinColumn()
    etablissement: Etablissement;

    @ManyToOne(() => Cursus)
    @JoinColumn()
    cursus: Cursus;

    @OneToMany(type => PlageHoraire, horaire => horaire.etudiant, { cascade: true })
    horaires: PlageHoraire[];

    @ManyToMany(type => Matiere, { cascade: true })
    @JoinTable()
    matieres: Matiere[];
}
