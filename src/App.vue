<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <div class="d-flex align-center">
        <v-img alt="Vuetify Name" class="shrink mt-1 hidden-sm-and-down" contain min-width="100"
          src="/img/pokeapi_logo.png" width="100" />
      </div>

      <v-spacer></v-spacer>
      <div v-show="isLoggued">Bienvenido</div>

      <v-btn href="/home" text>
        <span class="mr-2">Home</span>
      </v-btn>
      <v-btn href="/home" text>
        <span class="mr-2">Habilidades</span>
      </v-btn>
      <v-btn v-if="isLoggued" href='/login' @click="logout" text>
        <span class="mr-2">Cerrar sesion</span>
      </v-btn>
      <v-btn v-else href="/login" text>
        <span class="mr-2">Iniciar sesion</span>
      </v-btn>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import { getCookie } from './store/authService';
export default {
  name: 'App',
  data: () => ({
    isLoggued: !!getCookie('session')
  }),
  methods: {
    logout() {
      document.cookie = "session=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    }
  }
  // mounted() {


  // }
};
</script>
