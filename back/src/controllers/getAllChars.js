const { User,Favorite,Character,conn } = require('../DB_connection');
const getAllChars = async (req,res)=> {
    const response = await Character.findAll();
    res.send(response)
}
module.exports=getAllChars;
