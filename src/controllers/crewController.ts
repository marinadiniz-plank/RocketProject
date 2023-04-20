import { Request, Response } from "express";
import crewService from "../service/crewService";

const getCrews =async (req: Request, res: Response) =>{
    try {
        return crewService.getCrews(req, res);
    } catch (err) {
        console.log(`Error in getting crew ${err}`);
    };
};

const  createCrew = async (req: Request, res: Response)=>{
    try {
        return crewService.createCrew(req, res);
    } catch (err) {
        console.log(`Error in getting crew ${err}`);
    };
};

const  updateCrew = async (req: Request, res: Response)=>{
    try {
        return crewService.updateCrew(req, res);
    } catch (err) {
        console.log(`Error in getting crew ${err}`);
    };
};

const  deleteCrew = async (req: Request, res: Response)=>{
    try {
        return crewService.deleteCrew(req, res);
    } catch (err) {
        console.log(`Error in getting crew ${err}`);
    };
};

export default {getCrews, createCrew, updateCrew, deleteCrew}