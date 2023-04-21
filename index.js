import {config} from './dbconfig.js';
import sql from 'mssql';

let pool = await sql.connect(config);
let result = await pool.request().query("SELECT * FROM Pizza");

console.log(result.recordsets[0])