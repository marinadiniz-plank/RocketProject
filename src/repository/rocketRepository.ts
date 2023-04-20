import { Request, Response, response } from "express";
import { AppDataSource } from '../datasource/rocketproject'
import { Rocket } from '../models/Rocket'
const url = process.env.LOCAL_BASE_URL + "/rocket";

export const rocketRepository = AppDataSource.getRepository(Rocket)


const getRockets = async (req: Request, res: Response) => {
    const response = fetch(url + (req.params.id ? '/' + req.params.id : ""), {
        method: "GET"
    })
        .then(response => {
            return response.json();
        })
        .then(body => {
            res.status(200).send(JSON.stringify(body) + 'getting rocket...');
        })
};

const createRocket = async (req: Request, res: Response) => {
    const response = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            name: req.body.name,
        })
    })
        .then(response => {
            return response.json();
        })
        .then(body => {
            res.status(200).send(JSON.stringify(body)  + 'creating rocket...');
        })
};

const updateRocket = async (req: Request, res: Response) => {
    const response = await fetch(url + "/" + req.params.id, {
        method: "PUT",        
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            name: req.body.name
        })
    })
        .then(response => {
            return response.json();
        })
        .then(body => {
            res.status(200).send(JSON.stringify(body) + 'updating rocket...');
        })
};

const deleteRocket = async (req: Request, res: Response) => {
    const response = fetch(url + "/" + req.params.id, {
        method: "DELETE",        
        headers: {
            "Content-Type": "application/json"
        }
    })
        .then(response => {
            return response.json();
        })
        .then(body => {
            res.status(200).send(JSON.stringify(body) + 'deleting rocket...');
        })
};

export default { getRockets, createRocket, updateRocket, deleteRocket }
