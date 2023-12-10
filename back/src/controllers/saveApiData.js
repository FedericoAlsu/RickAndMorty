const { User,Favorite,Character,conn } = require('../DB_connection');
const getApiData = async ()=> {
    const response = await fetch('https://rickandmortyapi.com/api/character');
    const data = await response.json();
    return data;
}
const saveApiData = async ()=>{
    let data = await getApiData();
    for (let index = 0; index < data.results.length; index++) {
        const [char, created] = await Character.findOrCreate({
            where: { name: data.results[index].name },
            defaults: {
              id: data.results[index].id,
              name: data.results[index].name,
              status: data.results[index].status,
              species: data.results[index].species,
              gender: data.results[index].gender,
              origin: data.results[index].origin.name,
              image: data.results[index].image,
            }
        });
    }
}
module.exports=saveApiData;
