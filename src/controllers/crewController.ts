import { Request, Response } from "express";
import { CrewServices } from "../service/crewService";
import { Crew } from "../models/Crew";
import { CrewmanServices } from "../service/crewmanService";
import { IController } from "./Interface/IController";

export class CrewController implements IController<Crew>{
    constructor(
        private readonly crewServices: CrewServices,
        private readonly crewmanServices: CrewmanServices
    ) {}

    async get(req: Request, res: Response): Promise<Crew | undefined> {
        try {
            const id = Number(req.params.id);
            const oneCrew = await this.crewServices.get(id);
            res.json(oneCrew);
            return oneCrew;
        } catch (err) {
            res.status(500).send(`Error in getting crew ${err}`);
        };
    };

    async getAll(req: Request, res: Response): Promise<Crew[] | undefined> {
        try {
            const crews = await this.crewServices.getAll();
            res.json(crews);
            return crews;
        } catch (err) {
            res.status(500).send(`Error in getting crews ${err}`);
        };
    };

    async create(req: Request, res: Response): Promise<Crew | undefined> {
        try {
            const crewmans = await this.crewmanServices.getSome(req.body.crewman);
            const newCrew = new Crew(
                req.body.name,
                req.body.id,
                crewmans
        );
            const newestCrew = await this.crewServices.create(newCrew);
            res.json(newestCrew);
            return newestCrew;
        } catch (err) {
            res.status(500).send(`Error in creating crew ${err}`);
        };
    };

    async update(req: Request, res: Response): Promise<void | undefined> {
        try {
            const id = Number(req.params.id);
            if (await this.crewServices.get(id)) {
                const crewman = await this.crewmanServices.getSome(req.body.crewman);
                const crewUpdate: Crew = {
                    name: req.body.name,
                    crewman,
                    id: id
                }
                const updatedCrew = this.crewServices.update(id, crewUpdate);
                res.json(updatedCrew);
                return updatedCrew;
            }
        } catch (err) {
            console.log(`Error in updating crew ${err}`);
        };
    };

    async delete(req: Request, res: Response): Promise<void | undefined> {
        try {
            const id = Number(req.params.id);
            if (await this.crewServices.get(id)) {
                const deletedCrew = this.crewServices.delete(id);
                res.json(deletedCrew);
                return deletedCrew;
            }
        } catch (err) {
            res.status(500).send(`Error in deleting crew ${err}`);
        };
    };
}