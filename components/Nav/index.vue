<template>
    <div class="max-w-[1200px] m-auto sm:w-screen mb-5">
        <nav class="flex flex-row justify-center items-center">
            <div class="basis-1/4 flex flex-row">
                <NuxtLink to="/"
                          prefetchedClass="text-gray-800 text-xl font-bold md:text-2xl hover:text-gray-700">
                    <img class="h-20 w-40" src="/img/nativel_icon.jpg" alt="Discover Nuxt 3"/>
                </NuxtLink>
            </div>
            <div class="basis-3/4 ">
                <div class="flex flex-row justify-end">
                    <NuxtLink to="/"
                              prefetchedClass="lg:mx-1 my-2 lg:block hidden font-bold text-lg h-12 pt-3 px-3 tracking-wide"
                              activeClass="text-cyan-500">
                        <span>Acceuil</span>
                    </NuxtLink>
                    <NuxtLink to="/products"
                              prefetchedClass="lg:mx-1 my-2 lg:block hidden font-bold text-lg h-12 pt-3 px-3 tracking-wide"
                              activeClass="text-cyan-500">
                        <span>Acheter</span>
                    </NuxtLink>
                    <NuxtLink to="/products"
                              prefetchedClass="lg:mx-1 my-2 lg:block hidden font-bold text-lg h-12 pt-3 px-3 tracking-wide"
                              activeClass="text-cyan-500">
                        <span>Louer</span>
                    </NuxtLink>
                    <NuxtLink to="/products"
                              prefetchedClass="lg:mx-1 my-2 lg:block hidden font-bold text-lg h-12 pt-3 px-3 tracking-wide"
                              activeClass="text-cyan-500">
                        <span>Nous contacter</span>
                    </NuxtLink>
                    <NuxtLink to="/admin"
                              prefetchedClass="lg:mx-1 my-2 lg:block hidden font-bold text-lg h-12 pt-3 px-3 tracking-wide"
                              activeClass="text-cyan-500">
                        <span>Admin</span>
                    </NuxtLink>
                </div>
            </div>
        </nav>
    </div>
</template>
