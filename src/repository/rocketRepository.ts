import { AppDataSource } from '../datasource/rocketproject'
import { Rocket } from '../models/Rocket'

export const rocketRepository = AppDataSource.getRepository(Rocket)

const getRocket = async (id: number) => {
    const one = await rocketRepository.findOne({ where: { id: id } });
    if(one == null)
        throw new Error('Something bad happened');
    return one;
};

const getRockets = async () => {
    return await rocketRepository.find();
};

const createRocket = async (data: Rocket) => {
    const rocket = rocketRepository.create(data);
    await rocketRepository.save(data);
    return rocket;
};

const updateRocket = async (id: number, data: Partial<Rocket>) => {
    await rocketRepository.update({ id }, data);
    return await rocketRepository.findOne({ where: { id: id } });
};

const deleteRocket = async (id: number) => {
    await rocketRepository.delete({ id });
    return { deleted: true };
};

export default { getRocket, getRockets, createRocket, updateRocket, deleteRocket }
