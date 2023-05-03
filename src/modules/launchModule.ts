import { LaunchController } from "../controllers/launchController";
import { LaunchRepository } from "../repository/launchRepository";
import { LaunchServices } from "../service/launchService";
import { rocketServices } from "./rocketModule";
import { crewServices } from "./crewModule";

const launchRepository = new LaunchRepository()
const launchServices = new LaunchServices(launchRepository);


const launchController = new LaunchController(launchServices, rocketServices, crewServices);

export {
    launchRepository,
    launchServices,
    launchController
}
