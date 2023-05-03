import { CrewmanController } from "../controllers/crewmanController";
import { CrewmanRepository } from "../repository/crewmanRepository";
import { CrewmanServices } from "../service/crewmanService";

const crewmanRepository = new CrewmanRepository();
const crewmanServices = new CrewmanServices(crewmanRepository);
const crewmanController = new CrewmanController(crewmanServices);

export {
    crewmanController,
    crewmanServices,
    crewmanRepository
}