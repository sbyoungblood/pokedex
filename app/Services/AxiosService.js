

// @ts-ignore
export const pokeAPI = axios.create({
  baseURL: 'https://pokeapi.co',
  timeout: 2500,
  params: {
    limit: 151,
  }
})