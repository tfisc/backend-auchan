import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Cursus } from 'src/entities/cursus.entity';
import { CursusRepository } from 'src/repositories/cursus.repository';
import { EtudiantDto } from 'src/dto/etudiant.dto';
import { Etudiant } from 'src/entities/etudiant.entity';

@Injectable()
export class CursusService {
    constructor(
        @InjectRepository(Cursus)
        private readonly repository: CursusRepository,
    ) { }

    async getAll(): Promise<Cursus[]> {
        return await this.repository.find();
    }
}
