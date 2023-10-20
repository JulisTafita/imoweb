<script setup>

const route = useRoute();
const id = route.params.id

const {data: product} = await useFetch('/api/imo/one', {
    headers: {"Content-type": "application/json"},
    method: 'POST',
    body: {
        "id": parseInt(id)
    }
});


</script>

<template>
    <div>
        <div v-if="product">
            <div>
                <div>
                    <div class="md:max-w-[1200px] w-screen max-w-screen md:m-auto">
                        <div class="py-0 md:py-[20px]">
                            <div class="flex flex-row flex-wrap w-full py-0 md:py-2">
                                <div class="w-full md:basis-1/2">
                                    <div>
                                        <div class="bg-cyan-200 h-[600px]"></div>
                                    </div>
                                    <div>
                                        <div class="basis-1/2 p-5">
                                            <h1 class="font-bold text-4xl">{{ product.title }}</h1><br><br>
                                            <p class="texr-[gray] text-xl"> {{ product.nb_piece }} pièce(s) | {{
                                                    product.surface
                                                }} m2 - Saint Joseph de Porterie </p>
                                            <br><br>
                                            <p class="texr-[gray] text-xl">{{ product.description }}</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="w-full md:basis-1/2">
                                    <div class="w-full bg-white px-2 md:px-10">
                                        <div>
                                            <div>
                                                <div class="w-full flex flex-row justify-start items-center">
                                                    <NuxtLink to="/"
                                                              prefetchedClass="cursor-pointer shadow-lg px-10 py-[10px] rounded-lg hover:bg-cyan-700 hover:text-white"
                                                              activeClass="text-cyan-500">
                                                        <span class="text-sm">Revenir aux resultats</span>
                                                    </NuxtLink>
                                                </div>

                                                <div class="py-[30px]">
                                                    <div>
                                                        <p class="text-cyan-700 font-bold text-sm text-center md:text-left">
                                                            <span>Réf. de l'annonce: {{ product.reference }}</span>
                                                        </p>
                                                    </div>
                                                    <div class="py-2">
                                                        <div
                                                            class="flex flex-row justify-center md:justify-start  gap-2">
                                                            <div v-if="product.is_exclusif"
                                                                 class="bg-red-400 text-white  rounded-md text-center py-1 px-2">
                                                                <span>Exclusif</span>
                                                            </div>
                                                            <div v-if="product.is_new"
                                                                 class="bg-red-400 text-white text-center py-1 px-2 rounded-md text-center">
                                                                <span>Nouveau</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div>
                                                            <div class="py-2 md:py-0">
                                                                <div
                                                                    class="text-4xl font-bold py-2 text-center md:text-left">
                                                                    <span v-if="product.type !== 1">Vente maison </span>
                                                                    <span
                                                                        v-if="product.type === 1">Maison à louer </span>
                                                                </div>
                                                                <div class="text-xl pb2 text-center md:text-left"></div>
                                                            </div>
                                                            <div>
                                                                <div class="text-[gray] ">
                                                                    <div>
                                                                        <span class="font-600">Honoraires à la charge de l'acquéreur :</span>
                                                                    </div>
                                                                    <div
                                                                        class="border-l-2  border-slate-500 pl-[20px] py-2">
                                                                        <span> {{ product.price }} Ar | honoraires inclus </span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="py-5">
                                                                <p class="text-cyan-700 text-4xl font-bold">
                                                                    {{ product.price }} Ar
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <div class="flex">
                                                            <button
                                                                class="bg-[#008890] text-white rounded-lg text-xl tracking-wider font-bold h-[60px] w-[200px]">
                                                                Contacter l'Adresse
                                                            </button>
                                                            <button
                                                                class="text-black rounded-lg text-xl tracking-wider font-bold h-[60px] w-[200px]">
                                                                Déposer un
                                                                dossier
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <div>
                                    <div>
                                        <div class="shadow-lg rounded-sm py-2 px-10 ">
                                            <div>
                                                <div
                                                    class="text-cyan-700 text-xl text-center font-bold tracking-wider py-2">
                                                    <span>Caractéristiques Maison</span>
                                                </div>
                                            </div>
                                            <div>
                                                <div>
                                                    <div
                                                        class="border-l border-zinc-500 bg-zinc-200 rounded-sm m-2 pl-2 pt-[11px] h-[50px]">
                                                        <span>Les essentiels</span>
                                                    </div>
                                                    <div class="px-10 py-[20px]">
                                                        <div class="flex flex-row flex-wrap gap-6">
                                                            <div
                                                                class="flex flex-row gap-2 justify-center items-center">
                                                                <div>
                                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16"
                                                                         height="16"
                                                                         fill="currentColor" class="bi bi-dot"
                                                                         viewBox="0 0 16 16">
                                                                        <path
                                                                            d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"/>
                                                                    </svg>
                                                                </div>
                                                                <div>
                                                                    <span>{{ product.nb_piece }} pièces</span>
                                                                </div>
                                                            </div>
                                                            <div
                                                                class="flex flex-row gap-2 justify-center items-center">
                                                                <div>
                                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16"
                                                                         height="16"
                                                                         fill="currentColor" class="bi bi-dot"
                                                                         viewBox="0 0 16 16">
                                                                        <path
                                                                            d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"/>
                                                                    </svg>
                                                                </div>
                                                                <div>
                                                                    <span> {{ product.surface }} m²</span>
                                                                </div>
                                                            </div>
                                                            <div
                                                                class="flex flex-row gap-2 justify-center items-center">
                                                                <div>
                                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16"
                                                                         height="16"
                                                                         fill="currentColor" class="bi bi-dot"
                                                                         viewBox="0 0 16 16">
                                                                        <path
                                                                            d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"/>
                                                                    </svg>
                                                                </div>
                                                                <div>
                                                                    <span>{{ product.nb_room }} chambres</span>
                                                                </div>
                                                            </div>
                                                            <div
                                                                class="flex flex-row gap-2 justify-center items-center">
                                                                <div>
                                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16"
                                                                         height="16"
                                                                         fill="currentColor" class="bi bi-dot"
                                                                         viewBox="0 0 16 16">
                                                                        <path
                                                                            d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"/>
                                                                    </svg>
                                                                </div>
                                                                <div>
                                                                    <span>Accès PMR : Non</span>
                                                                </div>
                                                            </div>
                                                            <div
                                                                class="flex flex-row gap-2 justify-center items-center">
                                                                <div>
                                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16"
                                                                         height="16"
                                                                         fill="currentColor" class="bi bi-dot"
                                                                         viewBox="0 0 16 16">
                                                                        <path
                                                                            d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"/>
                                                                    </svg>
                                                                </div>
                                                                <div>
                                                                    <span>1 salle de bain</span>
                                                                </div>
                                                            </div>
                                                            <div
                                                                class="flex flex-row gap-2 justify-center items-center">
                                                                <div>
                                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16"
                                                                         height="16"
                                                                         fill="currentColor" class="bi bi-dot"
                                                                         viewBox="0 0 16 16">
                                                                        <path
                                                                            d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"/>
                                                                    </svg>
                                                                </div>
                                                                <div>
                                                                    <span>1 salle d'eau</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div>
                                                    <div
                                                        class="border-l border-zinc-500 bg-zinc-200 rounded-sm m-2 pl-2 pt-[11px] h-[50px]">
                                                        <span>Interieure</span>
                                                    </div>
                                                    <div class="px-10 py-[20px]">
                                                        <div class="flex flex-row flex-wrap gap-6">
                                                            <div
                                                                class="flex flex-row gap-2 justify-center items-center">
                                                                <div>
                                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16"
                                                                         height="16"
                                                                         fill="currentColor" class="bi bi-dot"
                                                                         viewBox="0 0 16 16">
                                                                        <path
                                                                            d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"/>
                                                                    </svg>
                                                                </div>
                                                                <div>
                                                                    <span> Cuisine Amenagee Equipée </span>
                                                                </div>
                                                            </div>
                                                            <div
                                                                class="flex flex-row gap-2 justify-center items-center">
                                                                <div>
                                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16"
                                                                         height="16"
                                                                         fill="currentColor" class="bi bi-dot"
                                                                         viewBox="0 0 16 16">
                                                                        <path
                                                                            d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"/>
                                                                    </svg>
                                                                </div>
                                                                <div>
                                                                    <span>Gardien : Non</span>
                                                                </div>
                                                            </div>
                                                            <div
                                                                class="flex flex-row gap-2 justify-center items-center">
                                                                <div>
                                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16"
                                                                         height="16"
                                                                         fill="currentColor" class="bi bi-dot"
                                                                         viewBox="0 0 16 16">
                                                                        <path
                                                                            d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"/>
                                                                    </svg>
                                                                </div>
                                                                <div>
                                                                    <span>Interphone : Oui</span>
                                                                </div>
                                                            </div>
                                                            <div
                                                                class="flex flex-row gap-2 justify-center items-center">
                                                                <div>
                                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16"
                                                                         height="16"
                                                                         fill="currentColor" class="bi bi-dot"
                                                                         viewBox="0 0 16 16">
                                                                        <path
                                                                            d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"/>
                                                                    </svg>
                                                                </div>
                                                                <div>
                                                                    <span>Digicode : Non</span>
                                                                </div>
                                                            </div>
                                                            <div
                                                                class="flex flex-row gap-2 justify-center items-center">
                                                                <div>
                                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16"
                                                                         height="16"
                                                                         fill="currentColor" class="bi bi-dot"
                                                                         viewBox="0 0 16 16">
                                                                        <path
                                                                            d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"/>
                                                                    </svg>
                                                                </div>
                                                                <div>
                                                                    <span>Visiophone : Non</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div>
                                                    <div
                                                        class="border-l border-zinc-500 bg-zinc-200 rounded-sm m-2 pl-2 pt-[11px] h-[50px]">
                                                        <span>Extérieure</span>
                                                    </div>
                                                    <div class="px-10 py-[20px]">
                                                        <div class="flex flex-row flex-wrap gap-6">
                                                            <div
                                                                class="flex flex-row gap-2 justify-center items-center">
                                                                <div>
                                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16"
                                                                         height="16"
                                                                         fill="currentColor" class="bi bi-dot"
                                                                         viewBox="0 0 16 16">
                                                                        <path
                                                                            d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"/>
                                                                    </svg>
                                                                </div>
                                                                <div>
                                                                    <span> Cuisine Amenagee Equipée </span>
                                                                </div>
                                                            </div>
                                                            <div
                                                                class="flex flex-row gap-2 justify-center items-center">
                                                                <div>
                                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16"
                                                                         height="16"
                                                                         fill="currentColor" class="bi bi-dot"
                                                                         viewBox="0 0 16 16">
                                                                        <path
                                                                            d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"/>
                                                                    </svg>
                                                                </div>
                                                                <div>
                                                                    <span>Gardien : Non</span>
                                                                </div>
                                                            </div>
                                                            <div
                                                                class="flex flex-row gap-2 justify-center items-center">
                                                                <div>
                                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16"
                                                                         height="16"
                                                                         fill="currentColor" class="bi bi-dot"
                                                                         viewBox="0 0 16 16">
                                                                        <path
                                                                            d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"/>
                                                                    </svg>
                                                                </div>
                                                                <div>
                                                                    <span>Interphone : Oui</span>
                                                                </div>
                                                            </div>
                                                            <div
                                                                class="flex flex-row gap-2 justify-center items-center">
                                                                <div>
                                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16"
                                                                         height="16"
                                                                         fill="currentColor" class="bi bi-dot"
                                                                         viewBox="0 0 16 16">
                                                                        <path
                                                                            d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"/>
                                                                    </svg>
                                                                </div>
                                                                <div>
                                                                    <span>Digicode : Non</span>
                                                                </div>
                                                            </div>
                                                            <div
                                                                class="flex flex-row gap-2 justify-center items-center">
                                                                <div>
                                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16"
                                                                         height="16"
                                                                         fill="currentColor" class="bi bi-dot"
                                                                         viewBox="0 0 16 16">
                                                                        <path
                                                                            d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"/>
                                                                    </svg>
                                                                </div>
                                                                <div>
                                                                    <span>Visiophone : Non</span>
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


                            <!--<div class="lg:flex mt-10 ml-20">-->

                            <!--</div>-->

                            <!--<div>-->
                            <!--    <div>Combien vous interesse? <br> Simulez votre financement</div>-->
                            <!--    <div>Vous voulez vendre votre maison ou appartement? <br>Estimez la valeur de votre bien</div>-->
                            <!--</div>-->

                            <!--<div class="bg-[gray] h-[500px] mb-10">image</div>-->

                            <!--<div class="flex ">-->
                            <!--    <div class="basis-1/3 m-10">-->
                            <!--        <h1 class="text-[#008890] text-4xl font-bold mb-10 tracking-wider">Vous souhaitez visiter la-->
                            <!--            Maison</h1>-->
                            <!--        <p class="text-[#5A5C5F] mb-10">Prenez rendez-vous avec l'agence.</p>-->
                            <!--        <div class="border rounded-xl p-10">-->
                            <!--            <h1 class="font-bold text-2xl my-3 font-sans">Agence immobilière l'Adresse L'ATELIER-->
                            <!--                IMMOBILIER</h1>-->
                            <!--            <br>-->
                            <!--            <p class="text-xl">511 route St Joseph de Porterie <br>44300 <br>44300 NANTES</p><br>-->
                            <!--            <p class="text-xl text-[#008890]"><span-->
                            <!--                class="font-bold tracking-wider text-black">Transaction :</span> <br><span-->
                            <!--                class="font-2xl">02 40 52 25 00</span>-->
                            <!--            </p><br><br>-->
                            <!--            <p class="text-xl text-[#008890]"><span-->
                            <!--                class="font-bold tracking-wider text-black">Location :</span> <br><span-->
                            <!--                class="font-2xl">02 40 52 25 00</span>-->
                            <!--            </p><br>-->
                            <!--            <div class="flex justify-center m-5 ">-->
                            <!--                <button-->
                            <!--                    class=" font-bold bg-[#008890] w-[360px] tracking-wider rounded-2xl h-[80px]"><span-->
                            <!--                    class="font-bold text-white text-2xl">Nos honoraires</span></button>-->
                            <!--            </div>-->
                            <!--            <div class="flex justify-center m-5 ">-->
                            <!--                <button-->
                            <!--                    class=" font-bold bg-[#008890] w-[360px] tracking-wider rounded-2xl h-[80px]"><span-->
                            <!--                    class="font-bold text-white text-2xl">Mentions légales</span></button>-->
                            <!--            </div>-->
                            <!--        </div>-->
                            <!--    </div>-->
                            <!--    <div class="basis-1/3">-->
                            <!--        <div class="my-5"><input class="border w-[400px] rounded-[20px] h-[70px]" type="text"-->
                            <!--                                 name="" id=""-->
                            <!--                                 placeholder="     Votre nom"></div>-->
                            <!--        <div class="my-5"><input class="border w-[400px] rounded-[20px] h-[70px]" type="text"-->
                            <!--                                 name="" id=""-->
                            <!--                                 placeholder="     Votre email"></div>-->
                            <!--        <div class="my-5"><input class="border w-[400px] rounded-[20px] h-[70px]" type="text"-->
                            <!--                                 name="" id=""-->
                            <!--                                 placeholder="     Votre téléphone"></div>-->
                            <!--        <div><input type="checkbox" name="" id="" class="w-8 h-8 rounded-full"><span>Je souhaite recevoir les annonves similaires ou suggestion personnalisées de la part du réseau l'Adresse.</span>-->
                            <!--        </div>-->
                            <!--        <div><input type="checkbox" name="" id="" class="w-8 h-8 rounded-full"><span>En cochant la case ci-avant et en envoyant ce formulaire,vous acceptez que l'Adresse des Conseils Immobiliers traite les données personnelles que vous nous communiquez dans ce fomrulaire(notamment vos données d'identité,de contact et de commentaires libres). Les données saisies dans les champs ci-dessus nous sont nécessaires pour répondre à votre prise de contact et ne sont utilisées qu'à cette fin.</span>-->
                            <!--        </div>-->
                            <!--        <p>Pour en savoir plus sur la gestion de vos données personnelles et pour exercer vos-->
                            <!--            droits, vous êtes-->
                            <!--            invités à consulter la Politique de protection des données de l'Adresse des Conseils-->
                            <!--            Immobiliers.</p>-->
                            <!--    </div>-->
                            <!--    <div class="basis-1/3">-->
                            <!--        <textarea name="" id="" cols="30" rows="10"></textarea>-->
                            <!--        <div>Glissez l'image pour envoyer votre demande</div>-->
                            <!--    </div>-->
                            <!--</div>-->

                            <!--<div>-->
                            <!--    <h1>Les maisons similaires</h1>-->
                            <!--    <div class="flex">-->
                            <!--        <div>-->
                            <!--            <div>image</div>-->
                            <!--            <div>-->
                            <!--                <span>187 000 €</span><span>Maison</span>-->
                            <!--            </div>-->
                            <!--            <div>-->
                            <!--                <p>4 pièces, 3 chambres</p>-->
                            <!--                <p>97.00m²</p>-->
                            <!--                <p>Acvec Jardin</p>-->
                            <!--            </div>-->
                            <!--            <div>-->
                            <!--                <button>Voir le bien</button>-->
                            <!--            </div>-->
                            <!--        </div>-->

                            <!--        <div>-->
                            <!--            <div>image</div>-->
                            <!--            <div>-->
                            <!--                <span>307 000 €</span><span>Maison</span>-->
                            <!--            </div>-->
                            <!--            <div>-->
                            <!--                <p>5 pièces, 4 chambres</p>-->
                            <!--                <p>111.00m²</p>-->
                            <!--            </div>-->
                            <!--            <div>-->
                            <!--                <button>Voir le bien</button>-->
                            <!--            </div>-->
                            <!--        </div>-->

                            <!--        <div>-->
                            <!--            <div>image</div>-->
                            <!--            <div>-->
                            <!--                <span>472 500 €</span><span>Maison</span>-->
                            <!--            </div>-->
                            <!--            <div>-->
                            <!--                <p>4 pièces, 3 chambres</p>-->
                            <!--                <p>86.18m²</p>-->
                            <!--                <p>Acvec Jardin,terrasse</p>-->
                            <!--            </div>-->
                            <!--            <div>-->
                            <!--                <button>Voir le bien</button>-->
                            <!--            </div>-->
                            <!--        </div>-->

                            <!--        <div>-->
                            <!--            <div>image</div>-->
                            <!--            <div>-->
                            <!--                <span>199 900 €</span><span>Maison</span>-->
                            <!--            </div>-->
                            <!--            <div>-->
                            <!--                <p>3 pièces, 2 chambres</p>-->
                            <!--                <p>78.00m²</p>-->
                            <!--                <p>Acvec Jardin</p>-->
                            <!--            </div>-->
                            <!--            <div>-->
                            <!--                <button>Voir le bien</button>-->
                            <!--            </div>-->
                            <!--        </div>-->
                            <!--    </div>-->
                            <!--</div>-->
                        </div>
                    </div>
                </div>

            </div>
        </div>
        <div v-if="!product">
            No product found
        </div>
    </div>
</template>