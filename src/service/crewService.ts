import { CrewRepository } from "../repository/crewRepository";
import { Crew } from "../models/Crew";
import { IService } from "./Interface/IService";

export class CrewServices implements IService<Crew>{
    constructor(private readonly crewRepository: CrewRepository) {}

    async get(id: number): Promise<Crew>{
        return this.crewRepository.get(id);
    }

    async getAll(): Promise<Crew[]>{
        return this.crewRepository.getAll();
    }

    async create(crew: Crew): Promise<Crew>{
        return this.crewRepository.create(crew);
    }

    async update(id: number, crew: Crew): Promise<void>{
        return this.crewRepository.update(id, crew);
    }

    async delete(id: number): Promise<void>{
        return this.crewRepository.delete(id);
    }
}