import express from 'express';
const router = express.Router();
import crewController from '../../controllers/crewController';

router.route('/')
    .get(crewController.getCrews)
    .post(crewController.createCrew);
    
router.route('/:id')
    .get(crewController.getCrews)
    .put(crewController.updateCrew)
    .delete(crewController.deleteCrew);

export default router;