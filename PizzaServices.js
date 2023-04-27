import config from '.../../dbconfig.js';
import sql from 'mssql';

class PizzaServices{
    getAll = async () =>{

    }
    getById = async (ID) =>{
        let returnEntity = null;
        console.log('Estpy en: PizzaService.GetById(ID)');
        try{
            let pool = await sql.connect(config);
            let result = await pool.request()
                                    .input(pID, sql.Int, ID)
                                    .query('SELECT * FROM Pizzas WHERE ID = @pID');
            returnEntity = result.recordSets[0][0];
        }
        catch(error){
            console.log(error);
        }
        return returnEntity;
    }
    insert = async (Pizza) =>{

    }
    update = async (Pizza) =>{

    }
    deleteById = async (ID) =>{
        let rowsAffected = 0;
        console.log('Estoy en: PizzaServices.deleteById(ID)');
        try{
            let pool = await sql.connect(config);
            let result = await pool.request()
                                    .input(pID, sql.Int, ID)
                                    .query('DELETE FROM Pizzas WHERE ID = @pID');
            rowsAffected = result.rowsAffected;
        }
        catch(error){
            console.log(error);
        }
        return rowsAffected;
    }
}