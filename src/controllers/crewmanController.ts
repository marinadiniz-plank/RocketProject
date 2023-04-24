import { Request, Response } from "express";
import crewmanService from "../service/crewmanService";
import { Crewman } from "../models/Crewman";

class CrewController {
    async getCrewman(req: Request, res: Response) {
        try {
            const id = Number(req.params.id);
            const crewman = await crewmanService.getCrewman(id);
            return res.json(crewman);
        } catch (err) {
            return res.status(500).send(`Error in creating crewman ${err}`);
        };
    };

    async getCrewmans(req: Request, res: Response) {
        try {
            const crewman = await crewmanService.getCrewmans();
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
            const crewman = await crewmanService.createCrewman(newCrewman);
            return res.json(crewman);
        } catch (err) {
            return res.status(500).send(`Error in creating crewman ${err}`);
        };
    };

    async updateCrewmans(req: Request, res: Response) {
        try {
            const id = Number(req.params.id);
            if (id) {
                const crewman = crewmanService.updateCrewman(id, req.body);
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
                const crewman = crewmanService.deleteCrewman(id);
                return res.json(crewman);
            }
            else
                return res.status(500).send('id does not exist');

        } catch (err) {
            return res.status(500).send(`Error in creating crewman ${err}`);
        };
    };
}
export default CrewController;