import { AppDataSource } from '../datasource/rocketproject'
import { Rocket } from '../models/Rocket'
import { IRepository } from "./Interfaces/IRepository";

export class RocketRepository implements IRepository<Rocket> {
    rocketRepository = AppDataSource.getRepository(Rocket)
  
    async get(id: number): Promise<Rocket> {
        const one = await this.rocketRepository.findOne({ where: { id: id } });
        if(one == null)
            throw new Error('Something bad happened');
        return one;
    }
  
    async getAll(): Promise<Rocket[]> {
        console.log("estou no repository pegando todos os foguetes")
        return await this.rocketRepository.find();
    }
  
    async create(data: Rocket): Promise<void> {
        const rocket = this.rocketRepository.create(data);
        await this.rocketRepository.save(data);
        rocket;
    }
    async update(id: number, data: Partial<Rocket>): Promise<void> {
        await this.rocketRepository.update({ id }, data);
        await this.rocketRepository.findOne({ where: { id: id } });
    }
  
    async delete(id: number): Promise<void> {
        await this.rocketRepository.delete({ id });
    }
}