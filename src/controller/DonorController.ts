import {Request, Response} from "express";
import {Donor} from "../models/Donor";



export class DonorController{

    async getAll (req: Request, res: Response){
        const donors = await Donor.findAll();

        return donors.length > 0
        ? res.status(200).json(donors)
        : res.status(204).send();
    }

    async getById(req: Request, res: Response){
        const {donorId} = req.params;

        const donor = await Donor.findOne({
           where:{
               id: donorId,
           }
        });
        return donor ? res.status(200).json(donor): res.status(204).send();
    }

    async register(req: Request, res: Response){
        const {name , age, bloodtype} = req.body;

        const donor = await Donor.create({
            name,
            age,
            bloodtype,
        });
        return res.status(201).json(donor);
    }

    async update (req: Request, res: Response){
        const {donorId} = req.params;

        const donor = await Donor.update(req.body,{ where:{ id: donorId}});

        return res.status(200).send();
    }

    async delete (req: Request, res: Response){
        const {donorId} = req.params;

        const donor = await Donor.destroy({where: {id: donorId}});

        return res.status(200).send();
    }

    
}


export default new DonorController();