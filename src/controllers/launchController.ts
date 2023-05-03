import { Request, Response } from "express";
import { LaunchServices } from "../service/launchService";
import { Launch } from "../models/Launch";
import { RocketServices } from "../service/rocketService";
import { CrewServices } from "../service/crewService";

export class LaunchController {
    constructor(
        private readonly launchService: LaunchServices, 
        private readonly rocketService: RocketServices,
        private readonly crewService: CrewServices
    ) {}

    async getLaunch(req: Request, res: Response) {
        try {
            const id = Number(req.params.id);
            const launch = await this.launchService.getLaunch(id);
            return res.json(launch);
        } catch (err) {
            return res.status(500).send(`Error in getting launch ${err}`);
        };
    };

    async getLaunches(req: Request, res: Response) {
        try {
            const launchs = await this.launchService.getLaunches();
            return res.json(launchs);
        } catch (err) {
            return res.status(500).send(`Error in getting launchs ${err}`);
        };
    };

    async createLaunch(req: Request, res: Response) {
        try {
            const rockets = await this.rocketService.get(req.body.rocket);
            const crews = await this.crewService.get(req.body.crew);
            const newLaunch = new Launch(
                req.body.id, 
                req.body.launchCode, 
                req.body.date, 
                req.body.success,
                rockets, 
                crews
            );
            const newestLaunch = await this.launchService.createLaunch(newLaunch);
            return res.json(newestLaunch);
        } catch (err) {
            return res.status(500).send(`Error in getting launch ${err}`);
        };
    };

    async updateLaunch(req: Request, res: Response) {
        try {
            const id = Number(req.params.id);
            if(await this.launchService.getLaunch(id)){
                const updatedLaunch = this.launchService.updateLaunch(id, req.body);
                return res.json(updatedLaunch);
            }
           
        } catch (err) {
            return res.status(500).send(`Error in getting launch ${err}`);
        };
    };

    async deleteLaunch(req: Request, res: Response) {
        try {
            const id = Number(req.params.id);
            if(await this.launchService.getLaunch(id)){
                const deletedLaunch = this.launchService.deleteLaunch(id);
                return res.json(deletedLaunch);
            }
           
        } catch (err) {
            return res.status(500).send(`Error in getting launch ${err}`);
        };
    };
}