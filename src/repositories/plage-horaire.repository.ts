import { EntityRepository, Repository } from 'typeorm';
import { PlageHoraire } from 'src/entities/plage-horaire.entity';

@EntityRepository(PlageHoraire)
export class PlageHoraireRepository extends Repository<PlageHoraire> { }
