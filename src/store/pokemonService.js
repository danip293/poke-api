import axios from "axios"

const handleSuccess = res => res.data
const handleError = e => { console.error(e) }

export const getPokemonTypes = ({ limit = 20, offset = 0 } = {}) => axios.get('https://pokeapi.co/api/v2/type/', { params: { limit, offset } })
    .then(handleSuccess)
    .catch(handleError)

export const getPokemonByType = (typeID) => {

    return axios.get(`https://pokeapi.co/api/v2/type/${typeID}`)
        .then(handleSuccess)
        .then(res =>
            Promise.all(
                res.pokemon.slice(0, 20).map(p => getPokemonById(p.pokemon.name)))
        )
        .then(results => ({ results }))
        .catch(handleError)
}



export const getAllPokemon = ({ limit = 20, offset = 0 } = {}) => {
    return axios.get('https://pokeapi.co/api/v2/pokemon/', { params: { limit, offset } })
        .then(handleSuccess)
        .then(pokemons =>
            Promise.all(pokemons.results.map(p => getPokemonById(p.name)))
        )
        .then(results => ({ results }))
        .catch(handleError)
}

export const getPokemonById = (IDorName) => {
    return axios.get(`https://pokeapi.co/api/v2/pokemon/${IDorName}`)
        .then(handleSuccess)
        .catch(handleError)
}