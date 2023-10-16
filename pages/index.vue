<template>
    <div>
        <div class="bg-cyan-100 p-[10vh]">
            <div class="md:max-w-[1200px] sm:w-screen max-w-screen m-auto">
                <div class="flex flex-col items-center justify-center h-1/2 ">
                    <div class="font-bold text-6xl text-center py-2">
                        <span>Vous êtes au bon endroit pour trouver</span>
                        <br>
                        <span class="text-cyan-600">votre chez vous !</span>
                        <br>
                        <span class="font-light text-xl ">
                                On vous accompagne depuis plus de 20 ans dans vos recherches de lieu de vie.
                        </span>
                    </div>
                    <div class="relative mt-10">
                        <!--<a href="#"-->
                        <!--   class=" block max-w-sm p-6 bg-white border border-gray-200 shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">-->
                        <!--    <div class="flex flex-row gap-5">-->
                        <!--        <div class="">Acheter</div>-->
                        <!--        <div>|</div>-->
                        <!--        <div class="">Louer</div>-->
                        <!--    </div>-->
                        <!--</a>-->
                    </div>
                    <div
                        class="block w-[50vw]  p-6 bg-white border border-gray-200 rounded-lg shadow-lg  dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                        <div class="flex flex-row gap-5">
                            <div class="">Acheter</div>
                            <div>|</div>
                            <div class="">Louer</div>
                            <div>|</div>
                            <input
                                class="appearance-none bg-transparent w-80 text-center  mr-3 py-1 px-2 leading-tight focus:outline-none border-b-2"
                                type="text" placeholder="Dans quelle ville ? " aria-label="ville">
                            <div>|</div>
                            <input
                                class="appearance-none bg-transparent w-80 text-center  mr-3 py-1 px-2 leading-tight focus:outline-none border-b-2"
                                type="text" placeholder="Quelle type de bien ? " aria-label="type de bien">
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="p-4">
            <div class="flex flex-row gap-3">
                <product/>
            </div>
        </div>
    </div>
</template>