<script setup>
import {ref} from 'vue';

const isNewCategoryPanelShow = ref(false)


const newCategoryName = ref("NEW-CAT")
const newCategoryDescription = ref("NEW-CAT DESC")
const showNewCategory = (id = 0, name = "", description = "") => {
    isNewCategoryPanelShow.value = !isNewCategoryPanelShow.value
    if (id === 0) {
        newCategoryName.value = "NEW-CAT"
        newCategoryDescription.value = "NEW-CAT-DES"
    } else {
        newCategoryName.value = name
        newCategoryDescription.value = description
    }
}

const categories = getCategories()


const test = () => {
    console.log(newCategoryName.value, newCategoryDescription.value)
}


</script>

<template>

    <div v-if="isNewCategoryPanelShow">
        <div class="absolute top-0 right-0 w-screen h-screen" style="z-index: 999">
            <div class="flex flex-row w-full h-full justify-center items-center">

                <div
                    class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <a href="#">
                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white border-b py-2">
                            Ajouter une
                            nouvelle categorie</h5>
                    </a>
                    <br>
                    <form class="space-y-4 md:space-y-6" action="#">
                        <div>
                            <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Votre
                                Nom de la categorie :</label>
                            <input v-model="newCategoryName" type="text" name="name" id="name"
                                   class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg
                            focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700
                            dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500
                            dark:focus:border-blue-500"
                                   placeholder="" required="">
                        </div>
                        <div>
                            <label for="description"
                                   class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">description
                                :</label>
                            <input v-model="newCategoryDescription" type="text" name="description" id="description"
                                   placeholder=""
                                   class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                   required="">
                        </div>

                        <br>

                        <div class="flex w-full justify-center items-center">
                            <a @click.prevent="test" type="submit"
                               class="cursor-pointer inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                Ajouter
                            </a>

                            <a @click="showNewCategory"
                               class="ml-4 cursor-pointer inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                Annuler
                            </a>
                        </div>
                    </form>

                </div>

            </div>
        </div>
    </div>

    <div>
        <div>
            <div class="w-full h-30 bg-gray flex flex-row justify-end px-8 py-2">
                <button @click="showNewCategory" type="button"
                        class="px-10 py-2 bg-red-200 rounded text-white cursor-pointer">
                    Ajouter une nouvelle categorie
                </button>
            </div>
        </div>
        <div class="py-2">
            <div class="relative overflow-x-auto max-h-[800px] overflow-y ">
                <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" class="px-6 py-3">
                            Numéro
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Nom
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Description
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Actions
                        </th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr v-for="(category, index) in categories.getCategories"
                        class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            {{ category.number }}
                        </th>
                        <td class="px-6 py-4">
                            {{ category.name }}

                        </td>
                        <td class="px-6 py-4">
                            {{ category.description }}
                        </td>
                        <td class="px-6 py-4">
                            <div class="flex flex-row w-10 h-full justify-start items-center gap-3">
                                <button @click="showNewCategory(category.id,category.name,category.description)"
                                        type="button"
                                        class="px-2 py-2 bg-lime-300 rounded text-white cursor-pointer">
                                    Modifier
                                </button>
                                <button type="button"
                                        class="px-2 py-2 bg-red-200 rounded text-white cursor-pointer">
                                    Supprimer
                                </button>
                            </div>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>

</template>