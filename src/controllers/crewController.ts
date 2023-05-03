import { Request, Response } from "express";
import { CrewServices } from "../service/crewService";
import { Crew } from "../models/Crew";
import { crewmanServices } from "../modules/crewmanModule";
import { crewServices } from "../modules/crewModule";
import { CrewmanServices } from "../service/crewmanService";

export class CrewController {
    constructor(
        private readonly crewServices: CrewServices,
        private readonly crewmanServices: CrewmanServices
    ) {}

    async getCrew(req: Request, res: Response) {
        try {
            const id = Number(req.params.id);
            const crew = await crewServices.get(id);
            return res.json(crew);
        } catch (err) {
            return res.status(500).send(`Error in getting crew ${err}`);
        };
    };

    async getCrews(req: Request, res: Response) {
        try {
            const crew = await crewServices.getAll();
            return res.json(crew);
        } catch (err) {
            return res.status(500).send(`Error in getting crews ${err}`);
        };
    };

    async createCrew(req: Request, res: Response) {
        try {
        //    console.log(req.body.name, req.body.id, req.body.crewman)
            const crewmans = await crewmanServices.getSome(req.body.crewman);

            if (!crewmans) {
				return res.status(404).json({ message: 'Crewman id does not exist!' })
			}
         //   console.log(crewmans)
            const newCrew = new Crew(
                req.body.name,
                req.body.id,
                crewmans
        );
            const crew = await crewServices.create(newCrew);
            return res.json(crew);
        } catch (err) {
            return res.status(500).send(`Error in creating crew ${err}`);
        };
    };

    async updateCrew(req: Request, res: Response) {
        try {
            const id = Number(req.params.id);
            if (id) {
                const crewman = await crewmanServices.getSome(req.body.crewman);
                const crewUpdate: Crew = {
                    name: req.body.name,
                    crewman,
                    id: id
                }
                const crew = crewServices.update(id, crewUpdate);
                return res.json(crew);
            }
            else
                return res.status(500).send('Crew id does not exist');
        } catch (err) {
            console.log(`Error in updating crew ${err}`);
        };
    };

    async deleteCrew(req: Request, res: Response) {
        try {
            const id = Number(req.params.id);
            if (id) {
                const crew = crewServices.delete(id);
                return res.json(crew);
            }
            else
                return res.status(500).send('Crew id does not exist');
        } catch (err) {
            return res.status(500).send(`Error in deleting crew ${err}`);
        };
    };
}