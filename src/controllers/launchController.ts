import { Request, Response } from "express";
import launchService from "../service/launchService";

const getLaunches = async (req: Request, res: Response) => {
    try {
        return launchService.getLaunches(req, res);
    } catch (err) {
        console.log(`Error in getting launch ${err}`);
    };
};

const createLaunch = async (req: Request, res: Response) => {
    try {
        return launchService.createLaunch(req, res);
    } catch (err) {
        console.log(`Error in getting launch ${err}`);
    };
};

const updateLaunch = async (req: Request, res: Response) => {
    try {
        return launchService.updateLaunch(req, res);
    } catch (err) {
        console.log(`Error in getting launch ${err}`);
    };
};

const deleteLaunch = async (req: Request, res: Response) => {
    try {
        return launchService.deleteLaunch(req, res);
    } catch (err) {
        console.log(`Error in getting launch ${err}`);
    };
};

export default { getLaunches, createLaunch, updateLaunch, deleteLaunch }