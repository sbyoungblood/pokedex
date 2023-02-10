import { appState } from "../AppState.js"
import { ActivePokemon } from "../Models/ActivePokemon.js"
import { Pokemon } from "../Models/Pokemon.js"
import { pokeAPI } from "./AxiosService.js"



class PokemonsService{
  async setActivePokemon(url) {
    const res = await pokeAPI.get(url)
    appState.activePokemon = new ActivePokemon(res.data)
    // console.log('active pokemon', appState.activePokemon);
  }
  async getAllPokemons() {
    
    const res = await pokeAPI.get('/api/v2/pokemon/')
    // console.log('[POKEMON GET LIST]', res.data);
    appState.pokemons = res.data.results.map(p => new Pokemon(p))
    console.log('[POKEMON CLASS LIST]', appState.pokemons);
  }

}

export const pokemonsService = new PokemonsService()