import { Controller, Post, Body } from '@nestjs/common';
import { Etudiant } from 'src/entities/etudiant.entity';
import { EtudiantService } from './etudiant.service';
import { EtudiantDto } from 'src/dto/etudiant.dto';
import { Matiere } from 'src/entities/matiere.entity';

@Controller('etudiant')
export class EtudiantController {
    constructor(private readonly etudiantService: EtudiantService) { }

    @Post('create')
    async create(
        @Body() etudiantDto: EtudiantDto,
    ): Promise<Etudiant> {
        return await this.etudiantService.create(etudiantDto);
    }

    @Post('login')
    async login(
        @Body() etudiantLogin: { mail: string, password: string },
    ): Promise<Etudiant> {
        return await this.etudiantService.login(etudiantLogin);
    }

    @Post('teach')
    async teach(
        @Body() conditions: { jour: string, dateDebut: number, dateFin: number, matiere: Matiere },
    ): Promise<Etudiant[]> {
        return await this.etudiantService.teach(conditions);
    }
}
