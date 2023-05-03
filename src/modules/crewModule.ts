import { CrewController } from "../controllers/crewController";
import { CrewRepository } from "../repository/crewRepository";
import { CrewServices } from "../service/crewService";
import { crewmanServices } from "./crewmanModule";
const crewRepository = new CrewRepository();
const crewServices = new CrewServices(crewRepository);

const crewController = new CrewController(crewServices, crewmanServices);

export {
    crewController,
    crewServices,
    crewRepository
}