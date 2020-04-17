import { Controller, Get } from '@nestjs/common';
import { EtablissementService } from './etablissement.service';
import { Etablissement } from 'src/entities/etablissement.entity';

@Controller('etablissement')
export class EtablissementController {
    constructor(private readonly etablissementService: EtablissementService) { }
    @Get()
    async getAll(): Promise<Etablissement[]> {
        return await this.etablissementService.getAll();
    }
}
