import { Request, Response } from "express";
import crewService from "../service/crewService";
import { crewmanRepository } from "../repository/crewmanRepository";
import { Crew } from "../models/Crew";
import { In } from "typeorm";

class CrewController {
    async getCrew(req: Request, res: Response) {
        try {
            const id = Number(req.params.id);
            const crew = await crewService.getCrew(id);
            return res.json(crew);
        } catch (err) {
            return res.status(500).send(`Error in getting crew ${err}`);
        };
    };

    async getCrews(req: Request, res: Response) {
        try {
            const crew = await crewService.getCrews();
            return res.json(crew);
        } catch (err) {
            return res.status(500).send(`Error in getting crews ${err}`);
        };
    };

    async createCrew(req: Request, res: Response) {
        try {
        //    console.log(req.body.name, req.body.id, req.body.crewman)
            const crewmans = await crewmanRepository.findBy({id: In(req.body.crewman)});

            if (!crewmans) {
				return res.status(404).json({ message: 'Crewman id does not exist!' })
			}
         //   console.log(crewmans)
            const newCrew = new Crew(
                req.body.name,
                req.body.id,
                crewmans
        );
            const crew = await crewService.createCrew(newCrew);
            return res.json(crew);
        } catch (err) {
            return res.status(500).send(`Error in creating crew ${err}`);
        };
    };

    async updateCrew(req: Request, res: Response) {
        try {
            const id = Number(req.params.id);
            if (id) {
                const crewman = await crewmanRepository.findBy({id: In(req.body.crewman)});
                const crewUpdate: Crew = {
                    name: req.body.name,
                    crewman,
                    id: id
                }
                const crew = crewService.updateCrew(id, crewUpdate);
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
                const crew = crewService.deleteCrew(id);
                return res.json(crew);
            }
            else
                return res.status(500).send('Crew id does not exist');
        } catch (err) {
            return res.status(500).send(`Error in deleting crew ${err}`);
        };
    };
}
export default CrewController;