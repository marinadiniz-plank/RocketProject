import { Request, Response } from "express";
import crewmanService from "../service/crewmanService";

const getCrewmans = async (req: Request, res: Response) =>{
    return crewmanService.getCrewmans(req, res);
};

const  createCrewmans = async (req: Request, res: Response)=>{
    return crewmanService.createCrewman(req, res);
};

const  updateCrewmans = async (req: Request, res: Response)=>{
    return crewmanService.updateCrewman(req, res);
};

const  deleteCrewmans = async (req: Request, res: Response)=>{
    return crewmanService.deleteCrewman(req, res);
};

export default {getCrewmans, createCrewmans, updateCrewmans, deleteCrewmans}