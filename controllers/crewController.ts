import { Request, Response } from "express";
import crewService from "../service/crewService";

const getCrews =async (req: Request, res: Response) =>{
    return crewService.getCrews(req, res);
};

const  createCrew = async (req: Request, res: Response)=>{
    return crewService.createCrew(req, res);
};

const  updateCrew = async (req: Request, res: Response)=>{
    return crewService.updateCrew(req, res);
};

const  deleteCrew = async (req: Request, res: Response)=>{
    return crewService.deleteCrew(req, res);
};

export default {getCrews, createCrew, updateCrew, deleteCrew}