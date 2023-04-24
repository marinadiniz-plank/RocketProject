import launchRepository from "../repository/launchRepository";
import { Launch } from "../models/Launch";

export default{
    async getLaunch(id: number){
        return launchRepository.getLaunch(id);
    },

    async getLaunches(){
        return launchRepository.getLaunches();
    },

    async createLaunch(launch: Launch){
        return launchRepository.createLaunch(launch);
    },

    async updateLaunch(id: number, launch: Launch){
        return launchRepository.updateLaunch(id, launch);
    },

    async deleteLaunch(id: number){
        return launchRepository.deleteLaunch(id);
    }
}
