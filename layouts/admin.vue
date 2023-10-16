<template>
    <div class="min-h-screen flex flex-row flex-auto flex-shrink-0 antialiased bg-gray-50 text-gray-800">
        <div class="flex flex-col basis-1/6 bg-white h-screen border-r">
            <AdminSideBar/>
        </div>

        <div class="bases-3/4">
            <slot></slot>
        </div>
    </div>
</template>