<script setup>
import {ref} from 'vue';

definePageMeta({
    layout: "admin",
});

const isAdminMessageCard = ref(false);
const selectedMessage = ref({});


const showAdminMessageCard = () => {
    isAdminMessageCard.value = !isAdminMessageCard.value
}

const setSelectedMessage = (msg) => {
    selectedMessage.value = msg
}

const setSelectedMsgAndShowAdminCard = (msg) => {
    showAdminMessageCard();
    setSelectedMessage(msg);
}

const {data: messages} = await useFetch('/api/message/fetch')

const removeMsg = async (index = 0) => {
    messages.value.splice(index, 1)
}

</script>

<template>
    <div v-if="isAdminMessageCard">
        <!--<AdminMessageCard/>-->
        <AdminMessageCard :selectedMessage="selectedMessage" @closed="showAdminMessageCard"/>
    </div>

    <div class="flex flex-col justify-center items-center">
        <div>
            <div>
                <div>
                    <br>
                    <div class="w-full py-2 flex flex-row justify-center px-5 text-center md:px-0 md:text-right">
                        <span class="">Messages</span>
                    </div>
                    <div class=" flex flex-row justify-center items-center py-2">
                        <span class="border-b  border-slate-300 w-1/2 py-2"></span>
                    </div>
                    <br>
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
                                    name & prénom
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Contenu du message
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Action
                                </th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr v-for=" (msg, index ) in messages"
                                class="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                                <th scope="row"
                                    class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    {{ msg.id }}
                                </th>
                                <td class="px-6 py-4">
                                    {{ msg.name }} {{ msg.firstName }}
                                </td>
                                <td class="px-6 py-4">
                                    {{ msg.message }}
                                </td>
                                <td class="px-6 py-4">
                                    <a @click="setSelectedMsgAndShowAdminCard(msg)"
                                       class="cursor-pointer font-medium text-blue-600 dark:text-blue-500 hover:underline px-3">Modifier</a>
                                    <a @click="removeMsg(index)"
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
                        <span class="">Total : {{ messages.length }} </span>
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