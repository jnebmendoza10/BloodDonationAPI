import sequelize from "../utils/connection";
import { BloodType } from "./BloodType";
import {Sequelize, Model, DataTypes} from "sequelize";


export interface DonorAttributes extends Model{
    id: number;
    name: string;
    age: number;
    bloodtype: BloodType;
}

export const Donor = sequelize.define<DonorAttributes>("Donor",{
    id: {
        primaryKey:true,
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
    },
    name:{
        type: DataTypes.STRING(128),
        allowNull: false,
    },
    age:{
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    bloodtype:{
        type: DataTypes.STRING(10),
        allowNull: false
    }
});



