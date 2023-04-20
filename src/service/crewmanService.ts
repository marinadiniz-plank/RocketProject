import { Request, Response } from "express";
import crewmanRepository from "../repository/crewmanRepository";

export default{
    async getCrewmans(req: Request, res: Response){
        return crewmanRepository.getCrewmans(req, res);
    },

    async createCrewman(req: Request, res: Response){
        return crewmanRepository.createCrewman(req, res);
    },

    async updateCrewman(req: Request, res: Response){
        return crewmanRepository.updateCrewman(req, res);
    },

    async deleteCrewman(req: Request, res: Response){
        return crewmanRepository.deleteCrewman(req, res);
    }
}
