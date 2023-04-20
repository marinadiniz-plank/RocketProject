import { Request, Response } from "express";
const url = process.env.LOCAL_BASE_URL + "/crew";

const getCrews = async (req: Request, res: Response) => {
    const response = await fetch(url + (req.params.id ? '/' + req.params.id : ""), {
        method: "GET"
    })
        .then(response => {
            return response.json();
        })
        .then(body => {
            res.status(200).send(JSON.stringify(body) + 'getting crew...');
        })
};

const createCrew = async (req: Request, res: Response) => {
    const response = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            name: req.body.name,
            crewCrewmanId: req.body.crewCrewmanId
        })
    })
        .then(response => {
            return response.json();
        })
        .then(body => {
            res.status(200).send(JSON.stringify(body) + 'creating crew...');
        })
};

const updateCrew = async (req: Request, res: Response) => {
    const response = await fetch(url + '/' + req.params.id, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            name: req.body.name,
            crewCrewmanId: req.body.crewCrewmanId
        })
    })
        .then(response => {
            return response.json();
        })
        .then(body => {
            res.status(200).send(JSON.stringify(body) + 'updating crew...');
        })
};

const deleteCrew = async (req: Request, res: Response) => {
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
            res.status(200).send(JSON.stringify(body) + 'deleting crew...');
        })
};

export default { getCrews, createCrew, updateCrew, deleteCrew }