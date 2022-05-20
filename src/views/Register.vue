<script>
export default {
    data: () => ({
        valid: false,
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
}
</script>

<template>
    <div class="about">
        <h1>Register</h1>
        <v-form v-model="valid">
            <v-container>
                <v-row>
                    <v-col cols="12" md="4">
                        <v-text-field v-model="email" :rules="emailRules" label="E-mail" required></v-text-field>
                    </v-col>
                    <v-col cols="12" md="4">
                        <v-text-field v-model="password1" :rules="passwordRules" type="password" label="Password"
                            required></v-text-field>
                    </v-col>
                    <v-col cols="12" md="4">
                        <v-text-field v-model="password2" :rules="passwordRules" type="password" label="Password"
                            required></v-text-field>
                    </v-col>
                </v-row>
                <v-btn class="mr-4" @click="submit">
                    submit
                </v-btn>
            </v-container>

        </v-form>
    </div>
</template>