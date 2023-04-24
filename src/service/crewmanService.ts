import { Request, Response } from "express";
import crewmanRepository from "../repository/crewmanRepository";
import { Crewman } from "../models/Crewman";

export default{
    async getCrewman(id: number){
        return crewmanRepository.getCrewman(id);
    },

    async getCrewmans(){
        return crewmanRepository.getCrewmans();
    },

    async createCrewman(crewman: Crewman){
        return crewmanRepository.createCrewman(crewman);
    },

    async updateCrewman(id: number, crewman: Crewman){
        return crewmanRepository.updateCrewman(id, crewman);
    },

    async deleteCrewman(id: number){
        return crewmanRepository.deleteCrewman(id);
    }
}
