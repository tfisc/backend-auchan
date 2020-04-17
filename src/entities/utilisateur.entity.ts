import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    OneToOne,
    JoinColumn,
    ManyToOne,
    ManyToMany,
    JoinTable,
    OneToMany,
} from 'typeorm';

import { TypeUtilisateur } from './type-utilisateur.entity';
import { Enfant } from './enfant.entity';

@Entity()
export class Utilisateur {
    @PrimaryGeneratedColumn()
    id?: number;

    @Column()
    nom: string;

    @Column()
    prenom: string;

    @Column()
    mail: string;

    @Column()
    password: string;

    @Column()
    description: string;

    @Column({ nullable: true })
    photo: string;

    @ManyToOne(() => TypeUtilisateur)
    @JoinColumn()
    type: TypeUtilisateur;

    @OneToMany(() => Enfant, enfant => enfant.idParent)
    enfants: Enfant[];

}
