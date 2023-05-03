import { Request, Response } from "express";
import { CrewmanRepository } from "../repository/crewmanRepository";
import { Crewman } from "../models/Crewman";

export class CrewmanServices {
    constructor(private readonly crewmanRepository: CrewmanRepository) {}

    async get(id: number): Promise<Crewman>{
        return this.crewmanRepository.get(id);
    }

    async getAll(): Promise<Crewman[]>{
        return this.crewmanRepository.getAll();
    }

    async getSome(id: number[]): Promise<Crewman[]>{
        return this.crewmanRepository.getSome(id);
    }

    async create(crewman: Crewman): Promise<void>{
        return this.crewmanRepository.create(crewman);
    }

    async update(id: number, crewman: Crewman): Promise<void>{
        return this.crewmanRepository.update(id, crewman);
    }

    async delete(id: number): Promise<void>{
        return this.crewmanRepository.delete(id);
    }
    
}
