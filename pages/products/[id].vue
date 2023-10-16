<template>
    <div>Single product with id {{ id, name }}</div>
</template>


<script setup>
    const { id, name } = useRoute().params
</script>