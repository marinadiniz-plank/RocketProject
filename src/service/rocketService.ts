import { Rocket } from "../models/Rocket";
import {RocketRepository} from "../repository/rocketRepository";
import { IService } from "./Interface/IService";
export class RocketServices implements IService<Rocket>{
    constructor(private readonly rocketRepository: RocketRepository) {}

    async get(id: number): Promise<Rocket> {
        return this.rocketRepository.get(id);
    }

    async getAll(): Promise<Rocket[]> {
        return this.rocketRepository.getAll();
    }

    async create(rocket: Rocket): Promise<void> {
        return this.rocketRepository.create(rocket);
    }

    async update(id: number, rocket: Rocket): Promise<void> {
        return this.rocketRepository.update (id, rocket);
    }

    async delete(id: number): Promise<void> {
        return this.rocketRepository.delete(id);
    }
}
