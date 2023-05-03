import express from 'express';
const router = express.Router();
import { crewmanController } from '../../modules/crewmanModule';

router.route('/')
    .get(crewmanController.getCrewmans)
    .post(crewmanController.createCrewmans);

router.route('/:id')
    .get(crewmanController.getCrewman)
    .put(crewmanController.updateCrewmans)
    .delete(crewmanController.deleteCrewmans);

export default router;