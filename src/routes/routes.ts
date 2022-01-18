import express from "express";
import DonorController from "../controller/DonorController";
const router = express.Router();


router.get('/donors', DonorController.getAll);
router.get('/donors/:donorId', DonorController.getById)
router.post('/register', DonorController.register);
router.patch('/donors/:donorId', DonorController.update);
router.delete('/donors/:donorId', DonorController.delete);

export default router;