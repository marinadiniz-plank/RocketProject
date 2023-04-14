import express from 'express';
import rocketController from '../../controllers/rocketController';
const router = express.Router();

router.route('/')
    .get(rocketController.getRockets)
    .post(rocketController.createRocket);

router.route('/:id')
    .get(rocketController.getRockets)
    .put(rocketController.updateRocket)
    .delete(rocketController.deleteRocket);

export default router;