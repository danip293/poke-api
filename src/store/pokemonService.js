import axios from "axios"

const handleSuccess = res => res.data
const handleError = e => { console.error(e) }

export const getPokemonTypes = () => axios.get('https://pokeapi.co/api/v2/type/')
    .then(handleSuccess)
    .catch(handleError)

export const getAllPokemon = ({ limit = 10, offset = 0 } = {}) => {
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