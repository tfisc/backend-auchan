import { InjectRepository } from '@nestjs/typeorm';
import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { Etudiant } from 'src/entities/etudiant.entity';
import { EtudiantDto } from 'src/dto/etudiant.dto';
import { EtudiantRepository } from '../repositories/etudiant.repository'
import { Matiere } from 'src/entities/matiere.entity';

@Injectable()
export class EtudiantService {
    constructor(
        @InjectRepository(Etudiant)
        private readonly repository: EtudiantRepository,
    ) { }

    async create(utilisateur: EtudiantDto): Promise<Etudiant> {
        return await this.repository.save(utilisateur);
    }

    async login(utilisateur: { mail: string, password: string }): Promise<Etudiant> {
        const user = await this.repository.findOne({ where: { mail: utilisateur.mail }, relations: ['horaires', 'matieres', 'cursus', 'etablissement', 'type'] });
        if (user && user.password === utilisateur.password) {
            return user;
        } else {
            throw new HttpException('invalid credentils', HttpStatus.UNAUTHORIZED);
        }
    }

    async teach(conditions: { jour: string, dateDebut: number, dateFin: number, matiere: Matiere }): Promise<Etudiant[]> {
        return await this.repository.createQueryBuilder('etudiant')
            .leftJoinAndSelect('etudiant.matieres', 'matiere')
            .leftJoinAndSelect('etudiant.horaires', 'plage_horaire')
            .leftJoinAndSelect('etudiant.cursus', 'cursus')
            .leftJoinAndSelect('etudiant.etablissement', 'etablissement')
            .where('plage_horaire.jour = :jour', { jour: conditions.jour })
            .andWhere('plage_horaire.dateDebut <= :dateDebut', { dateDebut: conditions.dateDebut })
            .andWhere('plage_horaire.dateFin >= :dateFin', { dateFin: conditions.dateFin })
            .andWhere('matiere.idMatiere = :id', { id: conditions.matiere.idMatiere })
            .getMany()

    }
}

