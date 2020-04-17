import { Controller, Get } from '@nestjs/common';
import { Matiere } from 'src/entities/matiere.entity';
import { MatiereService } from './matiere.service';

@Controller('matiere')
export class MatiereController {
    constructor(private readonly etablissementService: MatiereService) { }
    @Get()
    async getAll(): Promise<Matiere[]> {
        return await this.etablissementService.getAll();
    }
}
