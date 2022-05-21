<template>
    <div class="about">

        <div v-if="loading">
            Cargando ...
        </div>
        <div v-else>
            <h1> {{ pokemon.name }}</h1>
            <!-- <v-container>
                <v-row>
                    <v-col> -->
            <v-img class="img-rounded" height="300" width="300"
                :src="pokemon.sprites.other.dream_world.front_default" />
            <!-- </v-col>
                </v-row>
            </v-container> -->
        </div>
    </div>
</template>

<script>
import { getPokemonById } from '../store/pokemonService.js'
export default {
    data() {
        return {
            pokemon: {},
            loading: false,
        }
    },
    mounted() {
        this.loading = true
        getPokemonById(this.$route.params.id).then(res => {
            this.pokemon = res; this.loading = false
        }).catch(() => { this.loading = false })
    }
}

</script>