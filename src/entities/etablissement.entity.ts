import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    OneToOne,
    JoinColumn,
    ManyToOne,
} from 'typeorm';

import { Academie } from './academie.entity';

@Entity()
export class Etablissement {
    @PrimaryGeneratedColumn()
    id?: number;

    @Column()
    libelle: string;

    @Column()
    type: string;

    @Column()
    statut: string;

    @ManyToOne(() => Academie)
    @JoinColumn()
    academie: Academie;
}
