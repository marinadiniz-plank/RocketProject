import { Request, Response, response } from "express";
import rocketservice from "../service/rocketService";

class RocketController {
    public async getRockets(req: Request, res: Response) {
        try {
            return rocketservice.getRockets(req, res);
        } catch (err) {
            console.log(`Error in getting rockets ${err}`);
        };
    };

    async createRocket(req: Request, res: Response) {
        try {
            return rocketservice.createRocket(req, res);
        } catch (err) {
            console.log(`Error in creating rockets ${err}`);
        };
    };

    async updateRocket(req: Request, res: Response) {
        try {
            return rocketservice.updateRocket(req, res);
        } catch (err) {
            console.log(`Error in updating rockets ${err}`);
        };
    };

    async deleteRocket(req: Request, res: Response) {
        try {
            return rocketservice.deleteRocket(req, res);
        } catch (err) {
            console.log(`Error in deleting rockets ${err}`);
        };
    };
}
export default RocketController;