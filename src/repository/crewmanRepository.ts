import { Crewman } from "../models/Crewman";
import { AppDataSource } from "../datasource/rocketproject";

export const crewmanRepository = AppDataSource.getRepository(Crewman)

const getCrewman = async (id: number) => {
    const one = await crewmanRepository.findOne({ where: { id: id } });
    if(one == null)
        throw new Error('Something bad happened');
    return one;
};

const getCrewmans = async () => {
    return await crewmanRepository.find();
};

const createCrewman = async (data: Crewman) => {
    const crewman = crewmanRepository.create(data);
    await crewmanRepository.save(data);
    return crewman;
};

const updateCrewman = async  (id: number, data: Partial<Crewman>) => {
    await crewmanRepository.update({ id }, data);
    return await crewmanRepository.findOne({ where: { id: id } });
};

const deleteCrewman = async (id: number) => {
    await crewmanRepository.delete({ id });
    return { deleted: true };
};

export default {getCrewman, getCrewmans, createCrewman, updateCrewman, deleteCrewman }