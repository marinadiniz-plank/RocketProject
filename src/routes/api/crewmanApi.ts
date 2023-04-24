import express from 'express';
const router = express.Router();
import CrewmanController from '../../controllers/crewmanController';

const crewmanController = new CrewmanController();

router.route('/')
    .get(crewmanController.getCrewmans)
    .post(crewmanController.createCrewmans);

router.route('/:id')
    .get(crewmanController.getCrewman)
    .put(crewmanController.updateCrewmans)
    .delete(crewmanController.deleteCrewmans);

export default router;