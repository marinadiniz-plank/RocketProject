import { Request, Response } from "express";

const getRockets = (req: Request, res: Response) =>{
    res.status(200).send("get rocket");
};

const  createRocket = (req: Request, res: Response)=>{
    res.status(200).send("create rocket");
};

const  updateRocket = (req: Request, res: Response)=>{
    res.status(200).send("update rocket");
};

const  deleteRocket = (req: Request, res: Response)=>{
    res.status(200).send("delete rocket");
};

export default {getRockets, createRocket, updateRocket, deleteRocket}