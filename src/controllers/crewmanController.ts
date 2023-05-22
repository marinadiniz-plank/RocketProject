import { Request, Response } from "express";
import { CrewmanServices } from "../service/crewmanService";
import { Crewman } from "../models/Crewman";
import { IController } from "./Interface/IController";
export class CrewmanController implements IController<Crewman>{
    constructor(private readonly crewmanServices: CrewmanServices) {}

    async get(req: Request, res: Response): Promise<Crewman | undefined> {
        try {
            const id = Number(req.params.id);
            const crewman = await this.crewmanServices.get(id);
            res.json(crewman);
            return crewman;
        } catch (err) {
            res.status(500).send(`Error in getting a crewman ${err}`);
        };
    };

    async getAll(req: Request, res: Response): Promise<Crewman[] | undefined> {
        try {
            const crewmans = await this.crewmanServices.getAll();
            res.json(crewmans);
            return crewmans;
        } catch (err) {
            res.status(500).send(`Error in getting crewmans ${err}`);
        };
    };

    async getSomeCrewmans(req: Request, res: Response): Promise<Crewman[] | undefined> {
        try {
            const id: number[] = [Number(req.params.id)];
            const someCrewmans = await this.crewmanServices.getSome(id);
            res.json(someCrewmans);
            return someCrewmans;
        } catch (err) {
            res.status(500).send(`Error in getting some crewmans ${err}`);
        };
    };

    async create(req: Request, res: Response): Promise<Crewman | undefined> {
        try {
            const newCrewman = new Crewman(req.body.name, req.body.patent);
            const newestCrewman = await this.crewmanServices.create(newCrewman);
            res.json(newestCrewman);
            return newestCrewman;
        } catch (err) {
            res.status(500).send(`Error in creating crewman ${err}`);
        };
    };

    async update(req: Request, res: Response): Promise<void | undefined> {
        try {
            const id = Number(req.params.id);
            if (await this.crewmanServices.get(id)) {
                const updatedCrewman = this.crewmanServices.update(id, req.body);
                res.json(updatedCrewman);
                return updatedCrewman;
            }
        } catch (err) {
            res.status(500).send(`Error in updating crewman ${err}`);
        };
    };

    async delete(req: Request, res: Response): Promise<void | undefined> {
        try {
            const id = Number(req.params.id);
            if (await this.crewmanServices.get(id)) {
                const deletedCrewman = this.crewmanServices.delete(id);
                res.json(deletedCrewman);
                return deletedCrewman;
            }
        } catch (err) {
            res.status(500).send(`Error in deleting crewman ${err}`);
        };
    };
}