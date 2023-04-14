import { Request, Response } from "express";
import crewman from "../models/Crewman";
const url = process.env.LOCAL_BASE_URL + "/crewman";

const getCrewmans = async (req: Request, res: Response) => {
    const response = await fetch(url + (req.params.id ? '/' + req.params.id : ""), {
        method: "GET"
    })
        .then(response => {
            return response.json();
        })
        .then(body => {
            res.status(200).send(JSON.stringify(body) + 'getting Crewman...');
        })
};

const createCrewman = async (req: Request, res: Response) => {
    const response = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            name: req.body.name,
            patent: req.body.patent
        })
    })
        .then(response => {
            return response.json();
        })
        .then(body => {
            res.status(200).send(JSON.stringify(body) + 'creating Crewman...');
        })
};

const updateCrewman = async (req: Request, res: Response) => {
    const response = await fetch(url + '/' + req.params.id, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            name: req.body.name,
            patent: req.body.patent
        })
    })
        .then(response => {
            return response.json();
        })
        .then(body => {
            res.status(200).send(JSON.stringify(body) + 'updating Crewman...');
        })
};

const deleteCrewman = async (req: Request, res: Response) => {
    const response = await fetch(url + '/' + req.params.id, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json"
        }
    })
        .then(response => {
            return response.json();
        })
        .then(body => {
            res.status(200).send(JSON.stringify(body) + 'deleting Crewman...');
        })
};

export default { getCrewmans, createCrewman, updateCrewman, deleteCrewman }