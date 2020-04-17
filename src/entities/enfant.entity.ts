import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    OneToOne,
    JoinColumn,
    OneToMany,
} from 'typeorm';

import { Utilisateur } from './utilisateur.entity';
import { Classe } from './classe.entity' ;

@Entity()
export class Enfant {
    @PrimaryGeneratedColumn()
    id?: number;

    @Column()
    prenom: string;

    @OneToOne(() => Utilisateur)
    @JoinColumn()
    idParent: Utilisateur;

    @OneToOne(() => Classe)
    @JoinColumn()
    idClasse: Classe;
}
