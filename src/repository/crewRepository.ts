import { AppDataSource } from "../datasource/rocketproject";
import { Crew } from "../models/Crew";
import { IRepository } from "./Interfaces/IRepository";

export class CrewRepository implements IRepository<Crew>{
    private crewRepository = AppDataSource.getRepository(Crew)

    async get (id: number): Promise<Crew> {
        const one = await this.crewRepository.findOne({ where: { id: id } });
        if(one == null)
            throw new Error('Something bad happened');
        return one;
    }
    
    async getAll (): Promise<Crew[]> {
        return await this.crewRepository.find();
    }

    async create (data: Crew): Promise<void> {
        await this.crewRepository.save(data);
        
    }
    async update (id: number, data: Partial<Crew>) : Promise<void> {
        const crew = await this.get(id);
        Object.assign(crew, data)
        console.log(data)
        await this.crewRepository.save(crew);
        await this.crewRepository.findOne({ where: { id: id } });
    }

    async delete (id: number)  : Promise<void> {
        await this.crewRepository.delete({ id });
    }       
}