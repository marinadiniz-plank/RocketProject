import { Request, Response } from "express";
import crew from "../models/Crew";
const url = process.env.LOCAL_BASE_URL + "/crew";

const getCrews = async (req: Request, res: Response) => {
    try{
        const response = await fetch(url + (req.params.id ? '/' + req.params.id : ""), {
            method: "GET",
            headers:{
                "Content-Type": "application/json"
            }
        })    
        res.status(200).send(await response.json());

    }catch(err){
        console.log(`Error in getting Crews ${err}`);
    };
};

const createCrew = async (req: Request, res: Response) => {
    try{
        const response = await fetch(url + (req.params.id ? '/' + req.params.id : ""), {
            method: "POST"
        })
    }catch(err){
        console.log(`Error in creating Crews ${err}`);
    };
    res.status(200).send("create Crew");
};

const updateCrew = async (req: Request, res: Response) => {
    try{
        const response = await fetch(url + (req.params.id ? '/' + req.params.id : ""), {
            method: "PUT"
        })    
        res.status(200).send(await response.json());

    }catch(err){
        console.log(`Error in updating Crews ${err}`);
    };
    res.status(200).send("update Crew");
};

const deleteCrew = async (req: Request, res: Response) => {
    try{
        const response = await fetch(url + (req.params.id ? '/' + req.params.id : ""), {
            method: "DELETE"
        })    
        res.status(200).send(await response.json());

    }catch(err){
        console.log(`Error in deleting Crews ${err}`);
    };
    res.status(200).send("delete Crew");
};

export default { getCrews, createCrew, updateCrew, deleteCrew }