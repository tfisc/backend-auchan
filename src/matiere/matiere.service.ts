import { Injectable } from '@nestjs/common';
import { Matiere } from 'src/entities/matiere.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { MatiereRepository } from 'src/repositories/matiere.repository';

@Injectable()
export class MatiereService {
    constructor(
        @InjectRepository(Matiere)
        private readonly repository: MatiereRepository,
    ) { }

    async getAll(): Promise<Matiere[]> {
        return await this.repository.find();
    }
}
