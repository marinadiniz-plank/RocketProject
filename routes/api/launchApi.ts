import express from 'express';
import launchController from '../../controllers/launchController';
const router = express.Router();

router.route('/')
    .get(launchController.getLaunches)
    .post(launchController.createLaunch);

router.route('/:id')
    .get(launchController.getLaunches)
    .post(launchController.createLaunch)
    .put(launchController.updateLaunch)
    .delete(launchController.deleteLaunch);

export default router;