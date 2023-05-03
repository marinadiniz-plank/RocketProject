import { AppDataSource } from "../datasource/rocketproject";
import { Crew } from "../models/Crew";
import { IRepository } from "./Interface/IRepository";

export class CrewRepository implements IRepository<Crew>{
    private crewRepository = AppDataSource.getRepository(Crew)

    async get (id: number): Promise<Crew> {
        const oneLaunch = await this.crewRepository.findOne({ where: { id: id } });
        if(oneLaunch == null) throw new Error('Could not find crew, try another id');
        return oneLaunch;
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
        await this.crewRepository.save(crew);
    }

    async delete (id: number)  : Promise<void> {
        await this.crewRepository.delete({ id });
    }       
}