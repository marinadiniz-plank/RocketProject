import { Request, Response } from "express";
import crewmanService from "../service/crewmanService";

const getCrewmans = async (req: Request, res: Response) =>{
    try {
        return crewmanService.getCrewmans(req, res);
    } catch (err) {
        console.log(`Error in creating crewman ${err}`);
    };
};

const  createCrewmans = async (req: Request, res: Response)=>{
    try {
        return crewmanService.createCrewman(req, res);
    } catch (err) {
        console.log(`Error in creating crewman ${err}`);
    };
};

const  updateCrewmans = async (req: Request, res: Response)=>{
    try {
        return crewmanService.updateCrewman(req, res);
    } catch (err) {
        console.log(`Error in creating crewman ${err}`);
    };
};

const  deleteCrewmans = async (req: Request, res: Response)=>{
    try {
        return crewmanService.deleteCrewman(req, res);
    } catch (err) {
        console.log(`Error in creating crewman ${err}`);
    };
};

export default {getCrewmans, createCrewmans, updateCrewmans, deleteCrewmans}