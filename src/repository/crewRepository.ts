import { AppDataSource } from "../datasource/rocketproject";
import { Crew } from "../models/Crew";

export const crewRepository = AppDataSource.getRepository(Crew);

const getCrew = async(id: number) => {
    const one = await crewRepository.findOne({ where: { id: id } });
    if(one == null)
        throw new Error('Something bad happened');
    return one;
};

const getCrews = async () => {
    return await crewRepository.find(); 
};

const createCrew = async (data: Crew) => {
    const crew = crewRepository.create(data);
    await crewRepository.save(data);
    return crew;
};

const updateCrew = async (id: number, data: Crew) => {
    const crew = await getCrew(id);
    Object.assign(crew, data)
    console.log(data)
    await crewRepository.save(crew);
    return await crewRepository.findOne({ where: { id: id } });
};

const deleteCrew = async (id: number) => {
    await crewRepository.delete({ id });
    return { deleted: true };
}

export default {getCrew, getCrews, createCrew, updateCrew, deleteCrew }