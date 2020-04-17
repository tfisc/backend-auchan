import { EntityRepository, Repository } from 'typeorm';
import { Etudiant } from 'src/entities/etudiant.entity';

@EntityRepository(Etudiant)
export class EtudiantRepository extends Repository<Etudiant> { }
