import { Launch } from "../models/Launch";
import { AppDataSource } from "../datasource/rocketproject";
import { IRepository } from "./Interfaces/IRepository";

export class LaunchRepository implements IRepository<Launch> {
  launchRepository = AppDataSource.getRepository(Launch);

  async get(id: number): Promise<Launch> {
    const one = await this.launchRepository.findOne({ where: { id: id } });
    if (one == null) throw new Error("Something bad happened");
    return one;
  }

  async getAll(): Promise<Launch[]> {
    console.log(await this.launchRepository.find());
    return await this.launchRepository.find();
  }

  async create(data: Launch): Promise<void> {
    console.log(data);
    const launch = this.launchRepository.create(data);
    await this.launchRepository.save(data);
  }
  async update(id: number, data: Partial<Launch>): Promise<void> {
    await this.launchRepository.update({ id }, data);
    await this.launchRepository.findOne({ where: { id: id } });
  }

  async delete(id: number): Promise<void> {
    await this.launchRepository.delete({ id });
  }
}
