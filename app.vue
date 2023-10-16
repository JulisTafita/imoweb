<template>
    <div class="h-screen">
        <div v-if="loading">

            <LoaderPage/>

        </div>

        <div v-if="!loading">
            <NuxtLayout>
                <NuxtPage/>
            </NuxtLayout>
        </div>
    </div>
</template>


<script setup lang="ts">
const nuxtApp = useNuxtApp();
const loading = ref(false);
nuxtApp.hook("page:start", () => {
    loading.value = true;
});
nuxtApp.hook("page:finish", () => {
    setTimeout(() => {
        loading.value = false;
    }, 200)
});
</script>