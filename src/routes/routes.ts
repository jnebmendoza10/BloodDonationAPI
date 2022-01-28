import express from "express";
import DonorController from "../controller/DonorController";
import BloodbankLocationController from "../controller/BloodbankLocationController";
const router = express.Router();

//Donor
router.get('/donors', DonorController.getAll);
router.get('/donors/:donorId', DonorController.getById)
router.post('/register', DonorController.register);
router.patch('/donors/:donorId', DonorController.update);
router.delete('/donors/:donorId', DonorController.delete);

//BloodBankLocation
router.get('/locations', BloodbankLocationController.getAll);

export default router;