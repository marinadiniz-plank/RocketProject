import { Crewman } from "../models/Crewman";
import { AppDataSource } from "../datasource/rocketproject";
import { IRepository } from "./Interface/IRepository";
import { In } from "typeorm";

export class CrewmanRepository implements IRepository<Crewman>{
    crewmanRepository = AppDataSource.getRepository(Crewman)

    async get (id: number): Promise<Crewman> {
        const oneCrewman = await this.crewmanRepository.findOne({ where: { id: id } });
        if(oneCrewman == null)  throw new Error('Could not find crewman, try another id');
        return oneCrewman;
    }
    
    async getAll (): Promise<Crewman[]> {
        return await this.crewmanRepository.find();
    }

    async getSome(id: number[]): Promise<Crewman[]>{
        return this.crewmanRepository.findBy({id: In(id)});
    }

    async create (data: Crewman): Promise<Crewman> {
        return await this.crewmanRepository.save(data);
    }

    async update (id: number, data: Partial<Crewman>) : Promise<void> {
        await this.crewmanRepository.update({ id }, data);
    }

    async delete (id: number)  : Promise<void> {
        await this.crewmanRepository.delete({ id });
    }   

}
