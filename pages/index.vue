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


const {data} = await useFetch('/api/product/one?id=245');


const mockProd = {
    id: 24,
    title: "The Coldest Sunset 5",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores e perferendis eaque, exercitationem praesentium nihi.",
    price: 2800,
    category: 0,
    forSale: false,
    forRent: false,
    NbPiece: 2,
    NbRoom: 3,
    TotArea: 20,
    TotLivableArea: 10,
    IsNew: false,
    builtOn: '2022-10-20 00:00:00',
    CoPropertyNbOfLots: 2,
    CoPropertyCost: 2804,
    AnnexParking: false,
    AnnexCave: false,
}

</script>

<template>
    <div>
        <div class="bg-cyan-100 p-8 md:p-[10vh] p-4 border-content">
            <div class="md:max-w-[1200px] max-w-screen md:m-auto">
                <div class="flex flex-col items-center justify-center h-1/2 ">
                    <div class="font-bold text-2xl md:text-6xl text-center py-2">
                        <span>Vous êtes au bon endroit pour trouver</span>
                        <br>
                        <span class="text-cyan-600 text-xl md:text-6xl">votre chez vous !</span>
                        <br>
                        <span class="font-light text-sm md:text-xl ">
                                On vous accompagne depuis plus de 20 ans dans vos recherches de lieu de vie.
                        </span>
                    </div>
                    <div class="relative mt-10">
                    </div>
                    <div
                        class="block w-auto md:w-[50vw] p-4 md:p-6 bg-white border border-gray-200 rounded-lg shadow-lg  dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                        <div class="hidden md:flex flex-row gap-5">
                            <div class="">Acheter</div>
                            <div>/</div>
                            <div class="">Louer</div>
                            <div>|</div>
                            <div class="relative inline-block text-left">
                                <div>
                                    <input @focusin="showTypeOfCityhDropDownState(true)"
                                           class="appearance-none bg-transparent w-80 text-center  mr-3 py-1 px-2 leading-tight focus:outline-none border-b-2"
                                           type="text" placeholder="Dans quelle ville ? " aria-label="type de ville">
                                </div>
                                <div v-if="typeOfCityDropDownState"
                                     @mouseenter="showTypeOfCityhDropDownState(true)"
                                     @mouseleave="showTypeOfCityhDropDownState(false)"
                                     class="absolute right-0 z-10 mt-2 w-full origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                                     role="menu" aria-orientation="vertical" aria-labelledby="menu-button"
                                     tabindex="-1">
                                    <div class="py-1" role="none">
                                        <NuxtLink v-for="(area,index) in typeOfCityList" to="/products/{{index}}"
                                                  prefetchedClass="cursor-pointer text-gray-700 block px-4 py-2 text-sm hover:bg-cyan-100/50"
                                                  activeClass="text-cyan-500">
                                            <span>{{ index + 1 }} - {{ area }} </span>
                                        </NuxtLink>
                                    </div>
                                </div>
                            </div>
                            <div>|</div>
                            <div class="relative inline-block text-left">
                                <div>
                                    <input @focusin="showTypeOfWealthDropDownState(true)"
                                           class="appearance-none bg-transparent w-80 text-center  mr-3 py-1 px-2 leading-tight focus:outline-none border-b-2"
                                           type="text" placeholder="Quelle type de bien ? " aria-label="type de bien">
                                </div>
                                <div v-if="typeOfWealthDropDownState"
                                     @mouseenter="showTypeOfWealthDropDownState(true)"
                                     @mouseleave="showTypeOfWealthDropDownState(false)"
                                     class="absolute right-0 z-10 mt-2 w-full origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                                     role="menu" aria-orientation="vertical" aria-labelledby="menu-button"
                                     tabindex="-1">
                                    <div class="py-1" role="none">
                                        <NuxtLink v-for="(area,index) in typeOfWealthList" to="/products/"
                                                  prefetchedClass="cursor-pointer text-gray-700 block px-4 py-2 text-sm hover:bg-cyan-100/50"
                                                  activeClass="text-cyan-500">
                                            <span>{{ index + 1 }} - {{ area }} </span>
                                        </NuxtLink>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="w-full text-center mt-0 md:mt-5">
                            <NuxtLink to="/products"
                                      prefetchedClass="underline flex flex-row justify-center items-center font-light text-sm tracking-wide hover:text-cyan-500 w-full h-full"
                                      activeClass="text-cyan-500">
                                <span>Parcourir notre vitrine -> </span>
                            </NuxtLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="py-[20px]">
        <div class="md:max-w-[1200px] max-w-screen md:m-auto">
            <div>
                <br>
                <div class="w-full py-2 flex flex-row justify-center px-5 text-center md:px-0 md:text-right">
                    <span class="">Appartement à vendre dans les alentours d'Antananarivo (5 annonces)</span>
                </div>
                <div class=" flex flex-row justify-center items-center py-2">
                    <span class="border-b  border-slate-300 w-1/2 py-2"></span>
                </div>
                <br>
                <div class="flex flex-row flex-wrap gap-0 md:gap-6 justify-center md:justify-start md:mt-5">
                    <div>
                        <Product :product="mockProd"/>
                    </div>
                    <div>
                        <Product :product="mockProd"/>
                    </div>
                    <div>
                        <Product :product="mockProd"/>
                    </div>
                </div>
                <div
                    class="w-full flex flex-row flex-wrap gap-0 md:gap-6 justify-center items-end px-0 md:px-2  md:justify-end mt-5 md:mt-5">
                    <div>
                        <NuxtLink to="/products"
                                  prefetchedClass="border px-5 py-2 rounded bg-red-200 flex flex-row justify-center items-center font-bold text-lg tracking-wide hover:text-white w-full h-full  "
                                  activeClass="text-white">
                            <span>Voir tout</span>
                        </NuxtLink>
                    </div>
                </div>
            </div>
            <br>
            <div>
                <br>
                <div class="w-full py-2 flex flex-row justify-center px-5 text-center md:px-0 md:text-right">
                    <span class="">Appartement à vendre dans les alentours d'Antananarivo (5 annonces)</span>
                </div>
                <div class=" flex flex-row justify-center items-center py-2">
                    <span class="border-b  border-slate-300 w-1/2 py-2"></span>
                </div>
                <br>
                <div class="flex flex-row flex-wrap gap-0 md:gap-6 justify-center md:justify-start md:mt-5">
                    <div>
                        <Product :product="mockProd"/>
                    </div>
                    <div>
                        <Product :product="mockProd"/>
                    </div>
                    <div>
                        <Product :product="mockProd"/>
                    </div>
                </div>
                <div
                    class="w-full flex flex-row flex-wrap gap-0 md:gap-6 justify-center items-end px-0 md:px-2  md:justify-end mt-5 md:mt-5">
                    <div>
                        <NuxtLink to="/products"
                                  prefetchedClass="border px-5 py-2 rounded bg-red-200 flex flex-row justify-center items-center font-bold text-lg tracking-wide hover:text-white w-full h-full  "
                                  activeClass="text-white">
                            <span>Voir tout</span>
                        </NuxtLink>
                    </div>
                </div>
            </div>
        </div>
    </div>


</template>