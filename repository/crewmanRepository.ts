import { Request, Response } from "express";
import crewman from "../models/Crewman";
const url = process.env.LOCAL_BASE_URL + "/crewman";

const getCrewmans = async (req: Request, res: Response) => {
    try{
        const response = await fetch(url + (req.params.id ? '/' + req.params.id : ""), {
            method: "GET",
            headers:{
                "Content-Type": "application/json"
            }
        })    
        res.status(200).send(await response.json());

    }catch(err){
        console.log(`Error in getting Crewmans ${err}`);
    };
};

const createCrewman = async (req: Request, res: Response) => {
    try{
        const response = await fetch(url + (req.params.id ? '/' + req.params.id : ""), {
            method: "POST"
        })
    }catch(err){
        console.log(`Error in creating Crewmans ${err}`);
    };
    res.status(200).send("create Crewman");
};

const updateCrewman = async (req: Request, res: Response) => {
    try{
        const response = await fetch(url + (req.params.id ? '/' + req.params.id : ""), {
            method: "PUT"
        })    
        res.status(200).send(await response.json());

    }catch(err){
        console.log(`Error in updating Crewmans ${err}`);
    };
    res.status(200).send("update Crewman");
};

const deleteCrewman = async (req: Request, res: Response) => {
    try{
        const response = await fetch(url + (req.params.id ? '/' + req.params.id : ""), {
            method: "DELETE"
        })    
        res.status(200).send(await response.json());

    }catch(err){
        console.log(`Error in deleting Crewmans ${err}`);
    };
    res.status(200).send("delete Crewman");
};

export default { getCrewmans, createCrewman, updateCrewman, deleteCrewman }