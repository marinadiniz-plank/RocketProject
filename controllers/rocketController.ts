import { Request, Response, response } from "express";
import rocketservice from "../service/rocketService";

const getRockets = async (req: Request, res: Response) => {
    return rocketservice.getRockets(req, res);
};

const createRocket = async (req: Request, res: Response) => {
    return rocketservice.createRocket(req, res);
};

const updateRocket = async (req: Request, res: Response) => {
    return rocketservice.updateRocket(req, res);
};

const deleteRocket = async (req: Request, res: Response) => {
    return rocketservice.deleteRocket(req, res);
};

export default { getRockets, createRocket, updateRocket, deleteRocket }