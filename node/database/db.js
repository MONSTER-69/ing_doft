import { Sequelize } from "sequelize";

const db = new Sequelize('expedientes_db', 'root', 'Best4ever2018', {
    host: "localhost",
  dialect: "mysql",
});

export default db;