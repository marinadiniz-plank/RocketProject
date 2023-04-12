import express from 'express';
const router = express.Router();
import launchController from '../../controllers/launchController';

router.route('/')
    .get(launchController.getLaunches)
    .post(launchController.createLaunch)
    .put(launchController.updateLaunch)
    .delete(launchController.deleteLaunch);

router.route('/:id')
    .get(launchController.getLaunches);

module.exports = router;