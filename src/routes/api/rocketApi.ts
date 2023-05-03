import express from 'express';
const router = express.Router();
import { rocketController } from '../../modules/rocketModule';

console.log("im in route")
router.route('/')
    .get(rocketController.getRockets)
    .post(rocketController.createRocket);

router.route('/:id')
    .get(rocketController.getRocket)
    .put(rocketController.updateRocket)
    .delete(rocketController.deleteRocket);

export default router;