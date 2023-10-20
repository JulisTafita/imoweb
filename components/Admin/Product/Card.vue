<script setup>

const props = defineProps({
    selectedProduct: {
        required: true,
        type: Object
    }
})


const emit = defineEmits([
    "closed"
]);

const closed = () => {
    emit("closed", true)
}

const {selectedProduct} = props

const updateRecord = async () => {
    await useFetch('/api/imo/update', {
        headers: {"Content-type": "application/json"},
        method: 'POST',
        body: {
            "id": selectedProduct.id,
            "title": selectedProduct.title,
            "description": selectedProduct.description,
            "reference": selectedProduct.reference,
            "isExclusif": selectedProduct.is_exclusif,
            "isNew": selectedProduct.is_new,
            "nbPiece": selectedProduct.nb_piece,
            "nbRoom": selectedProduct.nb_room,
            "surface": selectedProduct.surface,
            "price": selectedProduct.price
        }
    })
    emit("closed", true)
}

</script>

<template>
    <div>
        <div class="absolute top-0 right-0 w-screen h-screen backdrop-blur-sm bg-white/30" style="z-index: 999">
            <div class="w-full h-full flex flex-row justify-center items-center">
                <div class="rounded overflow-hidden shadow-lg bg-white ">
                    <div class="w-full flex flex-row justify-center py-2 pb-[20px]">
                        <div class="font-bold text-lg">
                            <span> {{ selectedProduct.reference }}</span>
                        </div>
                    </div>
                    <div class="py-2">
                        <form class="w-full max-w-lg">
                            <div class="flex flex-row">
                                <div class="p-2">
                                    <div class="flex flex-wrap -mx-3 mb-6">
                                        <div class="w-full px-3">
                                            <label
                                                class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                                for="grid-last-name">
                                                Titre
                                            </label>
                                            <input
                                                class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                                id="grid-last-name" type="text" placeholder="Titre"
                                                v-model="selectedProduct.title">
                                        </div>
                                        <div class="w-full px-3 pt-7">
                                            <label
                                                class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                                for="grid-password">
                                                Surface (m2)
                                            </label>
                                            <input
                                                class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                                id="grid-password" type="text"
                                                placeholder="Surface" v-model="selectedProduct.surface">
                                        </div>
                                    </div>
                                    <div class="w-full">
                                        <label
                                            class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                            for="grid-last-name">
                                            Prix ( Ar )
                                        </label>
                                        <input
                                            class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                            id="grid-last-name" type="text" placeholder="prix"
                                            v-model="selectedProduct.price">
                                    </div>
                                </div>


                                <div>
                                    <div class="p-2 w-[254px]">
                                        <div class="flex flex-wrap -mx-3 mb-6">
                                            <div class="w-full  px-3  md:mb-0">
                                                <label
                                                    class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                                    for="grid-first-name">
                                                    Reference
                                                </label>
                                                <input
                                                    class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                                    id="grid-first-name" type="text" placeholder="Jane"
                                                    v-model="selectedProduct.reference">
                                            </div>
                                            <div class="w-full px-3 pt-6">
                                                <label
                                                    class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                                    for="grid-last-name">
                                                    Piece
                                                </label>
                                                <input
                                                    class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                                    id="grid-last-name" type="text" placeholder="Doe"
                                                    v-model="selectedProduct.nb_piece">
                                            </div>
                                        </div>
                                        <div class="flex flex-wrap -mx-3 ">
                                            <div class="w-full pt-[4px] px-4">
                                                <label
                                                    class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                                    for="grid-password">
                                                    Chambre
                                                </label>
                                                <input
                                                    class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                                    id="grid-password" type="text"
                                                    placeholder="Nombre de chambre" v-model="selectedProduct.nb_room">
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="flex flex-wrap -mx-3 mb-6">
                                <div class="w-full px-6 pt-4">
                                    <div class="w-full flex flex-row flex-wrap gap-6">
                                        <label class="relative inline-flex items-center cursor-pointer">
                                            <input type="checkbox" value="" class="sr-only peer"
                                                   v-model="selectedProduct.is_new">
                                            <div
                                                class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600">

                                            </div>
                                            <span class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">Nouveau</span>
                                        </label>
                                        <label class="relative inline-flex items-center cursor-pointer">
                                            <input type="checkbox" value="" class="sr-only peer"
                                                   v-model="selectedProduct.is_exclusif">
                                            <div
                                                class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600">

                                            </div>
                                            <span class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">Exclusif</span>
                                        </label>
                                    </div>
                                </div>
                                <div class="w-full px-6 pt-4">
                                    <label
                                        class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                        for="grid-password">
                                        Description
                                    </label>
                                    <textarea class="w-full h-40 border"
                                              v-model="selectedProduct.description"></textarea>
                                </div>
                            </div>


                            <div class="flex flex-wrap -mx-3 my-5 gap-2 justify-center items-center">
                                <button @click.prevent="updateRecord"
                                        class=" bg-slate-100  hover:bg-slate-200 py-2 px-10 rounded ">
                                    Mettre à jour
                                </button>
                                <button @click="closed"
                                        class=" bg-slate-100  hover:bg-slate-200 py-2 px-10 rounded ">
                                    Fermer le modal
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>


</template>