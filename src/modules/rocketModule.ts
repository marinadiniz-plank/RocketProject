import { RocketServices } from "../service/rocketService";
import { RocketController } from "../controllers/rocketController";
import { RocketRepository } from "../repository/rocketRepository";

const rocketRepository = new RocketRepository()
const rocketServices = new RocketServices(rocketRepository);
const rocketController = new RocketController(rocketServices);

export {
    rocketRepository,
    rocketServices,
    rocketController
}
