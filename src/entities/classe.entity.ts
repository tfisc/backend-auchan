import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
} from 'typeorm';

@Entity()
export class Classe {
    @PrimaryGeneratedColumn()
    id?: number;

    @Column()
    libelle: string;
}
