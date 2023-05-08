import express from 'express';
const router = express.Router();
import { rocketController } from '../../modules/rocketModule';

router.route('/')
    .get(rocketController.getAll.bind(rocketController))
    .post(rocketController.create.bind(rocketController));

router.route('/:id')
    .get(rocketController.get.bind(rocketController))
    .put(rocketController.update.bind(rocketController))
    .delete(rocketController.delete.bind(rocketController));

export default router;