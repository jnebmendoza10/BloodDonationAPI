import {Request, Response} from "express";
import {Donor} from "../models/Donor";



class DonorController{

    async getAll (req: Request, res: Response){
        try{
            const donors = await Donor.findAll();

            return donors.length > 0
            ? res.status(200).json(donors)
            : res.status(204).send('There are no donors');
        }
        catch(error){
            console.error(error);
        }
       
    }

    async getById(req: Request, res: Response){
        try{
            const {donorId} = req.params;

        const donor = await Donor.findOne({
           where:{
               id: donorId,
           }
        });
        return donor 
        ? res.status(200).json(donor)
        : res.status(204).send('Donor does not exist');
        }
        catch(error){
            console.error(error);
        }
        
    }

    async register(req: Request, res: Response){
        try{
            const {name , age, bloodtype} = req.body;

        const donor = await Donor.create({
            name,
            age,
            bloodtype,
        });
        return res.status(201).json(donor);
        }
        catch(error){
            console.error(error);
        }
        
    }

    async update (req: Request, res: Response){
        try{
            if(!req.params){
                return res.status(400).send('No parameter is passed');
            }
            const {donorId} = req.params;
    
            const donor = await Donor.update(req.body,{ where:{ id: donorId}});
    
            return res.status(200).send('Updated successfully');
        }
        catch(error){
            console.error(error);
        }
        
    }

    async delete (req: Request, res: Response){
        try{
            if(!req.params){
                return res.status(400).send('No parameter is passed');
            }
            const {donorId} = req.params;
    
            const donor = await Donor.destroy({where: {id: donorId}});
    
            return res.status(200).send('Deleted successfully');
        }
        catch(error){
            console.error(error);
        }
        
    }

    
}

export default new DonorController();