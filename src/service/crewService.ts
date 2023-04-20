import { Request, Response } from "express";
import crewRepository from "../repository/crewRepository";

export default{
    async getCrews(req: Request, res: Response){
        return crewRepository.getCrews(req, res);
    },

    async createCrew(req: Request, res: Response){
        return crewRepository.createCrew(req, res);
    },

    async updateCrew(req: Request, res: Response){
        return crewRepository.updateCrew(req, res);
    },

    async deleteCrew(req: Request, res: Response){
        return crewRepository.deleteCrew(req, res);
    }
}
