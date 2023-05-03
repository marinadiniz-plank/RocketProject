import express from 'express';
const router = express.Router();
import { crewController } from '../../modules/crewModule';

router.route('/')
    .get(crewController.getCrews.bind(crewController))
    .post(crewController.createCrew.bind(crewController));
    
router.route('/:id')
    .get(crewController.getCrew.bind(crewController))
    .put(crewController.updateCrew.bind(crewController))
    .delete(crewController.deleteCrew.bind(crewController));

export default router;
