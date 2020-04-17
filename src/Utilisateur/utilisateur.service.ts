import { InjectRepository } from '@nestjs/typeorm';
import { Injectable, HttpStatus, HttpException } from '@nestjs/common';
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

    async login(info: { mail: string, password: string }) {
        const user = await this.utilisateurRepository.findOne({ where: { mail: info.mail }, relations: ['enfants'] });

        if (user && user.password === info.password) {
            return user;
        } else {
            throw new HttpException('wrong credentials', HttpStatus.UNAUTHORIZED);
        }
    }
}
