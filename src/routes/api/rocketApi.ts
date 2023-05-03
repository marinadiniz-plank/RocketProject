import express from 'express';
const router = express.Router();
import { rocketController } from '../../modules/rocketModule';

router.route('/')
    .get(rocketController.getRockets.bind(rocketController))
    .post(rocketController.createRocket.bind(rocketController));

router.route('/:id')
    .get(rocketController.getRocket.bind(rocketController))
    .put(rocketController.updateRocket.bind(rocketController))
    .delete(rocketController.deleteRocket.bind(rocketController));

export default router;