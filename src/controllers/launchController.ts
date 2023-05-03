import { Request, Response } from "express";
import { LaunchServices } from "../service/launchService";
import { Launch } from "../models/Launch";
import { RocketServices } from "../service/rocketService";
import { CrewServices } from "../service/crewService";
import { launchServices } from "../modules/launchModule";

export class LaunchController {
    constructor(
        private readonly launchServices: LaunchServices, 
        private readonly rocketService: RocketServices,
        private readonly crewService: CrewServices
    ) {}

    async getLaunch(req: Request, res: Response) {
        try {
            const id = Number(req.params.id);
            const launch = await launchServices.getLaunch(id);
            return res.json(launch);
        } catch (err) {
            return res.status(500).send(`Error in getting launch ${err}`);
        };
    };

    async getLaunches(req: Request, res: Response) {
        try {
            const launch = await launchServices.getLaunches();
            return res.json(launch);
        } catch (err) {
            return res.status(500).send(`Error in getting launchs ${err}`);
        };
    };

    async createLaunch(req: Request, res: Response) {
        try {
            const rockets = await this.rocketService.get(req.body.rocket);
            if (!rockets) {
				return res.status(404).json({ message: 'Rocket id does not exist!' })
			}

            const crews = await this.crewService.get(req.body.crew);
            if (!crews) {
				return res.status(404).json({ message: 'Crew id does not exist!' })
			}
            const newLaunch = new Launch(
                req.body.id, 
                req.body.launchCode, 
                req.body.date, 
                req.body.success,
                rockets, 
                crews
            );
            const launch = await launchServices.createLaunch(newLaunch);
            return res.json(launch);
        } catch (err) {
            return res.status(500).send(`Error in getting launch ${err}`);
        };
    };

    async updateLaunch(req: Request, res: Response) {
        try {
            const id = Number(req.params.id);
            if(id){
                const launch = launchServices.updateLaunch(id, req.body);
                return res.json(launch);
            }
            else    
                return res.status(500).send('id does not exist');
        } catch (err) {
            return res.status(500).send(`Error in getting launch ${err}`);
        };
    };

    async deleteLaunch(req: Request, res: Response) {
        try {
            const id = Number(req.params.id);
            if(id){
                const launch = launchServices.deleteLaunch(id);
                return res.json(launch);
            }
            else    
                return res.status(500).send('id does not exist');
        } catch (err) {
            return res.status(500).send(`Error in getting launch ${err}`);
        };
    };
}