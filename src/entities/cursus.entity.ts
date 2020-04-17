import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
} from 'typeorm';

@Entity()
export class Cursus {
    @PrimaryGeneratedColumn()
    id?: number;

    @Column()
    nom: string;
}
