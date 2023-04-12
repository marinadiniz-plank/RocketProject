import express from 'express';
const router = express.Router();
import crewController from '../../controllers/crewController';

router.route('/')
    .get(crewController.getCrews)
    .post(crewController.createCrew)
    .put(crewController.updateCrew)
    .delete(crewController.deleteCrew);

router.route('/:id')
    .get(crewController.getCrews);

module.exports = router;