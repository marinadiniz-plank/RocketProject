import express from 'express';
const router = express.Router();
import { launchController } from '../../modules/launchModule';

router.route('/')
    .get(launchController.getAll.bind(launchController))
    .post(launchController.create.bind(launchController));

router.route('/:id')
    .get(launchController.get.bind(launchController))
    .put(launchController.update.bind(launchController))
    .delete(launchController.delete.bind(launchController));

export default router;