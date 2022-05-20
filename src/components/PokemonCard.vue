<template>
    <v-card class="mx-auto my-12" max-width="374">
        <v-img height="250" :src="image" />
        <v-card-title>{{ name }}</v-card-title>
        <v-card-text>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s
        </v-card-text>

        <v-divider class="mx-4"></v-divider>

        <v-card-title>Stats</v-card-title>

        <v-card-text>
            hp
            <v-progress-linear :value="hp" color="indigo" height="20">{{ hp }}</v-progress-linear>
            atack
            <v-progress-linear :value="atack" color="indigo" height="20">{{ atack }}</v-progress-linear>
            special
            <v-progress-linear :value="special" color="indigo" height="20">{{ special }}</v-progress-linear>
            defence
            <v-progress-linear :value="defence" color="indigo" height="20">{{ defence }}</v-progress-linear>
        </v-card-text>

        <!-- <v-card-actions>
            <v-btn color="deep-purple lighten-2" text @click="reserve">
                Reserve
            </v-btn>
        </v-card-actions> -->
    </v-card>
</template>

<script>
export default {
    name: 'PokemonCard',
    props: {
        name: String,
        image: String,
        hp: Number,
        atack: Number,
        special: Number,
        defence: Number,
    }


}
</script>