import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";

const program = sequelize.define('program', {

    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    size: {
        type: DataTypes.INTEGER,
        allowNull: false,
    }
},{
    tableName:'programs',
    timestamps: false,
}
)