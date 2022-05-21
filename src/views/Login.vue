<script>
import { login } from '../store/authService'
export default {
    data: () => ({
        error: null,
        email: '',
        password: '',
        emailRules: [
            v => !!v || 'E-mail is required',
            v => /.+@.+/.test(v) || 'E-mail must be valid',
        ],
        passwordRules: [
            v => !!v || 'Password is required',
            v => /[A-Za-z-_0-9]/.test(v) || 'Password must be valid',
        ],
    }),
    methods: {
        submit() {
            login(this.email, this.password).then(() => {
                this.$router.replace('/home')
            }).catch(errMessage => {
                this.error = errMessage
            })
        }
    }
}
</script>

<template>
    <v-card class="mx-auto my-12" max-width="374">
        <v-alert v-show="error" type="error">{{ error }}</v-alert>
        <v-card-title>Login</v-card-title>
        <v-card-text>
            <v-form>
                <v-text-field v-model="email" :rules="emailRules" label="E-mail" required></v-text-field>
                <v-text-field v-model="password" :rules="passwordRules" type="password" label="Password" required>
                </v-text-field>
            </v-form>
            <v-card-actions>
                <v-btn class="mr-4" @click="submit">
                    submit
                </v-btn>
            </v-card-actions>
        </v-card-text>

    </v-card>
</template>