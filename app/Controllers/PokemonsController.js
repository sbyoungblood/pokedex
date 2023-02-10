import { pokemonsService } from "../Services/PokemonsService.js"
import { Pop } from "../Utils/Pop.js"


export class PokemonsController{
  constructor(){

  }

  async getAllPokemons(){
    try {
      await pokemonsService.getAllPokemons()
    } catch (error) {
      console.error(error.message)
      Pop.error(error)
    }
  }
}