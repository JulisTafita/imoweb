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
            <div class="h-[80vh]">
                <div class="h-[60vh] bg-slate-100 cursor-pointer w-full overflow-y-auto">
                    <div class="h-full">
                        <div class="flex flex-col h-full">
                            <div class="h-full">
                                <div class="inline-block w-full">
                                    <div class="w-full">
                                        <table class="w-full text-left text-sm font-light">
                                            <thead
                                                class="sticky top-0 border-b font-medium dark:border-neutral-500 bg-white">
                                            <tr>
                                                <th scope="col" class="px-6 py-4 ">#</th>
                                                <th scope="col" class="px-6 py-4 ">Nom</th>
                                                <th scope="col" class="px-6 py-4 ">description</th>
                                                <th scope="col" class="px-6 py-4 ">action</th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            <tr v-for="(prod, index) in categories.getCategories"
                                                class="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600">
                                                <td class="whitespace-nowrap px-6 py-4 font-medium">{{
                                                        prod.number
                                                    }}
                                                </td>
                                                <td class="whitespace-nowrap px-6 py-4">{{ prod.name }}</td>
                                                <td class="whitespace-nowrap px-6 py-4">{{ prod.description }}</td>
                                                <td class="whitespace-nowrap px-6 py-4">
                                                    <div class="w-full flex flex-row gap-3">
                                                        <button type="button"
                                                                @click="showNewCategory(prod.number,prod.name,prod.description)"
                                                                class="hover:underline">Modifier
                                                        </button>
                                                        <button class="hover:underline">Supprimer</button>
                                                    </div>
                                                </td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div class="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6">
                        <div class="flex flex-1 justify-between sm:hidden">
                            <a href="#"
                               class="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">Previous</a>
                            <a href="#"
                               class="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">Next</a>
                        </div>
                        <div class="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
                            <div>
                                <p class="text-sm text-gray-700">
                                    Showing
                                    <span class="font-medium">1</span>
                                    to
                                    <span class="font-medium">10</span>
                                    of
                                    <span class="font-medium">97</span>
                                    results
                                </p>
                            </div>
                            <div>
                                <nav class="isolate inline-flex -space-x-px rounded-md shadow-sm"
                                     aria-label="Pagination">
                                    <a href="#"
                                       class="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0">
                                        <span class="sr-only">Previous</span>
                                        <svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                            <path fill-rule="evenodd"
                                                  d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z"
                                                  clip-rule="evenodd"/>
                                        </svg>
                                    </a>
                                    <!-- Current: "z-10 bg-indigo-600 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600", Default: "text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:outline-offset-0" -->
                                    <a href="#" aria-current="page"
                                       class="relative z-10 inline-flex items-center bg-indigo-600 px-4 py-2 text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">1</a>
                                    <a href="#"
                                       class="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0">2</a>
                                    <a href="#"
                                       class="relative hidden items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 md:inline-flex">3</a>
                                    <span
                                        class="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-700 ring-1 ring-inset ring-gray-300 focus:outline-offset-0">...</span>
                                    <a href="#"
                                       class="relative hidden items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 md:inline-flex">8</a>
                                    <a href="#"
                                       class="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0">9</a>
                                    <a href="#"
                                       class="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0">10</a>
                                    <a href="#"
                                       class="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0">
                                        <span class="sr-only">Next</span>
                                        <svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                            <path fill-rule="evenodd"
                                                  d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                                                  clip-rule="evenodd"/>
                                        </svg>
                                    </a>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>