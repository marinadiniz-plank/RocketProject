import express from 'express';
const router = express.Router();
import CrewController from '../../controllers/crewController';

const crewController = new CrewController();

router.route('/')
    .get(crewController.getCrews)
    .post(crewController.createCrew);
    
router.route('/:id')
    .get(crewController.getCrew)
    .put(crewController.updateCrew)
    .delete(crewController.deleteCrew);

export default router;