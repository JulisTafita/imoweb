<script setup>
import {ref} from 'vue';
import {refreshNuxtData} from "#app";

definePageMeta({
    layout: "admin",
});

const isAdminProductCard = ref(false);
const isAdminNewProductCard = ref(false);
const selectedProduct = ref({});


const showAdminProductCard = () => {
    isAdminProductCard.value = !isAdminProductCard.value
}

const showAdminNewProduct = () => {
    isAdminNewProductCard.value = !isAdminNewProductCard.value
}

const setSelectedProduct = (msg) => {
    selectedProduct.value = msg
}

const refreshPage = () => {
    refreshNuxtData();
    showAdminNewProduct();
}

const setSelectedProductAndShowAdminCard = (msg) => {
    console.log(selectedProduct)
    showAdminProductCard();
    setSelectedProduct(msg);
}

const deleteProduct = async (id = 0) => {
    await useFetch('/api/imo/delete', {
            headers: {"Content-type": "application/json"},
            method: 'POST',
            body: {
                "id": parseInt(id)
            }
        }
    )
    refreshNuxtData();
}

const {data: products} = await useFetch('/api/imo/fetch');


</script>


<template>
    <div v-if="isAdminProductCard">
        <AdminProductCard :selectedProduct="selectedProduct" @closed="showAdminProductCard"/>
    </div>
    <div v-if="isAdminNewProductCard">
        <AdminProductNew :selectedProduct="{}" @closed="refreshPage"/>
    </div>
    <div class="flex flex-col justify-center items-center">
        <div>
            <div>
                <div>
                    <br>
                    <div class="w-full py-2 flex flex-row justify-center px-5 text-center md:px-0 md:text-right">
                        <span class="">Product</span>
                    </div>
                    <div class=" flex flex-row justify-center items-center py-2">
                        <span class="border-b  border-slate-300 w-1/2 py-2"></span>
                    </div>
                    <br>
                </div>
                <div class="mb-5 text-right">
                    <button @click="showAdminNewProduct"
                            class="bg-red-300 px-3 py-2 rounded hover:bg-red-100 text-white">AJOUTER UNE NOUVELLE
                        CATEGORIE
                    </button>
                </div>
                <div class="w-full ">
                    <div class="relative  shadow-md sm:rounded-lg w-full">
                        <table
                            class="w-full text-sm text-left text-gray-500 dark:text-gray-400 ">
                            <thead
                                class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" class="px-6 py-3">
                                    #
                                </th>

                                <th scope="col" class="px-6 py-3">
                                    titre
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    reference
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    exclusif
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Nouveau
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Pièce
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Chambre
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Surface (m2)
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Prix ( Ar )
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Action
                                </th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr v-for="(product, index) in products"
                                class="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                                <th scope="row"
                                    class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    {{ product.id }}
                                </th>
                                <td class="px-6 py-4">
                                    {{ product.title }}
                                </td>
                                <td class="px-6 py-4">
                                    {{ product.reference }}
                                </td>
                                <td class="px-6 py-4">
                                    {{ product.is_exclusif }}
                                </td>
                                <td class="px-6 py-4">
                                    {{ product.is_new }}
                                </td>
                                <td class="px-6 py-4">
                                    {{ product.nb_piece }}
                                </td>
                                <td class="px-6 py-4">
                                    {{ product.nb_room }}
                                </td>

                                <td class="px-6 py-4">
                                    {{ product.surface }}
                                </td>
                                <td class="px-6 py-4">
                                    {{ product.price }}
                                </td>
                                <td class="px-6 py-4">
                                    <a @click="setSelectedProductAndShowAdminCard(product)"
                                       class="cursor-pointer font-medium text-blue-600 dark:text-blue-500 hover:underline px-3">Modifier</a>
                                    <a
                                        @click="deleteProduct(product.id)"
                                        class="cursor-pointer font-medium text-blue-600 dark:text-blue-500 hover:underline px-3">Supprimer</a>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div>
                    <br>
                    <div class="w-full py-2 flex flex-row justify-center px-5 text-center md:px-0 md:text-right">
                        <!--<span class="">Total : {{ categories.getCategories.length }}</span>-->
                    </div>
                    <div class=" flex flex-row justify-center items-center py-2">
                        <span class="border-b  border-slate-300 w-1/2 py-2"></span>
                    </div>
                    <br>
                </div>
            </div>
        </div>
    </div>
</template>