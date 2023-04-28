import { Request, Response, json } from "express";
import rocketservice from "../service/rocketService";
import { Rocket } from "../models/Rocket";

class RocketController {
    async getRocket(req: Request, res: Response) {
        try {
            const id = Number(req.params.id);
            const rocket = await rocketservice.getRocket(id);
            return res.json(rocket);
        } catch (err) {
            res.status(500).send(`Error in getting rockets ${err}`);
            throw new Error("Error in getting rockets");
            //return res.status(500).send(`Error in getting rockets ${err}`);
        };
    };

    async getRockets(req: Request, res: Response) {
        try {
            const rocket = await rocketservice.getRockets();
            return res.json(rocket);
        } catch (err) {
            return res.status(500).send(`Error in getting rockets ${err}`);
        };
    };

    async createRocket(req: Request, res: Response) {
        try {
            const newRocket = new Rocket(req.body.name, req.body.id);
            const rocket = await rocketservice.createRocket(newRocket);
            return res.json(rocket);
        } catch (err) {
            return res.status(500).send(`Error in creating rockets ${err}`);
        };
    };

    async updateRocket(req: Request, res: Response) {
        try {
            const id = Number(req.params.id);
            if(id){
                const rocket = rocketservice.updateRocket(id, req.body);
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
                const rocket = rocketservice.deleteRocket(id);
                return res.json(rocket);
            }
            else    
                return res.status(500).send('id does not exist');
            
        } catch (err) {
            return res.status(500).send(`Error in deleting rockets ${err}`);
        };
    };
}
export default RocketController;