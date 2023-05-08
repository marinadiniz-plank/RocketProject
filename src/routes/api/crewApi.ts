import express from 'express';
const router = express.Router();
import { crewController } from '../../modules/crewModule';

router.route('/')
    .get(crewController.getAll.bind(crewController))
    .post(crewController.create.bind(crewController));
    
router.route('/:id')
    .get(crewController.get.bind(crewController))
    .put(crewController.update.bind(crewController))
    .delete(crewController.delete.bind(crewController));

export default router;
