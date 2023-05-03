import { LaunchRepository } from "../repository/launchRepository";
import { Launch } from "../models/Launch";

export class LaunchServices {
    constructor(private readonly launchRepository: LaunchRepository) {}

    async get(id: number): Promise<Launch>{
        return this.launchRepository.get(id);
    }

    async getAll(): Promise<Launch[]>{
        return this.launchRepository.getAll();
    }

    async create(launch: Launch): Promise<void>{
        return this.launchRepository.create(launch);
    }

    async update(id: number, launch: Launch): Promise<void>{
        return this.launchRepository.update(id, launch);
    }

    async delete(id: number): Promise<void>{
        return this.launchRepository.delete(id);
    }
}
