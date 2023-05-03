import express from 'express';
const router = express.Router();
import { launchController } from '../../modules/launchModule';

router.route('/')
    .get(launchController.getLaunches)
    .post(launchController.createLaunch);

router.route('/:id')
    .get(launchController.getLaunch)
    .put(launchController.updateLaunch)
    .delete(launchController.deleteLaunch);

export default router;