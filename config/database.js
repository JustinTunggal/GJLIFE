import { Sequelize } from "sequelize";

const db = new Sequelize("gjlife1", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

export default db;
