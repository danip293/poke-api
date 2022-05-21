<script>
import { singup } from '../store/authService'
export default {
    data: () => ({
        error: null,
        email: '',
        password1: '',
        password2: '',
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
            singup(this.email, this.password1)
                .then(() => { this.$router.replace('/home') })
                .catch(errMessage => {
                    this.error = errMessage
                })
        }
    }
}
</script>

<template>
    <v-card class="mx-auto my-12" max-width="374">
        <v-alert v-show="error" type="error">{{ error }}</v-alert>
        <v-card-title>Register</v-card-title>
        <v-card-text>
            <v-form>
                <v-text-field v-model="email" :rules="emailRules" label="E-mail" required>
                </v-text-field>

                <v-text-field v-model="password1" :rules="passwordRules" type="password" label="Password" required>
                </v-text-field>

                <v-text-field v-model="password2" :rules="passwordRules" type="password" label="Password" required>
                </v-text-field>

                <v-card-actions>
                    <v-btn class="mr-4" @click="submit">
                        submit
                    </v-btn>
                </v-card-actions>
            </v-form>
        </v-card-text>
    </v-card>

</template>