import { InjectRepository } from '@nestjs/typeorm';
import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { Etudiant } from 'src/entities/etudiant.entity';
import { EtudiantDto } from 'src/dto/etudiant.dto';
import { EtudiantRepository } from '../repositories/etudiant.repository'

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
        const user = await this.repository.findOne({ where: { mail: utilisateur.mail } });
        if (user && user.password === utilisateur.password) {
            return user;
        } else {
            throw new HttpException('invalid credentils', HttpStatus.UNAUTHORIZED);
        }
    }
}

