import { CrewRepository } from "../repository/crewRepository";
import { Crew } from "../models/Crew";

export class CrewServices {
    constructor(private readonly crewRepository: CrewRepository) {}

    async get(id: number): Promise<Crew>{
        return this.crewRepository.get(id);
    }

    async getAll(): Promise<Crew[]>{
        return this.crewRepository.getAll();
    }

    async create(crew: Crew): Promise<void>{
        return this.crewRepository.create(crew);
    }

    async update(id: number, crew: Crew): Promise<void>{
        return this.crewRepository.update(id, crew);
    }

    async delete(id: number): Promise<void>{
        return this.crewRepository.delete(id);
    }
}