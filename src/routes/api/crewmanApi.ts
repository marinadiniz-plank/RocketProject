import express from 'express';
const router = express.Router();
import { crewmanController } from '../../modules/crewmanModule';

router.route('/')
    .get(crewmanController.get.bind(crewmanController))
    .post(crewmanController.create.bind(crewmanController));

router.route('/:id')
    .get(crewmanController.get.bind(crewmanController))
    .put(crewmanController.update.bind(crewmanController))
    .delete(crewmanController.delete.bind(crewmanController));

export default router;