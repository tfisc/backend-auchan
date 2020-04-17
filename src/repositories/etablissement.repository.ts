import { EntityRepository, Repository } from 'typeorm';
import { Cursus } from 'src/entities/cursus.entity';
import { Etablissement } from 'src/entities/etablissement.entity';

@EntityRepository(Etablissement)
export class EtablissementRepository extends Repository<Etablissement> { }
