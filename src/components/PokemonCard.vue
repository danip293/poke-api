<template>
    <v-card class="mx-auto my-12" max-width="374">
        <v-img height="250" :src="pokemon.sprites.other.dream_world.front_default" />
        <v-card-title>
            <router-link :to="`/pokemon-detail/${pokemon.name}`">{{ pokemon.name }}</router-link>
        </v-card-title>
        <v-card-text>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s
        </v-card-text>

        <v-divider class="mx-4"></v-divider>

        <v-card-title>
            Stats
        </v-card-title>
        <v-card-text>
            hp
            <v-progress-linear :value="pokemon.stats[0].base_stat" color="indigo" height="20">
                {{ pokemon.stats[0].base_stat }}
            </v-progress-linear>
            atack
            <v-progress-linear :value="pokemon.stats[1].base_stat" color="indigo" height="20">{{
                    pokemon.stats[1].base_stat
            }}
            </v-progress-linear>
            special
            <v-progress-linear :value="pokemon.stats[1].base_stat" color="indigo" height="20">{{
                    pokemon.stats[1].base_stat
            }}
            </v-progress-linear>
            defence
            <v-progress-linear :value="pokemon.stats[1].base_stat" color="indigo" height="20">{{
                    pokemon.stats[1].base_stat
            }}
            </v-progress-linear>
        </v-card-text>

        <v-card-actions>
            <v-btn color="deep-purple lighten-2" text @click="addPokemon(pokemon)">
                Add
            </v-btn>
        </v-card-actions>
    </v-card>
</template>

<script>
export default {
    name: 'PokemonCard',
    props: {
        addPokemon: Function,
        pokemon: Object,
    }


}
</script>