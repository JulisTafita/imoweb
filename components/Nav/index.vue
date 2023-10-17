<script setup>
import {ref} from 'vue';


const isActionFloatingButtonActive = ref(false);
const productsSaleCartShow = ref(false);

const actionFloatingButtonClick = () => {
    isActionFloatingButtonActive.value = !isActionFloatingButtonActive.value
}

const productsSaleOnMouseAction = (show = false) => {
    productsSaleCartShow.value = show
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
                    <span>Acheter/Louer</span>
                </NuxtLink>
            </div>
            <div class="h-[50px] w-full flex flex-row justify-center items-center border-b">
                <NuxtLink to="/contact"
                          prefetchedClass="mx-1 my-2 font-bold text-lg h-12 pt-3 px-3 tracking-wide hover:text-cyan-500"
                          activeClass="text-cyan-500">
                    <span>Contacts</span>
                </NuxtLink>
            </div>
        </div>

    </div>

    <div @click="actionFloatingButtonClick"
         class="fixed bottom-5 right-5 border-2 border-cyan-500 rounded-full w-14 h-14 md:invisible shadow-lg bg-white"
         style="z-index: 100">
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

    <div class="sticky top-0 border-b bg-white">
        <div class="max-w-[1200px] m-auto sm:w-screen">
            <nav class="flex flex-row justify-center items-center h-[10vh] sm:px-5">
                <div class="md:basis-1/4 flex flex-row h-full">
                    <NuxtLink to="/"
                              prefetchedClass="text-gray-800 text-xl font-bold md:text-2xl hover:text-gray-700">
                        <img class="h-20 w-40" src="/img/nativel_icon.jpg" alt="Discover Nuxt 3"/>
                    </NuxtLink>
                </div>
                <div class="md:basis-3/4 md:block hidden h-full">
                    <div class="flex flex-row justify-end gap-3 h-full w-full">
                        <div class="w-[115px] hover:border-cyan-500 border-white">
                            <NuxtLink to="/"
                                      prefetchedClass="hidden  md:flex flex-row justify-center items-center font-bold text-lg tracking-wide hover:text-cyan-500 w-full h-full"
                                      activeClass="text-cyan-500">
                                <span>Acceuil</span>
                            </NuxtLink>
                        </div>
                        <div class="w-[120px] border-b-4 hover:border-cyan-500 border-white"
                             @mouseenter="productsSaleOnMouseAction(true)"
                             @mouseleave="productsSaleOnMouseAction(false)">
                            <NuxtLink to="/products"
                                      prefetchedClass="hidden  md:flex flex-row justify-center items-center font-bold text-lg tracking-wide hover:text-cyan-500 w-full h-full"
                                      activeClass="text-cyan-500">
                                <span>Acheter/Louer</span>
                            </NuxtLink>
                        </div>
                        <div class="w-[115px] border-b-4 hover:border-cyan-500 border-white">
                            <NuxtLink to="/contact"
                                      prefetchedClass="hidden  md:flex flex-row justify-center items-center font-bold text-lg tracking-wide hover:text-cyan-500 w-full h-full"
                                      activeClass="text-cyan-500">
                                <span>Contacts</span>
                            </NuxtLink>
                        </div>
                        <div class="flex flex-row gap-2 justify-center items-center hover:text-cyan-500">
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                     class="bi bi-telephone-fill" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd"
                                          d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
                                </svg>
                            </div>
                            <NuxtLink to="/contact"
                                      prefetchedClass="hidden  md:flex flex-row justify-center items-center font-bold text-lg tracking-wide hover:text-cyan-500 w-full h-full  "
                                      activeClass="text-cyan-500">
                                <span>+261 38 81 335 89</span>
                            </NuxtLink>
                        </div>
                    </div>
                </div>
            </nav>
        </div>

        <div v-if="productsSaleCartShow"
             @mouseenter="productsSaleOnMouseAction(true)"
             @mouseleave="productsSaleOnMouseAction(false)"
             class="absolute top-2.3em left-1/3 z-100 bg-white  p-8 border border-cyan-500 rounded-lg divide-y divide-gray-100 shadow w-1/2 dark:bg-gray-700">
            <NavPopup/>
        </div>
    </div>
</template>
