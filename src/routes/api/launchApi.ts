import express from 'express';
import LaunchController from '../../controllers/launchController';
const router = express.Router();
const launchController = new LaunchController();

router.route('/')
    .get(launchController.getLaunches)
    .post(launchController.createLaunch);

router.route('/:id')
    .get(launchController.getLaunch)
    .put(launchController.updateLaunch)
    .delete(launchController.deleteLaunch);

export default router;