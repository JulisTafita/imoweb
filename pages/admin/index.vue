<script lang="ts" setup>

import {ref} from 'vue';

definePageMeta({
    layout: "none",
});

const isLoading = ref(false);

const setEmail = ref("admin@nativel.imo");
const setPsw = ref("");


const showLoginError = ref(false);

const
    submitForm = async () => {
        isLoading.value = true;
        let _email = setEmail.value;
        let _psw = setPsw.value;

        await useFetch('/api/auth/signin', {
            headers: {"Content-type": "application/json"},
            method: 'POST',
            body: {
                "email": _email,
                "password": _psw
            }
        }).then((response) => {

            setTimeout(async () => {
                await navigateTo("/admin/setting")
            }, 1000)

        }).catch(e => {
            showLoginError.value = true
            console.log(e)
        })
    }

</script>


<template>
    <div v-if="showLoginError">Is ERRROR</div>
    <section class="bg-gray-50 dark:bg-gray-900">
        <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto h-screen lg:py-0">
            <div
                class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                    <h1 class="text-center text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                        Entrez vos identifiants
                    </h1>
                    <form class="space-y-4 md:space-y-6" action="#">
                        <div>
                            <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Votre
                                Email :</label>
                            <input type="email" name="email" id="email" v-model="setEmail"
                                   class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg
                            focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700
                            dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500
                            dark:focus:border-blue-500"
                                   placeholder="admin@nativel.imo" required="">
                        </div>
                        <div>
                            <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Votre
                                mot de passe :</label>
                            <input type="password" name="password" id="password" placeholder="••••••••" v-model="setPsw"
                                   class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                   required="">
                        </div>
                        <div class="flex items-center justify-between">
                            <div class="flex items-start"></div>
                            <a href="#"
                               class="text-sm font-medium text-slate-600 hover:underline dark:text-primary-500">mot de
                                passe oublié?</a>
                        </div>
                        <button
                            @click.prevent="submitForm"
                            type="submit"
                            class="w-full text-white bg-slate-600 hover:bg-slate-700 focus:ring-4 focus:outline-none focus:ring-slate-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">

                            <span v-if="isLoading">
                                <Loader/>
                            </span>

                            <span v-if="!isLoading">
                                SE CONNECTER
                            </span>

                        </button>
                    </form>
                </div>
            </div>
        </div>
    </section>
</template>