
const express = require('express')
const axios = require('axios')
const cors = require('cors')
const app = express()

app.use(cors())

app.get('/pokemon/:pokemonName', async (req, res) => {
const pokemonName = req.params.pokemonName
const url = `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
try{
    const response = await axios.get()
    const {name, sprites: {front_default}, height, weight } = response.data
    
    res.json({name, sprites: {front_default}, height, weight })

 
}catch(ERROR){
    res.status(404).json({error: 'pokemon no encontrado'})
}


})



app.listen(4000, () => {

    console.log('express esta escuchando en el puerto 4000')
})
