import { Request, Response } from "express";

const getCrewmans = (req: Request, res: Response) =>{
    res.status(200).send("get crewmans");
};

const  createCrewmans = (req: Request, res: Response)=>{
    res.status(200).send("create crew");
};

const  updateCrewmans = (req: Request, res: Response)=>{
    res.status(200).send("update crewmans");
};

const  deleteCrewmans = (req: Request, res: Response)=>{
    res.status(200).send("delete crewmans");
};

export default {getCrewmans, createCrewmans, updateCrewmans, deleteCrewmans}