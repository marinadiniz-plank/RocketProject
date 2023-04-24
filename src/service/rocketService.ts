import { Rocket } from "../models/Rocket";
import rocketRepository from "../repository/rocketRepository";

export default{
    async getRocket(id: number){
        return rocketRepository.getRocket(id);
    },

    async getRockets(){
        return rocketRepository.getRockets();
    },

    async createRocket(rocket: Rocket){
        return rocketRepository.createRocket(rocket);
    },

    async updateRocket(id: number, rocket: Rocket){
        return rocketRepository.updateRocket(id, rocket);
    },

    async deleteRocket(id: number){
        return rocketRepository.deleteRocket(id);
    }
}
