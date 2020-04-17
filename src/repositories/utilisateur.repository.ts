import { EntityRepository, Repository } from 'typeorm';
import { Utilisateur } from 'src/entities/utilisateur.entity';

@EntityRepository(Utilisateur)
export class UtilisateurRepository extends Repository<Utilisateur> { }
