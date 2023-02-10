


export class ActivePokemon{
  constructor(data){
    this.name = data.name
    this.type = data.types
    this.height = data.height
    this.weight = data.weight
    this.index = data.order
    this.img = data.sprites.other["official-artwork"].front_default
  }

  get activePokemonTemplate(){
    return`
    <div class="col-md-12 name-card text-center">${this.name}</div>
    <div class="col-md-12 poke-img flex-grow-1"><img src="${this.img}" alt=""></div>
    <div class="col-md-12 stats-card">
      <div class="col-md-3">${this.index}</div>
      <div class="col-md-3">${this.height}</div>
      <div class="col-md-3">${this.weight}</div>
      <div class="col-md-3">${this.formatTypes}</div>
    </div>
    `
  }

  get formatTypes(){
    let template = ''
    this.type.forEach(t => template += `
    <span>${t.type.name}</span>
    `)
    return template
  }
}