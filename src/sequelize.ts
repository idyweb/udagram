import {Sequelize} from 'sequelize-typescript';
import { config } from './config/config';


const c = config.dev;
const host = c.host


// Instantiate new Sequelize instance!
export const sequelize = new Sequelize(
  //"postgres://udagramvalourdev:udagramvalourdev@udagramvalourdev.cxd1pyibqaxp.us-east-1.rds.amazonaws.com:5432/udagramvalourdev"
  `postgres://${c.username}:udagramvalourdev@${c.host}:${c.port}/${c.database}`
);

// "username": c.username,
//   "password": c.password,
//   "database": c.database,
//   "host":     process.env.POSTGRES_HOST,