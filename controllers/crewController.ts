import { Request, Response } from "express";

const getCrews = (req: Request, res: Response) =>{
    res.status(200).send("get crew");
};

const  createCrew = (req: Request, res: Response)=>{
    res.status(200).send("create crew");
};

const  updateCrew = (req: Request, res: Response)=>{
    res.status(200).send("update crew");
};

const  deleteCrew = (req: Request, res: Response)=>{
    res.status(200).send("delete crew");
};

export default {getCrews, createCrew, updateCrew, deleteCrew}