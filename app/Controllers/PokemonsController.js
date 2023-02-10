import { appState } from "../AppState.js"
import { pokemonsService } from "../Services/PokemonsService.js"
import { Pop } from "../Utils/Pop.js"
import { setHTML } from "../Utils/Writer.js"




export class PokemonsController{

  _drawPokemonList(){
    let pokemons = appState.pokemons
    let template = ''
    pokemons.forEach(p => template += p.pokemonListTemplate)
    setHTML('pokemon-list', template)
  }

  _drawActivePokemon(){
    setHTML('active-pokemon', appState.activePokemon.activePokemonTemplate)
  }
  constructor(){
    this.getAllPokemons()
    appState.on('pokemons', this._drawPokemonList)
    appState.on('activePokemon', this._drawActivePokemon)
  }

  async getAllPokemons(){
    try {
      await pokemonsService.getAllPokemons()
    } catch (error) {
      console.error(error.message)
      Pop.error(error)
    }
  }

  async setActivePokemon(url){
    try {
      await pokemonsService.setActivePokemon(url)
    } catch (error) {
      console.error(error.message)
      Pop.error(error)
    }
  }
}