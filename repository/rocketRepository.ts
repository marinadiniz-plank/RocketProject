import { Request, Response } from "express";
import rocket from "../models/Rocket";
const url = process.env.LOCAL_BASE_URL + "/rocket";

const getRockets = async (req: Request, res: Response) => {
    try{
        const response = await fetch(url + (req.params.id ? '/' + req.params.id : ""), {
            method: "GET",
            headers:{
                "Content-Type": "application/json"
            }
        })    
        res.status(200).send(await response.json());

    }catch(err){
        console.log(`Error in getting rockets ${err}`);
    };
};

const createRocket = async (req: Request, res: Response) => {
    try{
        const response = await fetch(url + (req.params.id ? '/' + req.params.id : ""), {
            method: "POST"
        })
    }catch(err){
        console.log(`Error in creating rockets ${err}`);
    };
    res.status(200).send("create rocket");
};

const updateRocket = async (req: Request, res: Response) => {
    try{
        const response = await fetch(url + (req.params.id ? '/' + req.params.id : ""), {
            method: "PUT"
        })    
        res.status(200).send(await response.json());

    }catch(err){
        console.log(`Error in updating rockets ${err}`);
    };
    res.status(200).send("update rocket");
};

const deleteRocket = async (req: Request, res: Response) => {
    try{
        const response = await fetch(url + (req.params.id ? '/' + req.params.id : ""), {
            method: "DELETE"
        })    
        res.status(200).send(await response.json());

    }catch(err){
        console.log(`Error in deleting rockets ${err}`);
    };
    res.status(200).send("delete rocket");
};

export default { getRockets, createRocket, updateRocket, deleteRocket }