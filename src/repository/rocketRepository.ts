import { AppDataSource } from '../datasource/rocketproject'
import { Rocket } from '../models/Rocket'
import { IRepository } from "./Interface/IRepository";

export class RocketRepository implements IRepository<Rocket> {
    rocketRepository = AppDataSource.getRepository(Rocket)
  
    async get(id: number): Promise<Rocket> {
        const oneRocket = await this.rocketRepository.findOne({ where: { id: id } });
        if(oneRocket == null)
            throw new Error('Could not find rocket, try another id');
        return oneRocket;
    }
  
    async getAll(): Promise<Rocket[]> {
        console.log("estou aqui");
        
        return await this.rocketRepository.find();
    }
  
    async create(data: Rocket): Promise<Rocket> {
        console.log("estou no repositpry");
        
        return await this.rocketRepository.save(data);
    }
    async update(id: number, data: Partial<Rocket>): Promise<void> {
        await this.rocketRepository.update({ id }, data);
    }
  
    async delete(id: number): Promise<void> {
        await this.rocketRepository.delete({ id });
    }
}