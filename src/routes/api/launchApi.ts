import express from 'express';
const router = express.Router();
import { launchController } from '../../modules/launchModule';

router.route('/')
    .get(launchController.getLaunches.bind(launchController))
    .post(launchController.createLaunch.bind(launchController));

router.route('/:id')
    .get(launchController.getLaunch.bind(launchController))
    .put(launchController.updateLaunch.bind(launchController))
    .delete(launchController.deleteLaunch.bind(launchController));

export default router;