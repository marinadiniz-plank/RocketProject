import { Request, Response } from "express";
import launchRepository from "../repository/launchRepository";

export default{
    async getLaunches(req: Request, res: Response){
        return launchRepository.getLaunches(req, res);
    },

    async createLaunch(req: Request, res: Response){
        return launchRepository.createLaunch(req, res);
    },

    async updateLaunch(req: Request, res: Response){
        return launchRepository.updateLaunch(req, res);
    },

    async deleteLaunch(req: Request, res: Response){
        return launchRepository.deleteLaunch(req, res);
    }
}
