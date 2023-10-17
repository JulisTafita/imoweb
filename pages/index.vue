<script setup>
import {ref} from 'vue';

const typeOfWealthList = [
    "Maison",
    "Villa",
    "Appartement",
    "Terrain"
]

const typeOfCityList = [
    "Antananarivo", "Tamatave", "Antsirabé", "Fianarantsoa"
]

const
    typeOfWealthDropDownState = ref(false);

const
    typeOfCityDropDownState = ref(false);

const showTypeOfWealthDropDownState = (state = false) => {
    typeOfWealthDropDownState.value = state
}

const showTypeOfCityhDropDownState = (state = false) => {
    typeOfCityDropDownState.value = state
}


const {data} = await useFetch('/api/product/one?id=245')

const query = gql`
        query getProducts{
            getProducts{
                createdAt
                updatedAt
                deletedAt
                id
                title
                price
                category
                __typename
              }
        }`

const {result} = useQuery(query)

//export default defineEventHandler(async (event) => {
//
//    const query = gql`
//        query getProducts{
//            getProducts{
//                createdAt
//                updatedAt
//                deletedAt
//                id
//                title
//                price
//                category
//                __typename
//              }
//        }
//    `
//
//
//    const { result } = useQuery(query)
//
//    return {
//        products : result
//    }
//})

</script>


<template>

    <div>
        <div class="bg-cyan-100 p-8 md:p-[10vh]">
            <div class="md:max-w-[1200px] w-screen max-w-screen md:m-auto">
                <div class="flex flex-col items-center justify-center h-1/2 ">
                    <div class="font-bold text-6xl text-center py-2">
                        <span>Vous êtes au bon endroit pour trouver</span>
                        <br>
                        <span class="text-cyan-600">votre chez vous !</span>
                        <br>
                        <span class="font-light text-xl ">
                                On vous accompagne depuis plus de 20 ans dans vos recherches de lieu de vie.
                        </span>
                    </div>
                    <div class="relative mt-10">
                        <!--<a href="#"-->
                        <!--   class=" block max-w-sm p-6 bg-white border border-gray-200 shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">-->
                        <!--    <div class="flex flex-row gap-5">-->
                        <!--        <div class="">Acheter</div>-->
                        <!--        <div>|</div>-->
                        <!--        <div class="">Louer</div>-->
                        <!--    </div>-->
                        <!--</a>-->
                    </div>
                    <div
                        class="block w-[50vw]  p-6 bg-white border border-gray-200 rounded-lg shadow-lg  dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                        <div class="flex flex-row gap-5">
                            <div class="">Acheter</div>
                            <div>/</div>
                            <div class="">Louer</div>
                            <div>|</div>
                            <div class="relative inline-block text-left">
                                <div>
                                    <input @focusin="showTypeOfCityhDropDownState(true)"
                                           @focusout="showTypeOfCityhDropDownState(false)"
                                           class="appearance-none bg-transparent w-80 text-center  mr-3 py-1 px-2 leading-tight focus:outline-none border-b-2"
                                           type="text" placeholder="Dans quelle ville ? " aria-label="type de ville">
                                </div>
                                <div v-if="typeOfCityDropDownState"
                                     class="absolute right-0 z-10 mt-2 w-full origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                                     role="menu" aria-orientation="vertical" aria-labelledby="menu-button"
                                     tabindex="-1">
                                    <div class="py-1" role="none">
                                        <a v-for="(area,index) in typeOfCityList" href="#"
                                           class="text-gray-700 block px-4 py-2 text-sm hover:bg-cyan-100/50"
                                           role="menuitem"
                                           tabindex="-1" id="menu-item-0">{{ index + 1 }} - {{ area }}</a>
                                    </div>
                                </div>
                            </div>
                            <div>|</div>
                            <div class="relative inline-block text-left">
                                <div>
                                    <input @focusin="showTypeOfWealthDropDownState(true)"
                                           @focusout="showTypeOfWealthDropDownState(false)"
                                           class="appearance-none bg-transparent w-80 text-center  mr-3 py-1 px-2 leading-tight focus:outline-none border-b-2"
                                           type="text" placeholder="Quelle type de bien ? " aria-label="type de bien">
                                </div>
                                <div v-if="typeOfWealthDropDownState"
                                     class="absolute right-0 z-10 mt-2 w-full origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                                     role="menu" aria-orientation="vertical" aria-labelledby="menu-button"
                                     tabindex="-1">
                                    <div class="py-1" role="none">
                                        <a v-for="(area,index) in typeOfWealthList" href="#"
                                           class="text-gray-700 block px-4 py-2 text-sm hover:bg-cyan-100/50"
                                           role="menuitem"
                                           tabindex="-1" id="menu-item-0">{{ index + 1 }} - {{ area }}</a>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!--<div class="p-4">-->
        <!--    <div class="flex flex-row gap-3">-->
        <!--        <product/>-->
        <!--    </div>-->
        <!--</div>-->
    </div>

    <h5>{{ result }}</h5>


</template>