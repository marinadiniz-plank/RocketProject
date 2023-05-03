import { Request, Response, json } from "express";
import { RocketServices } from "../service/rocketService";
import { Rocket } from "../models/Rocket";
import { rocketServices } from "../modules/rocketModule";
export class RocketController {
    constructor(private readonly rocketServices: RocketServices) {}
   
    async getRocket(req: Request, res: Response) {
        try {
            const id = Number(req.params.id);
            const rocket = await rocketServices.get(id);
            return res.json(rocket);
        } catch (err) {
            return res.status(500).send(`Error in getting rockets ${err}`);
        };
    };

    async getRockets(req: Request, res: Response) {   
        try {          
            const rocket = await rocketServices.getAll();
            console.log(rocket)
            return res.json(rocket);
        } catch (err) {
            return res.status(500).send(`Error in getting rockets ${err}`);
        };
    };

    async createRocket(req: Request, res: Response) {
        try {
            const newRocket = new Rocket(req.body.name, req.body.id);
            const rocket = await rocketServices.create(newRocket);
            return res.json(rocket);
        } catch (err) {
            return res.status(500).send(`Error in creating rockets ${err}`);
        };
    };

    async updateRocket(req: Request, res: Response) {
        try {
            const id = Number(req.params.id);
            if(id){
                const rocket = rocketServices.update(id, req.body);
                return res.json(rocket);
            }
            else    
                return res.status(500).send('id does not exist');
        } catch (err) {
            return res.status(500).send(`Error in updating rockets ${err}`);
        };
    };

    async deleteRocket(req: Request, res: Response) {
        try {
            const id = Number(req.params.id);
            if(id){
                const rocket = rocketServices.delete(id);
                return res.json(rocket);
            }
            else    
                return res.status(500).send('id does not exist');
            
        } catch (err) {
            return res.status(500).send(`Error in deleting rockets ${err}`);
        };
    };
}