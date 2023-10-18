<script setup>

const {data} = await useFetch('/api/contact/contact')

</script>

<template>
    <div class="md:max-w-[1200px] w-screen max-w-screen md:m-auto">
        <div>
            <div>
                <div>
                    <div class="py-[50px]">
                        <div class="text-center">
                            <span class="text-cyan-700 text-2xl font-bold">Vous souhaitez visitez la maison ?</span>
                        </div>
                        <div class="text-center py-2">
                            <span>Prenez rendez-vous avec l'agence.</span>
                        </div>
                    </div>
                    <div
                        class="md:flex flex-row flex-none justify-center items-center gap-4 md:gap-1 px-4 md:px-0">

                        <div class="w-full md:basis-1/2">

                            <div class="border rounded shadow p-10">
                                <div class="pb-5 text-center">
                                    <span class="font-bold text-2xl  font-sans">Agence immobilière l'Adresse L'ATELIER IMMOBILIER</span>
                                </div>
                                <div>
                                    <p class="text-sm">511 route St Joseph de Porterie <br>44300 <br>44300 NANTES</p>
                                </div>
                                <div class="py-2">
                                    <div class="py-2 flex flex-row flex-wrap gap-6">
                                        <p class="font-bold tracking-wider text-black">Transaction:</p>
                                        <p class="font-2xl text-cyan-700">{{ data.telephone }}</p>
                                    </div>
                                    <div class="py-2 flex flex-row flex-wrap gap-6">
                                        <p class="font-bold tracking-wider text-black">Email:</p>
                                        <p class="font-2xl text-cyan-700">{{ data.email }}</p>
                                    </div>
                                </div>
                                <div>
                                    <div class="py-5 flex flex-row justify-center">
                                        <button
                                            class="bg-cyan-700  tracking-wider rounded px-20 py-5 hover:bg-cyan-500">
                                            <span class=" text-white">Nos honoraires</span>
                                        </button>
                                    </div>
                                    <div class="py-5 flex flex-row justify-center">
                                        <button class="bg-cyan-700 tracking-wider rounded px-20 py-5 hover:bg-cyan-500">
                                            <span class="text-white ">Mentions légales</span>
                                        </button>
                                    </div>
                                </div>
                            </div>

                        </div>

                        <div class="w-full md:basis-1/2 mt-5 md:mt-0">
                            <div>
                                <div>
                                    <div class="px-10">
                                        <div>
                                            <form class="w-full max-w-lg">
                                                <div class="flex flex-wrap -mx-3 mb-6">
                                                    <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                                        <label
                                                            class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                                            for="grid-first-name">
                                                            First Name
                                                        </label>
                                                        <input
                                                            class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                                            id="grid-first-name" type="text" placeholder="Jane">
                                                        <p class="text-red-500 text-xs italic">Please fill out this
                                                            field.</p>
                                                    </div>
                                                    <div class="w-full md:w-1/2 px-3">
                                                        <label
                                                            class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                                            for="grid-last-name">
                                                            Last Name
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
                                                            Password
                                                        </label>
                                                        <input
                                                            class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                                            id="grid-password" type="password"
                                                            placeholder="******************">
                                                        <p class="text-gray-600 text-xs italic">Veuillez vous souvenir
                                                            de votre mot de
                                                            passe*</p>
                                                    </div>
                                                </div>
                                                <div>
                                                    <div>
                                                        <div>
                                                            <input type="checkbox" name="" id=""><span
                                                            class="px-2 text-sm">Je souhaite recevoir les annonces similaires ou suggestions personnalisées de la part du réseau l'Adresse.</span>
                                                        </div>
                                                        <div>
                                                            <input type="checkbox" name="" id=""><span
                                                            class="px-2 text-sm">En cochant la case ci-avant et en envoyant ce formulaire, vous acceptez que l'Adresse des Conseils Immobiliers traite les données personnelles que vous nous communiquez dans ce formulaire (notamment vos données d'identité, de contact et de commentaires libres). Les données saisies dans les champs ci-dessus nous sont nécessaires pour répondre à votre prise de contact et ne sont utilisées qu'à cette fin.Pour en savoir plus sur la gestion de vos données personnelles et pour exercer vos droits, vous êtes invités à consulter la Politique de protection des données de l'Adresse des Conseils Immobiliers.</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="flex flex-wrap -mx-3 mt-5">
                                                    <button type="submit"
                                                            class="w-full bg-slate-100  hover:bg-slate-200 py-2 rounded">
                                                        Envoyer le message
                                                    </button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    </div>
</template>

