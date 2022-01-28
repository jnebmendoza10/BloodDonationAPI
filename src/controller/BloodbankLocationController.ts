import {Request, Response} from "express"
import { BloodbankLocation } from "../models/BloodbankLocation"


class BloodbankLocationController{

    async getAll (req: Request, res: Response){
        try{
            const locations = await BloodbankLocation.findAll();
    
            return locations.length > 0
            ? res.status(200).json(locations)
            : res.status(204).send('There are no locations');
        }
        catch(error){
            console.error(error);
        }
    }
   
}

export default new BloodbankLocationController();