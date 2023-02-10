


export class Pokemon{
  constructor(data){
    this.name = data.name
    this.url = data.url
  }

  get pokemonListTemplate(){
    return`
    <div class="pb-2 ps-4 pokemon-button" onclick="app.pokemonsController.setActivePokemon('${this.url}')"><span class="mdi mdi-pokeball list-icon pe-2"></span>${this.name}</div>
    `
  }
}