import { Controller, Get } from '@nestjs/common';
import { CursusService } from './cursus.service';
import { Cursus } from 'src/entities/cursus.entity';

@Controller('cursus')
export class CursusController {
    constructor(private readonly cursusService: CursusService) { }
    @Get()
    async getAll(): Promise<Cursus[]> {
        return await this.cursusService.getAll();
    }
}
