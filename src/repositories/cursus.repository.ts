import { EntityRepository, Repository } from 'typeorm';
import { Cursus } from 'src/entities/cursus.entity';

@EntityRepository(Cursus)
export class CursusRepository extends Repository<Cursus> { }
