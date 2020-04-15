import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
} from 'typeorm';

@Entity()
export class TypeUtilisateur {
    @PrimaryGeneratedColumn()
    id?: number;

    @Column({ enum: ['ADMINISTRATEUR', 'PARENT', 'ETUDIANT'] })
    libelle: string;
}