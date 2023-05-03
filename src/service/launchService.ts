import { LaunchRepository } from "../repository/launchRepository";
import { Launch } from "../models/Launch";

export class LaunchServices {
    constructor(private readonly launchRepository: LaunchRepository) {}

    async getLaunch(id: number): Promise<Launch>{
        return this.launchRepository.get(id);
    }

    async getLaunches(): Promise<Launch[]>{
        return this.launchRepository.getAll();
    }

    async createLaunch(launch: Launch): Promise<void>{
        return this.launchRepository.create(launch);
    }

    async updateLaunch(id: number, launch: Launch): Promise<void>{
        return this.launchRepository.update(id, launch);
    }

    async deleteLaunch(id: number): Promise<void>{
        return this.launchRepository.delete(id);
    }
}
