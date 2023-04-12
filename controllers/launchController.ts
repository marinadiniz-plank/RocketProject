import { Request, Response } from "express";

const getLaunches = (req: Request, res: Response) =>{
    res.status(200).send("get launch");
};

const  createLaunch = (req: Request, res: Response)=>{
    res.status(200).send("create launch");
};

const  updateLaunch = (req: Request, res: Response)=>{
    res.status(200).send("update launch");   
};

const  deleteLaunch = (req: Request, res: Response)=>{
    res.status(200).send("delete launch");
};

export default {getLaunches, createLaunch, updateLaunch, deleteLaunch}