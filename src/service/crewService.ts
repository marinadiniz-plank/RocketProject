import crewRepository from "../repository/crewRepository";
import { Crew } from "../models/Crew";

export default{
    async getCrew(id: number){
        return crewRepository.getCrew(id);
    },

    async getCrews(){
        return crewRepository.getCrews();
    },

    async createCrew(crew: Crew){
        return crewRepository.createCrew(crew);
    },

    async updateCrew(id: number, crew: Crew){
        return crewRepository.updateCrew(id, crew);
    },

    async deleteCrew(id: number){
        return crewRepository.deleteCrew(id);
    }
}
