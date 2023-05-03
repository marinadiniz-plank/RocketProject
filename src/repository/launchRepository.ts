import { Launch } from "../models/Launch";
import { AppDataSource } from "../datasource/rocketproject";
import { IRepository } from "./Interface/IRepository";

export class LaunchRepository implements IRepository<Launch> {
  launchRepository = AppDataSource.getRepository(Launch);

  async get(id: number): Promise<Launch> {
    const onelaunch = await this.launchRepository.findOne({ where: { id: id } });
    if (onelaunch == null) throw new Error('Could not find launch, try another id');
    return onelaunch;
  }

  async getAll(): Promise<Launch[]> {
    return await this.launchRepository.find();
  }

  async create(data: Launch): Promise<void> {
    await this.launchRepository.save(data);
  }
  async update(id: number, data: Partial<Launch>): Promise<void> {
    await this.launchRepository.update({ id }, data);
  }

  async delete(id: number): Promise<void> {
    await this.launchRepository.delete({ id });
  }
}
