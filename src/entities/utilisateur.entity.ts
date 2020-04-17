import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    OneToOne,
    JoinColumn,
} from 'typeorm';

import { TypeUtilisateur } from './type-utilisateur.entity';

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

    @Column('bytea', { nullable: true })
    photo: Buffer;

    @OneToOne(() => TypeUtilisateur)
    @JoinColumn()
    type: TypeUtilisateur;

}
