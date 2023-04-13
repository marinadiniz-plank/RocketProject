import { Request, Response } from "express";
import launchService from "../service/launchService";

const getLaunches = async (req: Request, res: Response) =>{
    return launchService.getLaunches(req, res);
};

const createLaunch = async (req: Request, res: Response)=>{
    return launchService.createLaunch(req, res);
};

const  updateLaunch = async (req: Request, res: Response)=>{
     return launchService.updateLaunch(req, res);
};

const  deleteLaunch = async (req: Request, res: Response)=>{
    return launchService.deleteLaunch(req, res);
};

export default {getLaunches, createLaunch, updateLaunch, deleteLaunch}