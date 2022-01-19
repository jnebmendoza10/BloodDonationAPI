import sequelize from "../utils/connection";
import {Sequelize, Model, DataTypes} from "sequelize";


export interface BloodbankLocationAttributes extends Model{
    id: number,
    location: string,
}


export const BloodbankLocation = sequelize.define<BloodbankLocationAttributes>("BloodBankLocation",{
    id:{
        primaryKey: true,
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
    },
    location:{
        type: DataTypes.STRING(128),
        allowNull: false,
    }
});