import { Request, Response } from "express";
import launch from "../models/Launch";
const url = process.env.LOCAL_BASE_URL + "/launch";

const getLaunches = async (req: Request, res: Response) => {
    try{
        const response = await fetch(url + (req.params.id ? '/' + req.params.id : ""), {
            method: "GET",
            headers:{
                "Content-Type": "application/json"
            }
        })    
        res.status(200).send(await response.json());

    }catch(err){
        console.log(`Error in getting launchs ${err}`);
    };
};

const createLaunch = async (req: Request, res: Response) => {
    try{
        const response = await fetch(url + (req.params.id ? '/' + req.params.id : ""), {
            method: "POST"
        })
    }catch(err){
        console.log(`Error in creating launchs ${err}`);
    };
    res.status(200).send("create launch");
};

const updateLaunch = async (req: Request, res: Response) => {
    try{
        const response = await fetch(url + (req.params.id ? '/' + req.params.id : ""), {
            method: "PUT"
        })    
        res.status(200).send(await response.json());

    }catch(err){
        console.log(`Error in updating launchs ${err}`);
    };
    res.status(200).send("update launch");
};

const deleteLaunch = async (req: Request, res: Response) => {
    try{
        const response = await fetch(url + (req.params.id ? '/' + req.params.id : ""), {
            method: "DELETE"
        })    
        res.status(200).send(await response.json());

    }catch(err){
        console.log(`Error in deleting launchs ${err}`);
    };
    res.status(200).send("delete launch");
};

export default { getLaunches, createLaunch, updateLaunch, deleteLaunch }