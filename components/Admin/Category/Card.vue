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

const {selectedMessage} = props


</script>

<template>

    <div>
        <div class="absolute top-0 right-0 w-screen h-screen backdrop-blur-sm bg-white/30" style="z-index: 999">
            <div class="w-full h-full flex flex-row justify-center items-center">
                <div class="rounded overflow-hidden shadow-lg bg-white">
                    <div class="w-full flex flex-row justify-center py-2 pb-[20px]">
                        <div class="font-bold text-lg">
                            <span>Message #{{ selectedMessage.id }}</span>
                        </div>
                    </div>
                    <div class="py-2 px-10">
                        <form class="w-full max-w-lg">
                            <div class="flex flex-wrap -mx-3 mb-6">
                                <div class="w-full  px-3 mb-6 md:mb-0">
                                    <label
                                        class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                        for="grid-first-name">
                                        Nom et prénom
                                    </label>
                                    <input
                                        class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                        id="grid-first-name" type="text" placeholder="Jane"
                                        :value="selectedMessage.name + ' ' + selectedMessage.firstName">
                                    <p class="text-red-500 text-xs italic">Please fill out this
                                        field.</p>
                                </div>
                                <div class="w-full px-3">
                                    <label
                                        class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                        for="grid-last-name">
                                        Email
                                    </label>
                                    <input
                                        class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                        id="grid-last-name" type="text" placeholder="Doe">
                                </div>
                            </div>
                            <div class="flex flex-wrap -mx-3 mb-6">
                                <div class="w-full px-3">
                                    <label
                                        class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                        for="grid-password">
                                        Description
                                    </label>
                                    <input
                                        class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                        id="grid-password" type="password"
                                        placeholder="Description">
                                </div>
                            </div>
                            <div class="flex flex-wrap -mx-3 my-5 gap-2 justify-center items-center">
                                <button type="submit"
                                        class=" bg-slate-100  hover:bg-slate-200 py-2 px-10 rounded ">
                                    Envoyer le message
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