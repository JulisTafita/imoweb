<script setup>
import {ref} from 'vue';
import {onMounted} from "vue";

const isBuyRentHousePanel = ref(false);
const isLocationPanel = ref(false);
const isPriceShow = ref(false);
const isSurfaceShow = ref(false);
const isRoomShow = ref(false);
const isOtherShow = ref(false);


const prodsLength = ref(0)

const showBuyRentHousePanel = () => {
    isBuyRentHousePanel.value = !isBuyRentHousePanel.value
}

const showLocationPanel = () => {
    isLocationPanel.value = !isLocationPanel.value
}

const showPriceShow = () => {
    isPriceShow.value = !isPriceShow.value
}

const showSurfaceShow = () => {
    isSurfaceShow.value = !isSurfaceShow.value
}

const showRoom = () => {
    isRoomShow.value = !isRoomShow.value
}

const showOther = () => {
    isOtherShow.value = !isOtherShow.value
}


const
    {
        id
    }
        = useRoute().params


const availableProds = getMockProducts()

//let products = await getProducts()

const reloadProductsList = async () => {
//    products = await getProducts()
}

</script>

<template>

    <div>
        <div class="border-b-3 shadow-lg h-50">
            <div class="md:max-w-[1200px] w-screen max-w-screen md:m-auto">
                <div class="hidden md:flex flex-row gap-3 py-2">
                    <div class="relative">
                        <div @click="showBuyRentHousePanel">
                            <div
                                class="border border-black px-5 py-1 rounded-[20px] cursor-pointer hover:bg-cyan-500 hover:border-cyan-500 hover:text-white font-bold">
                                <div>
                                    <div class="flex flex-row gap-1 justify-start items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                             class="bi bi-dot w-10 h-10 text-red-600" viewBox="0 0 16 16">
                                            <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"/>
                                        </svg>
                                        <span>Acheter, Maison <span class="text-cyan-700">(+1)</span></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div v-if="isBuyRentHousePanel"
                             class="absolute right-0 mt-2 w-full origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                             role="menu" aria-orientation="vertical" aria-labelledby="menu-button"
                             tabindex="-1">
                            <div class="py-1" role="none">
                                <!--<a v-for="(area,index) in typeOfCityList" href="#"-->
                                <!--   class="text-gray-700 block px-4 py-2 text-sm hover:bg-cyan-100/50"-->
                                <!--   role="menuitem"-->
                                <!--   tabindex="-1" id="menu-item-0">{{ index + 1 }} - {{ area }}</a>-->
                            </div>
                        </div>
                    </div>
                    <div class="relative">
                        <div @click="showLocationPanel">
                            <div
                                class="border border-black px-5 py-1 rounded-[20px] cursor-pointer hover:bg-cyan-500 hover:border-cyan-500 hover:text-white font-bold">
                                <div>
                                    <div class="flex flex-row gap-1 justify-start items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                             class="bi bi-dot w-10 h-10 text-red-600" viewBox="0 0 16 16">
                                            <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"/>
                                        </svg>
                                        <span>Antananarivo <span class="text-cyan-700">(+1)</span></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div v-if="isLocationPanel"
                             class="absolute right-0 z-10 mt-2 w-[400px] origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                             role="menu" aria-orientation="vertical" aria-labelledby="menu-button"
                             tabindex="-1">
                            <div class="py-5" role="none">
                                <!--<a v-for="(area,index) in typeOfCityList" href="#"-->
                                <!--   class="text-gray-700 block px-4 py-2 text-sm hover:bg-cyan-100/50"-->
                                <!--   role="menuitem"-->
                                <!--   tabindex="-1" id="menu-item-0">{{ index + 1 }} - {{ area }}</a>-->
                                <div class="px-5">
                                      <div class="py-3">
                                          <span class="font-bold">Où cherchez-vous?</span>
                                      </div>
                                      <div>
                                           <div class="py-3">
                                                <select name="" id="" class="border w-full py-3 px-3">
                                                      <option value="exemple">Antananarivo</option>
                                                      <option value="exemple">Antananarivo</option>
                                                      <option value="exemple">Antananarivo</option>
                                                </select>
                                            </div>
                                           <div>
                                               <input type="text" placeholder="Ville,Code postal" class="border w-full py-3 px-3">
                                           </div>
                                      </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="relative">
                        <div @click="showPriceShow">
                            <div
                                class="border border-black px-5 py-1 rounded-[20px] cursor-pointer hover:bg-cyan-500 hover:border-cyan-500 hover:text-white font-bold">
                                <div>
                                    <div class="flex flex-row gap-1 justify-start items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                             class="bi bi-dot w-10 h-10 text-red-600" viewBox="0 0 16 16">
                                            <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"/>
                                        </svg>
                                        <span>Prix <span class="text-cyan-700">(+1)</span></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div v-if="isPriceShow"
                             class="absolute right-1/2 z-1 mt-2 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                             role="menu" aria-orientation="vertical" aria-labelledby="menu-button"
                             tabindex="-1">
                            <div class="py-1" role="none">
                                <div class="w-[500px] h-[220px]">
                                    <div class="flex flex-col gap-2 p-4 pb2">
                                        <div class="text-lg font-bold border-b">
                                            <span>Pour quel budget ( en Ar ) ?</span>
                                        </div>

                                        <div class="py-2 flex flex-row gap-4 w-full justify-center items-center">
                                            <div class="flex flex-col">
                                                <div>Min</div>
                                                <div>
                                                    <input class="border rounded-sm px-2 py-2" type="number"
                                                           placeholder="44" step="1000">
                                                </div>
                                            </div>
                                            <div class="flex flex-col">
                                                <div>Max</div>
                                                <div>
                                                    <input class="border rounded-sm px-2 py-2" type="number"
                                                           placeholder="44" step="1000">
                                                </div>
                                            </div>
                                        </div>

                                        <div class="text-lg font-bold border-t ">
                                            <div
                                                class="flex flex-row gap-3 w-full w-full mt-3 justify-center items-center ">
                                                <div class="underline cursor-pointer">Annuler</div>
                                                <div class="ml-auto">
                                                    <button type="button"
                                                            class="border cursor-pointer border-red-500 bg-red-500 text-white text-sm p-4 px-5 rounded-full">
                                                        Appliquer
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="relative">
                        <div @click="showSurfaceShow">
                            <div
                                class="border border-black px-5 py-1 rounded-[20px] cursor-pointer hover:bg-cyan-500 hover:border-cyan-500 hover:text-white font-bold">
                                <div>
                                    <div class="flex flex-row gap-1 justify-start items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                             class="bi bi-dot w-10 h-10 text-red-600" viewBox="0 0 16 16">
                                            <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"/>
                                        </svg>
                                        <span>Surfaces <span class="text-cyan-700">(+1)</span></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div v-if="isSurfaceShow"
                             class="absolute right-0 z-10 mt-2 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                             role="menu" aria-orientation="vertical" aria-labelledby="menu-button"
                             tabindex="-1">
                            <div class="py-1" role="none">
                                <div class="w-[500px] h-[480px]">
                                    <div class="flex flex-col gap-2 p-4 pb2">
                                        <div class="text-lg font-bold border-b">
                                            <span>Quelle surface habitable ?</span>
                                        </div>
                                        <br>
                                        <div class="py-2 flex flex-row gap-4 w-full justify-center items-center">
                                            <div class="flex flex-col">
                                                <div>Min</div>
                                                <div>
                                                    <input class="border rounded-sm px-2 py-2" type="number"
                                                           placeholder="1" step="1">
                                                </div>
                                            </div>
                                            <div class="flex flex-col">
                                                <div>Max</div>
                                                <div>
                                                    <input class="border rounded-sm px-2 py-2" type="number"
                                                           placeholder="2" step="1">
                                                </div>
                                            </div>
                                        </div>
                                        <br>
                                        <div class="text-lg font-bold border-b">
                                            <span>Surface du terrain ?</span>
                                        </div>
                                        <br>
                                        <div class="py-2 flex flex-row gap-4 w-full justify-center items-center">
                                            <div class="flex flex-col">
                                                <div>Min</div>
                                                <div>
                                                    <input class="border rounded-sm px-2 py-2" type="number"
                                                           placeholder="1" step="1">
                                                </div>
                                            </div>
                                            <div class="flex flex-col">
                                                <div>Max</div>
                                                <div>
                                                    <input class="border rounded-sm px-2 py-2" type="number"
                                                           placeholder="2" step="1">
                                                </div>
                                            </div>
                                        </div>
                                        <br>
                                        <div class="text-lg font-bold border-t ">
                                            <div
                                                class="flex flex-row gap-3 w-full w-full mt-3 justify-center items-center ">
                                                <div class="underline cursor-pointer">Annuler</div>
                                                <div class="ml-auto">
                                                    <button type="button"
                                                            class="border cursor-pointer border-red-500 bg-red-500 text-white text-sm p-4 px-5 rounded-full">
                                                        Appliquer
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="relative">
                        <div @click="showRoom">
                            <div
                                class="border border-black px-5 py-1 rounded-[20px] cursor-pointer hover:bg-cyan-500 hover:border-cyan-500 hover:text-white font-bold">
                                <div>
                                    <div class="flex flex-row gap-1 justify-start items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                             class="bi bi-dot w-10 h-10 text-red-600" viewBox="0 0 16 16">
                                            <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"/>
                                        </svg>
                                        <span>Pieces <span class="text-cyan-700">(+1)</span></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div v-if="isRoomShow"
                             class="absolute right-0 z-10 mt-2 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                             role="menu" aria-orientation="vertical" aria-labelledby="menu-button"
                             tabindex="-1">
                            <div class="py-1" role="none">
                                <div class="w-[500px] h-[220px]">
                                    <div class="flex flex-col gap-2 p-4 pb2">
                                        <div class="text-lg font-bold border-b">
                                            <span>Combien de pièces ?</span>
                                        </div>

                                        <div class="py-2 flex flex-row gap-4 w-full justify-center items-center">
                                            <div class="flex flex-col">
                                                <div>Min</div>
                                                <div>
                                                    <input class="border rounded-sm px-2 py-2" type="number"
                                                           placeholder="1" step="1">
                                                </div>
                                            </div>
                                            <div class="flex flex-col">
                                                <div>Max</div>
                                                <div>
                                                    <input class="border rounded-sm px-2 py-2" type="number"
                                                           placeholder="2" step="1">
                                                </div>
                                            </div>
                                        </div>

                                        <div class="text-lg font-bold border-t ">
                                            <div
                                                class="flex flex-row gap-3 w-full w-full mt-3 justify-center items-center ">
                                                <div class="underline cursor-pointer">Annuler</div>
                                                <div class="ml-auto">
                                                    <button type="button"
                                                            class="border cursor-pointer border-red-500 bg-red-500 text-white text-sm p-4 px-5 rounded-full">
                                                        Appliquer
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="relative">
                        <div @click="showOther">
                            <div
                                class="border px-5 py-1 rounded-[20px] cursor-pointer bg-cyan-500 border-cyan-500 hover:border-white hover:bg-white text-white font-bold hover:text-slate-500">
                                <div>
                                    <div class="flex flex-row gap-1 justify-start items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                             class="bi bi-dot w-10 h-10 text-red-600" viewBox="0 0 16 16">
                                            <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"/>
                                        </svg>
                                        <span>Autre <span class="text-cyan-700"> (+1)</span></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div v-if="isOtherShow"
                             class="absolute right-0 z-10 mt-2 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                             role="menu" aria-orientation="vertical" aria-labelledby="menu-button"
                             tabindex="-1">
                            <div class="py-1" role="none">
                                <div class="w-[500px] h-[700px]"> <!--   hauteur 220px-->
                                    <div class="flex flex-col gap-2 p-4 pb2">
                                        <div class="text-lg font-bold border-b">
                                            <span>Plus de critères</span>
                                        </div>
                                        <br>
                                        <div class="text-sm font-bold">
                                            <span>Type de projet</span>
                                        </div>
                                        <div class="py-2 flex flex-row gap-4 w-full justify-center items-center">
                                            <div class="flex flex-col">
                                                <div>Min</div>
                                                <div>
                                                    <input class="border rounded-sm p-2" type="number"
                                                           placeholder="1" step="1">
                                                </div>
                                            </div>
                                            <div class="flex flex-col">
                                                <div>Max</div>
                                                <div>
                                                    <input class="border rounded-sm px-2 py-2" type="number"
                                                           placeholder="2" step="1">
                                                </div>
                                            </div>
                                        </div>
                                          
                                         <!-- Recherche avancé-->
                                        <div>
                                             <div>
                                                   <div class="py-3">
                                                       <span class="font-bold">Une référence?</span>
                                                   </div>
                                                   <div>
                                                       <input type="text" placeholder="Ex:123456" class="w-full border py-3 px-3">
                                                   </div>
                                             </div>
                                             <div>
                                                  <div class="pt-4 pb-2">
                                                       <span class="font-bold">Programme neuf | Viager</span>
                                                  </div>
                                                  <div>
                                                       <div><input type="radio"><span class="px-3 text-gray-700 text-lg">Programme neuf</span></div>
                                                       <div><input type="radio"><span class="px-3 text-gray-700 text-lg">Viager</span></div>
                                                  </div>
                                             </div>
                                             <div>
                                                   <div >
                                                         <div class="py-5">
                                                            <span  class="font-bold">Vos envies</span>
                                                        </div>
                                                        <div class="overflow-scroll h-[200px] bg-gray-100 p-3">
                                                             <div class="items-center py-2"><input class="h-5 w-5" type="checkbox"><span class="p-3">Jardin, terrain</span></div>
                                                             <div class="items-center py-2"><input class="h-5 w-5" type="checkbox"><span class="p-3">Piscine</span></div>
                                                             <div class="items-center py-2"><input class="h-5 w-5" type="checkbox"><span class="p-3">Terrasse ou balcon</span></div>
                                                             <div class="items-center py-2"><input class="h-5 w-5" type="checkbox"><span class="p-3">Terrasse ou balcon</span></div>
                                                             <div class="items-center py-2"><input class="h-5 w-5" type="checkbox"><span class="p-3">Ascenseur</span></div>
                                                             <div class="items-center py-2"><input class="h-5 w-5" type="checkbox"><span class="p-3">Cheminée</span></div>
                                                        </div>
                                                   </div>
                                             </div>
                                        </div>

                                       <!--  <div class="text-lg font-bold border-t ">
                                            <div
                                                class="flex flex-row gap-3 w-full w-full mt-3 justify-center items-center ">
                                                <div class="underline cursor-pointer">Annuler</div>
                                                <div class="ml-auto">
                                                    <button type="button"
                                                            class="border cursor-pointer border-red-500 bg-red-500 text-white text-sm p-4 px-5 rounded-full">
                                                        Appliquer
                                                    </button>
                                                </div>
                                            </div>
                                        </div> -->
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
        <br>
        <div class="md:max-w-[1200px] w-screen max-w-screen md:m-auto">
            <div class="py-[20px]">
                <div class="flex flex-row flex-wrap">
                    <div class="w-full md:basis-1/2 border-l px-10">
                        <div class="text-lg">
                            <span class="font-bold">181 770 biens </span> en vente en Île-de-France
                        </div>
                        <br>
                    </div>
                    <div class="w-full md:basis-1/2 border-l px-10 ml-auto">
                        <div class="text-lg p-4">
                            <span class="font-bold">Filtre rapide: </span>
                        </div>
                        <div class="w-full flex flex-row flex-wrap gap-6 text-sm">
                            <div>
                                <label class="relative inline-flex items-center cursor-pointer">
                                    <input type="checkbox" value="" class="sr-only peer" checked>
                                    <div
                                        class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600">

                                    </div>
                                    <span class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">Annonces avec photos</span>
                                </label>
                            </div>
                            <div>
                                <label class="relative inline-flex items-center cursor-pointer">
                                    <input type="checkbox" value="" class="sr-only peer" checked>
                                    <div
                                        class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600">

                                    </div>
                                    <span
                                        class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">Exclusivités</span>
                                </label>
                            </div>
                            <div>
                                <label class="relative inline-flex items-center cursor-pointer">
                                    <input type="checkbox" value="" class="sr-only peer" checked>
                                    <div
                                        class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600">

                                    </div>
                                    <span
                                        class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">Dans ma région</span>
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <br>
                <div class="w-full py-2 flex flex-row justify-center px-5 text-center md:px-0 md:text-right">
                    <span class="">List des biens :</span>
                </div>
                <div class=" flex flex-row justify-center items-center py-2">
                    <span class="border-b  border-slate-300 w-1/2 py-2"></span>
                </div>
                <br>
                <div>
                    <!--<div v-if="products.getProducts.length > 0">-->
                    <div class="flex flex-row flex-wrap gap-0 md:gap-6 justify-center md:justify-start md:mt-5">
                        <div v-for="(pro,index) in availableProds.data">
                            <Product :product="pro"/>
                        </div>
                    </div>
                    <!--</div>-->
                    <!--<div v-if="products.getProducts.length === 0">-->
                    <div class="flex flex-row flex-wrap gap-0 md:gap-6 justify-center md:justify-start md:mt-5">
                        <div>
                            Pas de produit en vitrine !
                        </div>
                    </div>
                    <!--</div>-->
                </div>
            </div>
            <br><br>
            <div class="flex flex-row justify-center md:justify-end items-center py-2">
                <div>
                    <button @click="reloadProductsList" class="bg-red-400 py-2 px-10 text-white rounded-sm">
                        {{ (prodsLength > 0) ? 'Voir plus' : 'Recharger' }}
                    </button>
                </div>
            </div>
        </div>
    </div>

</template>


