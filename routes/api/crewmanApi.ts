import express from 'express';
const router = express.Router();
import crewmanController from '../../controllers/crewmanController';

router.route('/')
    .get(crewmanController.getCrewmans)
    .post(crewmanController.createCrewmans);

router.route('/:id')
    .get(crewmanController.getCrewmans)
    .put(crewmanController.updateCrewmans)
    .delete(crewmanController.deleteCrewmans);

export default router;