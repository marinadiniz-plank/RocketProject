import { Request, Response } from "express";
import { CrewServices } from "../service/crewService";
import { Crew } from "../models/Crew";
import { CrewmanServices } from "../service/crewmanService";

export class CrewController {
    constructor(
        private readonly crewServices: CrewServices,
        private readonly crewmanServices: CrewmanServices
    ) {}

    async getCrew(req: Request, res: Response) {
        try {
            const id = Number(req.params.id);
            const oneCrew = await this.crewServices.get(id);
            return res.json(oneCrew);
        } catch (err) {
            return res.status(500).send(`Error in getting crew ${err}`);
        };
    };

    async getCrews(req: Request, res: Response) {
        try {
            const crews = await this.crewServices.getAll();
            return res.json(crews);
        } catch (err) {
            return res.status(500).send(`Error in getting crews ${err}`);
        };
    };

    async createCrew(req: Request, res: Response) {
        try {
            const crewmans = await this.crewmanServices.getSome(req.body.crewman);
            const newCrew = new Crew(
                req.body.name,
                req.body.id,
                crewmans
        );
            const newestCrew = await this.crewServices.create(newCrew);
            return res.json(newestCrew);
        } catch (err) {
            return res.status(500).send(`Error in creating crew ${err}`);
        };
    };

    async updateCrew(req: Request, res: Response) {
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
                return res.json(updatedCrew);
            }
        } catch (err) {
            console.log(`Error in updating crew ${err}`);
        };
    };

    async deleteCrew(req: Request, res: Response) {
        try {
            const id = Number(req.params.id);
            if (await this.crewServices.get(id)) {
                const deletedCrew = this.crewServices.delete(id);
                return res.json(deletedCrew);
            }
        } catch (err) {
            return res.status(500).send(`Error in deleting crew ${err}`);
        };
    };
}