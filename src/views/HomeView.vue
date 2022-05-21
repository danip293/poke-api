<template>
  <v-container>
    <v-row align="center">
      <v-col class="d-flex" cols="12">
        <v-select :items="pokemonTypes" @change="selectChange" label="Standard"></v-select>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" sm="12" md="9">
        <div v-if="loading" class="text-center">
          <v-progress-circular :size="70" color="primary" indeterminate></v-progress-circular>
        </div>
        <div v-else class="pokemon-layout">
          <div v-for="pokemon in pokemons">
            <PokemonCard :pokemon="pokemon" :addPokemon="addPokemon" />
          </div>
        </div>
      </v-col>
      <v-col cols="12" sm="12" md="3">
        <h4 class="text-center">My pokemons</h4>
        <v-simple-table>
          <template v-slot:default>
            <thead>
              <tr>
                <th class="text-left">
                  ID
                </th>
                <th class="text-left">
                  Name
                </th>
                <th class="text-left">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in storagedPokemons" :key="item.id">
                <td>{{ item.id }}</td>
                <td>{{ item.name }}</td>
                <td>
                  <v-btn class="mx-2" fab x-small color="error" @click="removePokemon(item.id)">
                    <v-icon dark>
                      mdi-minus
                    </v-icon>
                  </v-btn>
                </td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
        <div class="d-flex mt-4">
          <v-btn class="mx-2" color="error" @click="removePokemon()">
            Delete all
          </v-btn>
          <router-link to="/home">Reload</router-link>
        </div>
      </v-col>
    </v-row>
  </v-container>

</template>

<script>
import { getAllPokemon, getPokemonTypes, getPokemonByType } from '../store/pokemonService.js'
import PokemonCard from '../components/PokemonCard.vue'

export default {
  name: 'Home',
  data() {
    return {
      pokemons: [],
      pokemonTypes: [],
      storagedPokemons: [],
      loading: false
    }
  },
  watch: {
    // whenever storagedPokemons changes, this function will run
    storagedPokemons(pokemons) {
      let parsed = JSON.stringify(pokemons);
      localStorage.setItem('storagedPokemons', parsed);
    },
    '$route': 'fetchData'
  },
  methods: {
    fetchData() {
      this.loading = true
      const typeID = this.$route.query.type
      Promise.all([
        typeID ? getPokemonByType(typeID) : getAllPokemon(),
        getPokemonTypes()
      ]).then(([pokemons, types]) => {
        this.pokemons = pokemons.results.map(
          ({ id, stats, name, sprites, types }) => ({ id, stats, name, sprites, types })
        )
        this.pokemonTypes = types.results.map(i => i.name)
        this.loading = false
      }).catch(() => {
        this.loading = false
        this.pokemonTypes = []
        this.pokemons = []
      })

    },
    selectChange(value) {
      this.$router.push({ path: '/home', query: { type: value } })
    },
    addPokemon(pokemon) {
      // ensure does not exist in array
      if (!pokemon) return;
      if (this.storagedPokemons.includes(pokemon)) { return }
      this.storagedPokemons.push(pokemon);
    },
    removePokemon(id) {
      if (id) {
        this.storagedPokemons = this.storagedPokemons.filter(i => i.id != id);
      } else {
        this.storagedPokemons = [];
      }
    },
  },
  components: {
    PokemonCard,
  },
  created() {
    // fetch the data when the view is created and the data is
    // already being observed
    this.fetchData()
  },
  mounted() {
    // LOCAL STORAGE
    if (localStorage.getItem('storagedPokemons')) {
      try {
        this.storagedPokemons = JSON.parse(localStorage.getItem('storagedPokemons'));
      } catch (e) {
        localStorage.removeItem('storagedPokemons');
      }
    }
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