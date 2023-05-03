import express from 'express';
const router = express.Router();
import { crewController } from '../../modules/crewModule';

router.route('/')
    .get(crewController.getCrews)
    .post(crewController.createCrew);
    
router.route('/:id')
    .get(crewController.getCrew)
    .put(crewController.updateCrew)
    .delete(crewController.deleteCrew);

export default router;
