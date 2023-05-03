import { Request, Response } from "express";
import { RocketServices } from "../service/rocketService";
import { Rocket } from "../models/Rocket";
//import { rocketServices } from "../modules/rocketModule";
export class RocketController {
    constructor(private readonly rocketServices: RocketServices) {}
   
    async getRocket(req: Request, res: Response) {
        try {
            const id = Number(req.params.id);
            const rocket = await this.rocketServices.get(id);
            return res.json(rocket);
        } catch (err) {
            return res.status(500).send(`Error in getting rocket!  ${err}`);
        };
    };

    async getRockets(req: Request, res: Response) {   
        try {          
            const rockets = await this.rocketServices.getAll();
            return res.json(rockets);
        } catch (err) {
            return res.status(500).send(`Error in getting rockets!  ${err}`);
        };
    };

    async createRocket(req: Request, res: Response) {
        try {
            const newRocket = new Rocket(req.body.name, req.body.id);
            const newestRocket = await this.rocketServices.create(newRocket);
            return res.json(newestRocket);
        } catch (err) {
            return res.status(500).send(`Error in creating rocket!  ${err}`);
        };
    };

    async updateRocket(req: Request, res: Response) {
        try {
            const id = Number(req.params.id);
            if(await this.rocketServices.get(id)){
                const updatedRocket = this.rocketServices.update(id, req.body);
                return res.json(updatedRocket);
            }
        } catch (err) {
            return res.status(500).send(`Error in updating rockets ${err}`);
        };
    };

    async deleteRocket(req: Request, res: Response) {
        try {
            const id = Number(req.params.id);
            if(await this.rocketServices.get(id)){
                const deletedRocket = this.rocketServices.delete(id);
                return res.json(deletedRocket);
            }
            
        } catch (err) {
            return res.status(500).send(`Error in deleting rockets ${err}`);
        };
    };

}