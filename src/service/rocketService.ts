import { Request, Response } from "express";
import rocketRepository from "../repository/rocketRepository";

export default{
    async getRockets(req: Request, res: Response){
        return rocketRepository.getRockets(req, res);
    },

    async createRocket(req: Request, res: Response){
        return rocketRepository.createRocket(req, res);
    },

    async updateRocket(req: Request, res: Response){
        return rocketRepository.updateRocket(req, res);
    },

    async deleteRocket(req: Request, res: Response){
        return rocketRepository.deleteRocket(req, res);
    }
}
