<script setup>
definePageMeta({
    layout: "admin",
});

const categories = await getCategories();


const delCategory = (number = 0) => {
    const deleted = deleteCategory(number)
    console.log(deleted)
}

</script>


<template>
    <div class="flex flex-col justify-center items-center">
        <div>
            <div>
                <div>
                    <br>
                    <div class="w-full py-2 flex flex-row justify-center px-5 text-center md:px-0 md:text-right">
                        <span class="">Catégories</span>
                    </div>
                    <div class=" flex flex-row justify-center items-center py-2">
                        <span class="border-b  border-slate-300 w-1/2 py-2"></span>
                    </div>
                    <br>
                </div>
                <div class="mb-5 text-right">
                    <button class="bg-red-300 px-3 py-2 rounded hover:bg-red-100 text-white">AJOUTER UNE NOUVELLE
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
                                    name
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    description
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Action
                                </th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr v-for="(cat, index) in categories.getCategories"
                                class="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                                <th scope="row"
                                    class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    {{ cat.number }}
                                </th>
                                <td class="px-6 py-4">
                                    {{ cat.name }}
                                </td>
                                <td class="px-6 py-4">
                                    {{ cat.description }}
                                </td>
                                <td class="px-6 py-4">
                                    <a href="#"
                                       class="font-medium text-blue-600 dark:text-blue-500 hover:underline px-3">Modifier</a>
                                    <a @click="delCategory(cat.number)"
                                       class="font-medium text-blue-600 dark:text-blue-500 hover:underline px-3">Supprimer</a>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div>
                    <br>
                    <div class="w-full py-2 flex flex-row justify-center px-5 text-center md:px-0 md:text-right">
                        <span class="">Total : {{ categories.getCategories.length }}</span>
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