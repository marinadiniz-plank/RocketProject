import { Request, Response } from "express";
import { RocketServices } from "../service/rocketService";
import { Rocket } from "../models/Rocket";
import { IController } from "./Interface/IController";
//import { rocketServices } from "../modules/rocketModule";
export class RocketController implements IController<Rocket>{
    constructor(private readonly rocketServices: RocketServices) {}
   
    async get(req: Request, res: Response): Promise<Rocket | undefined> {
        try {
            const id = Number(req.params.id);
            const rocket = await this.rocketServices.get(id);
            res.json(rocket);
            return rocket;
        } catch (err) {
           res.status(500).send(`Error in getting rocket!  ${err}`);
        };
    };

    async getAll(req: Request, res: Response): Promise<Rocket[] | undefined> {   
        try {          
            const rockets = await this.rocketServices.getAll();
            res.json(rockets);
            return rockets;
        } catch (err) {
            res.status(500).send(`Error in getting rockets!  ${err}`);
        };
    };

    async create(req: Request, res: Response): Promise<Rocket | undefined> {
        try {
            const newRocket = new Rocket(req.body.name, req.body.id);
            const newestRocket = await this.rocketServices.create(newRocket);
            res.json(newestRocket);
            return newestRocket;
        } catch (err) {
            res.status(500).send(`Error in creating rocket!  ${err}`);
        };
    };

    async update(req: Request, res: Response): Promise<void | undefined> {
        try {
            const id = Number(req.params.id);
            if(await this.rocketServices.get(id)){
                const updatedRocket = this.rocketServices.update(id, req.body);
                res.json(updatedRocket);
                return updatedRocket;
            }
        } catch (err) {
            res.status(500).send(`Error in updating rockets ${err}`);
        };
    };

    async delete(req: Request, res: Response): Promise<void | undefined> {
        try {
            const id = Number(req.params.id);
            if(await this.rocketServices.get(id)){
                const deletedRocket = this.rocketServices.delete(id);
                res.json(deletedRocket);
                return deletedRocket;
            }
            
        } catch (err) {
            res.status(500).send(`Error in deleting rockets ${err}`);
        };
    };

}