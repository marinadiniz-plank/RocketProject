import express from 'express';
const router = express.Router();
import { crewmanController } from '../../modules/crewmanModule';

router.route('/')
    .get(crewmanController.getCrewmans.bind(crewmanController))
    .post(crewmanController.createCrewmans.bind(crewmanController));

router.route('/:id')
    .get(crewmanController.getCrewman.bind(crewmanController))
    .put(crewmanController.updateCrewmans.bind(crewmanController))
    .delete(crewmanController.deleteCrewmans.bind(crewmanController));

export default router;