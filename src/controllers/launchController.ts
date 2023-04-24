import { Request, Response } from "express";
import launchService from "../service/launchService";
import { Launch } from "../models/Launch";
import { rocketRepository } from "../repository/rocketRepository";
import { crewRepository } from "../repository/crewRepository";

class LaunchController {
    async getLaunch(req: Request, res: Response) {
        try {
            const id = Number(req.params.id);
            const launch = await launchService.getLaunch(id);
            return res.json(launch);
        } catch (err) {
            return res.status(500).send(`Error in getting launch ${err}`);
        };
    };

    async getLaunches(req: Request, res: Response) {
        try {
            const launch = await launchService.getLaunches();
            return res.json(launch);
        } catch (err) {
            return res.status(500).send(`Error in getting launchs ${err}`);
        };
    };

    async createLaunch(req: Request, res: Response) {
        try {
            const rockets = await rocketRepository.findOne({where: {id: req.body.rocket}});
            if (!rockets) {
				return res.status(404).json({ message: 'Rocket id does not exist!' })
			}

            const crews = await crewRepository.findOne({where: {id: req.body.crew}});
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
            const launch = await launchService.createLaunch(newLaunch);
            return res.json(launch);
        } catch (err) {
            return res.status(500).send(`Error in getting launch ${err}`);
        };
    };

    async updateLaunch(req: Request, res: Response) {
        try {
            const id = Number(req.params.id);
            if(id){
                const launch = launchService.updateLaunch(id, req.body);
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
                const launch = launchService.deleteLaunch(id);
                return res.json(launch);
            }
            else    
                return res.status(500).send('id does not exist');
        } catch (err) {
            return res.status(500).send(`Error in getting launch ${err}`);
        };
    };
}
export default LaunchController;