import { Request, Response } from "express";
import { LaunchServices } from "../service/launchService";
import { Launch } from "../models/Launch";
import { RocketServices } from "../service/rocketService";
import { CrewServices } from "../service/crewService";
import { IController } from "./Interface/IController";

export class LaunchController implements IController<Launch>{
    constructor(
        private readonly launchService: LaunchServices, 
        private readonly rocketService: RocketServices,
        private readonly crewService: CrewServices
    ) {}

    async get(req: Request, res: Response): Promise<Launch | undefined> {
        try {
            const id = Number(req.params.id);
            const launch = await this.launchService.get(id);
            res.json(launch);
            return launch;
        } catch (err) {
            res.status(500).send(`Error in getting launch ${err}`);
        };
    };

    async getAll(req: Request, res: Response): Promise<Launch[] | undefined> {
        try {
            const launchs = await this.launchService.getAll();
            res.json(launchs);
            return launchs;
        } catch (err) {
            res.status(500).send(`Error in getting launchs ${err}`);
        };
    };

    async create(req: Request, res: Response): Promise<Launch | undefined> {
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
            console.log(newLaunch);
            
            const newestLaunch = await this.launchService.create(newLaunch);
            res.json(newestLaunch);
            return newLaunch;
        } catch (err) {
            res.status(500).send(`Error in creating launch ${err}`);
        };
    };

    async update(req: Request, res: Response): Promise<void | undefined> {
        try {
            const id = Number(req.params.id);
            if(await this.launchService.get(id)){
                const updatedLaunch = this.launchService.update(id, req.body);
                res.json(updatedLaunch);
                return updatedLaunch;
            }
           
        } catch (err) {
            res.status(500).send(`Error in updating launch ${err}`);
        };
    };

    async delete(req: Request, res: Response): Promise<void | undefined> {
        try {
            const id = Number(req.params.id);
            if(await this.launchService.get(id)){
                const deletedLaunch = this.launchService.delete(id);
                res.json(deletedLaunch);
                return deletedLaunch;
            }
           
        } catch (err) {
            res.status(500).send(`Error in deleting launch ${err}`);
        };
    };
}