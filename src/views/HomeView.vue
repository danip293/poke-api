<template>
  <v-container>
    <v-row align="center">
      <v-col class="d-flex" cols="12">
        <v-select :items="pokemonTypes" @change="selectChange" label="Standard"></v-select>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" sm="12" md="9">
        <div class="pokemon-layout">
          <div v-for="pokemon in pokemons">
            <PokemonCard :name="pokemon.name" :image="pokemon.sprites.other.dream_world.front_default"
              :hp="pokemon.stats[0].base_stat" :atack="pokemon.stats[1].base_stat" :special="pokemon.stats[1].base_stat"
              :defence="pokemon.stats[1].base_stat" />
          </div>
        </div>
      </v-col>
      <v-col cols="12" sm="12" md="3">
        <v-simple-table>
          <template v-slot:default>
            <thead>
              <tr>
                <th class="text-left">
                  Name
                </th>
                <th class="text-left">
                  Calories
                </th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in storagedPokemons" :key="item.name">
                <td>{{ item.name }}</td>
                <td>{{ item.calories }}</td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
      </v-col>
    </v-row>
  </v-container>

</template>

<script>
import { getAllPokemon, getPokemonTypes } from '../store/pokemonService.js'
import PokemonCard from '../components/PokemonCard.vue'

export default {
  name: 'Home',
  data() {
    return {
      pokemons: [],
      pokemonTypes: [],
      storagedPokemons: []
    }
  },
  methods: {
    selectChange(value) {
      this.$router.push({ path: '/home', query: { type: value } })
    }
  },
  components: {
    PokemonCard,
    PokemonCard
  },
  mounted() {
    getAllPokemon().then(pokemons => { this.pokemons = pokemons.results })
    getPokemonTypes().then(types => { this.pokemonTypes = types.results.map(i => i.name) })
  }

}
</script>

<style>
.pokemon-layout {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 10px;
  grid-auto-rows: minmax(100px, auto);
}
</style>