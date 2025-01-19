import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";

const Book = sequelize.define('Book', {
    title: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
    },

    author: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    year: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, {
    tableName: 'books',
    timestamps: false,
})

export default Book;
