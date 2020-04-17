import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';
import { Utilisateur } from 'src/entities/utilisateur.entity';
import { UtilisateurRepository } from 'src/repositories/utilisateur.repository';
import { UtilisateurDto } from 'src/dto/utilisateur.dto';

@Injectable()
export class UtilisateurService {
    constructor(
        @InjectRepository(Utilisateur)
        private readonly utilisateurRepository: UtilisateurRepository,
    ) { }

    async createUtilisateur(utilisateur: UtilisateurDto): Promise<Utilisateur> {
        return await this.utilisateurRepository.save(utilisateur);
    }
}
