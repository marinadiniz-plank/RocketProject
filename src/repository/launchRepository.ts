import { Launch } from "../models/Launch";
import { AppDataSource } from "../datasource/rocketproject";

export const launchRepository = AppDataSource.getRepository(Launch)

const getLaunch = async (id: number) => {
    const one = await launchRepository.findOne({ where: { id: id } });
    if(one == null)
        throw new Error('Something bad happened');
    return one;
};

const getLaunches = async () => {
    console.log(await launchRepository.find())
    return await launchRepository.find();  
};

const createLaunch = async (data: Launch) => {
    console.log(data)
    const launch = launchRepository.create(data);
    await launchRepository.save(data);
    return launch;
};

const updateLaunch = async (id: number, data: Partial<Launch>) => {
    await launchRepository.update({ id }, data);
    return await launchRepository.findOne({ where: { id: id } });
};

const deleteLaunch = async (id: number) => {
    await launchRepository.delete({ id });
    return { deleted: true };
};

export default { getLaunch, getLaunches, createLaunch, updateLaunch, deleteLaunch }