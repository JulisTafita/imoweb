<script setup>
import {ref} from 'vue';


const isActionFloatingButtonActive = ref(false);

const actionFloatingButtonClick = () => {
    isActionFloatingButtonActive.value = !isActionFloatingButtonActive.value
}

</script>

<template>
    <div v-if="isActionFloatingButtonActive" class="sticky top-0 w-screen h-screen bg-white px-10 py-[50px]">

        <div class="flex flex-col items-center justify-center">
            <div class="h-[50px] w-full flex flex-row justify-center items-center border-b">
                <NuxtLink to="/"
                          prefetchedClass="mx-1 my-2 font-bold text-lg h-12 pt-3 px-3 tracking-wide hover:text-cyan-500"
                          activeClass="text-cyan-500">
                    <span>Acceuil</span>
                </NuxtLink>
            </div>
            <div class="h-[50px] w-full flex flex-row justify-center items-center border-b">
                <NuxtLink to="/products"
                          prefetchedClass="mx-1 my-2 font-bold text-lg h-12 pt-3 px-3 tracking-wide hover:text-cyan-500"
                          activeClass="text-cyan-500">
                    <span>Acheter</span>
                </NuxtLink>
            </div>

            <div class="h-[50px] w-full flex flex-row justify-center items-center border-b">
                <NuxtLink to="/products"
                          prefetchedClass="mx-1 my-2  font-bold text-lg h-12 pt-3 px-3 tracking-wide hover:text-cyan-500"
                          activeClass="text-cyan-500">
                    <span>Louer</span>
                </NuxtLink>
            </div>

            <div class="h-[50px] w-full flex flex-row justify-center items-center border-b">
                <NuxtLink to="/products"
                          prefetchedClass="mx-1 my-2 font-bold text-lg h-12 pt-3 px-3 tracking-wide hover:text-cyan-500"
                          activeClass="text-cyan-500">
                    <span>Nous contacter</span>
                </NuxtLink>
            </div>

            <div class="h-[50px] w-full flex flex-row justify-center items-center border-b">
                <NuxtLink to="/admin"
                          prefetchedClass="mx-1 my-2  font-bold text-lg h-12 pt-3 px-3 tracking-wide hover:text-cyan-500"
                          activeClass="text-cyan-500">
                    <span>Admin</span>
                </NuxtLink>
            </div>


        </div>

    </div>

    <div @click="actionFloatingButtonClick"
         class="absolute bottom-5 right-5 border-2 border-cyan-500 rounded-full w-14 h-14 md:invisible shadow-lg">
        <div class="flex flex-row justify-center items-center w-full h-full text-slate-500">
            <svg v-if="!isActionFloatingButtonActive" xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                 class="bi bi-list w-10 h-10"
                 viewBox="0 0 16 16">
                <path fill-rule="evenodd"
                      d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
            </svg>

            <svg v-if="isActionFloatingButtonActive" xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                 class="bi bi-x-lg w-10 h-10"
                 viewBox="0 0 16 16">
                <path
                    d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
            </svg>
        </div>
    </div>


    <div class="md:sticky top-0 border-b bg-white">
        <div class="max-w-[1200px] m-auto sm:w-screen mb-5">
            <nav class="flex flex-row justify-center items-center">
                <div class="md:basis-1/4 flex flex-row">
                    <NuxtLink to="/"
                              prefetchedClass="text-gray-800 text-xl font-bold md:text-2xl hover:text-gray-700">
                        <img class="h-20 w-40" src="/img/nativel_icon.jpg" alt="Discover Nuxt 3"/>
                    </NuxtLink>
                </div>
                <div class="md:basis-3/4 md:visible invisible">
                    <div class="flex flex-row justify-end">
                        <NuxtLink to="/"
                                  prefetchedClass="lg:mx-1 my-2 lg:block hidden font-bold text-lg h-12 pt-3 px-3 tracking-wide hover:text-cyan-500"
                                  activeClass="text-cyan-500">
                            <span>Acceuil</span>
                        </NuxtLink>
                        <NuxtLink to="/products"
                                  prefetchedClass="lg:mx-1 my-2 lg:block hidden font-bold text-lg h-12 pt-3 px-3 tracking-wide hover:text-cyan-500"
                                  activeClass="text-cyan-500">
                            <span>Acheter</span>
                        </NuxtLink>
                        <NuxtLink to="/products"
                                  prefetchedClass="lg:mx-1 my-2 lg:block hidden font-bold text-lg h-12 pt-3 px-3 tracking-wide hover:text-cyan-500"
                                  activeClass="text-cyan-500">
                            <span>Louer</span>
                        </NuxtLink>
                        <NuxtLink to="/products"
                                  prefetchedClass="lg:mx-1 my-2 lg:block hidden font-bold text-lg h-12 pt-3 px-3 tracking-wide hover:text-cyan-500"
                                  activeClass="text-cyan-500">
                            <span>Nous contacter</span>
                        </NuxtLink>
                        <NuxtLink to="/admin"
                                  prefetchedClass="lg:mx-1 my-2 lg:block hidden font-bold text-lg h-12 pt-3 px-3 tracking-wide hover:text-cyan-500"
                                  activeClass="text-cyan-500">
                            <span>Admin</span>
                        </NuxtLink>
                    </div>
                </div>
            </nav>
        </div>
    </div>
</template>
