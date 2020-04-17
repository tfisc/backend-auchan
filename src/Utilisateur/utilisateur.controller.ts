import { Controller, Post, Body } from '@nestjs/common';
import { UtilisateurService } from './utilisateur.service';
import { UtilisateurDto } from 'src/dto/utilisateur.dto';
import { Utilisateur } from 'src/entities/utilisateur.entity';

@Controller('utilisateur')
export class UtilisateurController {

    constructor(private readonly utilisateurService: UtilisateurService) { }

    @Post('create')
    async create(
        @Body() utilisateurDto: UtilisateurDto,
    ): Promise<Utilisateur> {
        return await this.utilisateurService.createUtilisateur(utilisateurDto);
    }

    @Post('login')
    async login(
        @Body() info: { mail: string, password: string }
    ): Promise<Utilisateur> {
        return await this.utilisateurService.login(info);
    }


}
