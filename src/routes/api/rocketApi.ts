import express from 'express';
import RocketController from '../../controllers/rocketController';
const router = express.Router();
const rocketController = new RocketController();

router.route('/')
    .get(rocketController.getRockets)
    .post(rocketController.createRocket);

router.route('/:id')
    .get(rocketController.getRockets)
    .put(rocketController.updateRocket)
    .delete(rocketController.deleteRocket);

export default router;