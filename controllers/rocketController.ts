import { Request, Response, response } from "express";
import rocketservice from "../service/rocketService";

const getRockets = async (req: Request, res: Response) => {
    try {
        return rocketservice.getRockets(req, res);
    } catch (err) {
        console.log(`Error in getting rockets ${err}`);
    };
};

const createRocket = async (req: Request, res: Response) => {
    try {
        return rocketservice.createRocket(req, res);
    } catch (err) {
        console.log(`Error in creating rockets ${err}`);
    };
};

const updateRocket = async (req: Request, res: Response) => {
    try {
        return rocketservice.updateRocket(req, res);
    } catch (err) {
        console.log(`Error in updating rockets ${err}`);
    };
};

const deleteRocket = async (req: Request, res: Response) => {
    try {
        return rocketservice.deleteRocket(req, res);
    } catch (err) {
        console.log(`Error in deleting rockets ${err}`);
    };
};

export default { getRockets, createRocket, updateRocket, deleteRocket }