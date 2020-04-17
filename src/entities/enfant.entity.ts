import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    OneToOne,
    JoinColumn,
    OneToMany,
    ManyToOne,
    ManyToMany,
    JoinTable,
} from 'typeorm';

import { Utilisateur } from './utilisateur.entity';
import { Classe } from './classe.entity';

@Entity()
export class Enfant {
    @PrimaryGeneratedColumn()
    id?: number;

    @Column()
    prenom: string;

    @Column()
    code: string;

    @ManyToOne(() => Utilisateur, utilisateur => utilisateur.enfants)
    idParent: Utilisateur;

    @ManyToOne(() => Classe)
    @JoinColumn()
    idClasse: Classe;
}
