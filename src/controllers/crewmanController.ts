import { Request, Response } from "express";
import { CrewmanServices } from "../service/crewmanService";
import { Crewman } from "../models/Crewman";
import { crewmanServices } from "../modules/crewmanModule";
export class CrewmanController {
    constructor(private readonly crewmanServices: CrewmanServices) {}

    async getCrewman(req: Request, res: Response) {
        try {
            const id = Number(req.params.id);
            const crewman = await crewmanServices.get(id);
            return res.json(crewman);
        } catch (err) {
            return res.status(500).send(`Error in creating crewman ${err}`);
        };
    };

    async getCrewmans(req: Request, res: Response) {
        try {
            const crewman = await crewmanServices.getAll();
            return res.json(crewman);
        } catch (err) {
            return res.status(500).send(`Error in creating crewman ${err}`);
        };
    };

    async getSomeCrewmans(req: Request, res: Response) {
        try {
            const id: number[] = [Number(req.params.id)];
            const crewman = await crewmanServices.getSome(id);
            return res.json(crewman);
        } catch (err) {
            return res.status(500).send(`Error in creating crewman ${err}`);
        };
    };

    async createCrewmans(req: Request, res: Response) {
        try {
            const newCrewman = new Crewman(
                req.body.name,
                req.body.id,
                req.body.patent
            );
            const crewman = await crewmanServices.create(newCrewman);
            return res.json(crewman);
        } catch (err) {
            return res.status(500).send(`Error in creating crewman ${err}`);
        };
    };

    async updateCrewmans(req: Request, res: Response) {
        try {
            const id = Number(req.params.id);
            if (id) {
                const crewman = crewmanServices.update(id, req.body);
                return res.json(crewman);
            }
            else
                return res.status(500).send('id does not exist');
        } catch (err) {
            return res.status(500).send(`Error in creating crewman ${err}`);
        };
    };

    async deleteCrewmans(req: Request, res: Response) {
        try {
            const id = Number(req.params.id);
            if (id) {
                const crewman = crewmanServices.delete(id);
                return res.json(crewman);
            }
            else
                return res.status(500).send('id does not exist');

        } catch (err) {
            return res.status(500).send(`Error in creating crewman ${err}`);
        };
    };
}