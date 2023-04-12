import express from 'express';
const router = express.Router();
import crewmanController from '../../controllers/crewmanController';

router.route('/')
    .get(crewmanController.getCrewmans)
    .post(crewmanController.createCrewmans)
    .put(crewmanController.updateCrewmans)
    .delete(crewmanController.deleteCrewmans);

router.route('/:id')
    .get(crewmanController.getCrewmans);

module.exports = router;