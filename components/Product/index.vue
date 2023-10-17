<script setup lang="ts">

const props = defineProps({
    product: {
        type: Object,
        required: true,
    }
});

const {product} = props;

</script>

<template>
    <div class="cursor-pointer bg-white" @click="navigateTo('/products/1')">
        <div class="max-w-sm max-h-[510px] rounded-sm overflow-hidden shadow-xl">
            <img class="w-full" src="/img/imo_1.jpeg" alt="Sunset in the mountains">
            <div class="px-6 pt-4 max-h-60 text-ellipsis">
                <div class="font-light text-xl mb-2">{{ product.title }}</div>
            </div>
            <div class=" px-6 text-sm flex flex-row flex-wrap justify-start items-center gap-3">
                <div>
                    <span
                        class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Antananarivo</span>
                    <span
                        class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#3 chambres</span>
                    <span
                        class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#6 Pièces</span>
                </div>
            </div>

            <div class="px-6 pt-4 max-h-60 text-ellipsis">
                <div class="font-light text-sm mb-1 max-h-60">{{ product.description }}</div>
            </div>

            <div class="px-6 pt-4 pb-2 hover:underline">
                <span class="font-bold">2 000 000 Ar</span>
            </div>
        </div>
    </div>
</template>