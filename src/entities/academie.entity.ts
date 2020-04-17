import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
} from 'typeorm';

@Entity()
export class Academie {
    @PrimaryGeneratedColumn()
    id?: number;

    @Column()
    libelle: string;
}
