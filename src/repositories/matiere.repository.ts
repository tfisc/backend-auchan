import { EntityRepository, Repository } from 'typeorm';
import { Matiere } from 'src/entities/matiere.entity';

@EntityRepository(Matiere)
export class MatiereRepository extends Repository<Matiere> { }
