import express from 'express';
const router = express.Router();
import launchController from '../../controllers/launchController';

router.route('/')
    .get(launchController.getLaunches);

router.route('/:id')
    .get(launchController.getLaunches)
    .post(launchController.createLaunch)
    .put(launchController.updateLaunch)
    .delete(launchController.deleteLaunch);

export default router;