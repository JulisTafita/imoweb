<script setup>

const {data} = await useFetch('/api/contact/contact')

</script>

<template>
    <div class=" bg-cyan-100">
        <div class="md:max-w-[1200px] w-screen max-w-screen md:m-auto">
            <div class="flex flex-row w-full flex-wrap justify-center items-center">
                <div class="flex flex-col p-8">
                    <h5 class="font-bold text-lg text-cyan-700 flex flex-row justify-start items-center gap-4 py-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                             class="bi bi-telephone-fill" viewBox="0 0 16 16">
                            <path fill-rule="evenodd"
                                  d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
                        </svg>
                        <span>Téléphone</span>
                    </h5>
                    <h5><span class="font-bold text-cyan-700">></span> {{ data.telephone }} (appel non surtaxé)</h5>
                </div>
                <div class="flex flex-col p-8">
                    <h5 class="font-bold text-lg text-cyan-700 flex flex-row justify-start items-center gap-4 py-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                             class="bi bi-telephone-fill" viewBox="0 0 16 16">
                            <path fill-rule="evenodd"
                                  d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
                        </svg>
                        <span>Email</span>
                    </h5>
                    <h5><span class="font-bold text-cyan-700">></span>{{ data.email }}</h5>
                </div>
                <div class="flex flex-col p-8">
                    <h5 class="font-bold text-lg text-cyan-700 flex flex-row justify-start items-center gap-4 py-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                             class="bi bi-telephone-fill" viewBox="0 0 16 16">
                            <path fill-rule="evenodd"
                                  d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
                        </svg>
                        <span>Addresse</span>
                    </h5>
                    <h5><span class="font-bold text-cyan-700">></span> {{ data.addresse }}</h5>
                </div>
            </div>
        </div>
    </div>

    <div>
         <div class="md:flex flex-row px-8 py-10">
              <div class="px-20 basis-1/3">
                   <div>
                       <span class="text-cyan-700 text-4xl font-bold">Vous souhaitez visitez la maison</span>
                   </div>
                   <div class="py-10">
                       <span>Prenez rendez-vous avec l'agence.</span>
                   </div>
                   <div class="border rounded-xl p-10" >
                        <div class="pb-5">
                            <span class="font-bold text-2xl font-sans">Agence immobilière l'Adresse L'ATELIER IMMOBILIER</span>
                        </div>
                        <div>
                            <p class="text-xl">511 route St Joseph de Porterie <br>44300 <br>44300 NANTES</p>
                        </div>
                        <div class="py-2">
                              <div class="py-2">
                                  <p class="font-bold tracking-wider text-black">Transaction:</p>
                                  <p class="font-2xl text-cyan-700">02 40 52 25 00</p>
                              </div>
                              <div>
                                  <p class="font-bold tracking-wider text-black">Location :</p>
                                  <p class="font-2xl text-cyan-700">02 40 52 25 00</p>
                              </div>
                        </div>
                        <div>
                            <div class="py-5 flex flex-row justify-center">
                                 <button  class="bg-cyan-700  tracking-wider rounded-xl px-20 py-5">
                                    <span  class=" text-white">Nos honoraires</span>
                                </button>
                            </div>
                            <div class="py-5 flex flex-row justify-center">
                                <button class="bg-cyan-700 tracking-wider rounded-xl px-20 py-5">
                                    <span  class="text-white ">Mentions légales</span>
                                </button>
                            </div>
                        </div>
                   </div>
              </div>

              <div class="basis-1/3 px-5">
                   <div>
                        <div class="py-5">
                            <input type="text" placeholder="    Votre nom" class="border md:w-[400px] w-full rounded-[20px] h-[70px]">
                        </div>    
                        <div class="py-5">    
                            <input type="text" placeholder="    Votre email" class="border md:w-[400px] w-full rounded-[20px] h-[70px]">
                        </div>    
                        <div class="py-5">    
                            <input type="text" placeholder="    Votre téléphone" class="border md:w-[400px] w-full rounded-[20px] h-[70px]">
                        </div>
                   </div>
                   <div>
                         <div>
                              <input type="checkbox" name="" id=""><span class="px-2 text-lg">Je souhaite recevoir les annonces similaires ou suggestions personnalisées de la part du réseau l'Adresse.</span>
                         </div>
                         <div>
                              <input type="checkbox" name="" id="" ><span class="px-2 text-lg">En cochant la case ci-avant et en envoyant ce formulaire, vous acceptez que l'Adresse des Conseils Immobiliers traite les données personnelles que vous nous communiquez dans ce formulaire (notamment vos données d'identité, de contact et de commentaires libres). Les données saisies dans les champs ci-dessus nous sont nécessaires pour répondre à votre prise de contact et ne sont utilisées qu'à cette fin.Pour en savoir plus sur la gestion de vos données personnelles et pour exercer vos droits, vous êtes invités à consulter la Politique de protection des données de l'Adresse des Conseils Immobiliers.</span>
                         </div>
                   </div>
              </div>

              <div class="1/3 py-5">
                    <div>
                         <textarea name="" id="" class="border w-[500px] h-[290px] rounded-lg"></textarea>
                    </div>
                    <div class="py-10 px-5">
                        <span>Glissez l'image pour envoyer la photo </span>
                    </div>
              </div>
         </div>
    </div>
</template>

