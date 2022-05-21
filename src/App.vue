<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <div class="d-flex align-center">
        <v-img alt="Vuetify Name" class="shrink mt-1 hidden-sm-and-down" contain min-width="100"
          src="/img/pokeapi_logo.png" width="100" />
      </div>

      <v-spacer></v-spacer>
      <div v-show="isLoggued">Bienvenido</div>
      <router-link to="/home">
        <v-btn text>
          <span class="mr-2">Home</span>
        </v-btn>
      </router-link>
      <router-link to="/home">
        <v-btn text>
          <span class="mr-2">Habilidades</span>
        </v-btn>
      </router-link>

      <v-btn v-if="isLoggued" @click="logout" text>
        <span class="mr-2">Cerrar sesion</span>
      </v-btn>
      <div v-else>
        <router-link to="/login">
          <v-btn text>
            <span class="mr-2">Iniciar sesion</span>
          </v-btn>
        </router-link>
        <router-link to="/register">
          <v-btn text>
            <span class="mr-2">Registrarse</span>
          </v-btn>
        </router-link>
      </div>
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
      this.isLoggued = false
      document.cookie = "session=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
      this.$router.push('/login')
    },
    sincLoggued() {
      this.isLoggued = !!getCookie('session')
    }
  },
  watch: {
    '$route': 'sincLoggued'
  },
};
</script>
