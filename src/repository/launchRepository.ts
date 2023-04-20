import { Request, Response } from "express";
const url = process.env.LOCAL_BASE_URL + "/launch";

const getLaunches = async (req: Request, res: Response) => {
    const response = await fetch(url + (req.params.id ? '/' + req.params.id : ""), {
        method: "GET"
    })
        .then(response => {
            return response.json();
        })
        .then(body => {
            res.status(200).send(JSON.stringify(body) + 'getting launch...');
        })
};

const createLaunch = async (req: Request, res: Response) => {
    const response = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            launchCode: req.body.launchCode,
            data: req.body.data,
            success: req.body.success,
            rocketId: req.body.rocketId,
            crewId: req.body.crewId
        })
    })
        .then(response => {
            return response.json();
        })
        .then(body => {
            res.status(200).send(JSON.stringify(body) + 'creating launch...');
        })
};

const updateLaunch = async (req: Request, res: Response) => {
    const response = await fetch(url + '/' + req.params.id, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            launchCode: req.body.launchCode,
            data: req.body.data,
            success: req.body.success,
            rocketId: req.body.rocketId,
            crewId: req.body.crewId
        })
    })
        .then(response => {
            return response.json();
        })
        .then(body => {
            res.status(200).send(JSON.stringify(body) + 'updating launch...');
        })
};

const deleteLaunch = async (req: Request, res: Response) => {
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
            res.status(200).send(JSON.stringify(body) + 'deleting launch...');
        })
};

export default { getLaunches, createLaunch, updateLaunch, deleteLaunch }