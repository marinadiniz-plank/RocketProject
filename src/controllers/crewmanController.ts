import { Request, Response } from "express";
import { CrewmanServices } from "../service/crewmanService";
import { Crewman } from "../models/Crewman";
export class CrewmanController {
    constructor(private readonly crewmanServices: CrewmanServices) {}

    async getCrewman(req: Request, res: Response) {
        try {
            const id = Number(req.params.id);
            const crewman = await this.crewmanServices.get(id);
            return res.json(crewman);
        } catch (err) {
            return res.status(500).send(`Error in creating crewman ${err}`);
        };
    };

    async getCrewmans(req: Request, res: Response) {
        try {
            const crewmans = await this.crewmanServices.getAll();
            return res.json(crewmans);
        } catch (err) {
            return res.status(500).send(`Error in creating crewman ${err}`);
        };
    };

    async getSomeCrewmans(req: Request, res: Response) {
        try {
            const id: number[] = [Number(req.params.id)];
            const someCrewmans = await this.crewmanServices.getSome(id);
            return res.json(someCrewmans);
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
            const newestCrewman = await this.crewmanServices.create(newCrewman);
            return res.json(newestCrewman);
        } catch (err) {
            return res.status(500).send(`Error in creating crewman ${err}`);
        };
    };

    async updateCrewmans(req: Request, res: Response) {
        try {
            const id = Number(req.params.id);
            if (await this.crewmanServices.get(id)) {
                const updatedCrewman = this.crewmanServices.update(id, req.body);
                return res.json(updatedCrewman);
            }
        } catch (err) {
            return res.status(500).send(`Error in creating crewman ${err}`);
        };
    };

    async deleteCrewmans(req: Request, res: Response) {
        try {
            const id = Number(req.params.id);
            if (await this.crewmanServices.get(id)) {
                const deletedCrewman = this.crewmanServices.delete(id);
                return res.json(deletedCrewman);
            }
        } catch (err) {
            return res.status(500).send(`Error in creating crewman ${err}`);
        };
    };
}