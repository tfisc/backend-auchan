import { Injectable } from '@nestjs/common';
import { EtablissementRepository } from 'src/repositories/etablissement.repository';
import { Etablissement } from 'src/entities/etablissement.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class EtablissementService {
    constructor(
        @InjectRepository(Etablissement)
        private readonly repository: EtablissementRepository,
    ) { }

    async getAll(): Promise<Etablissement[]> {
        return await this.repository.find();
    }
}
