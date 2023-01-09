<template>
    <div>
     

            <div class="relative">
                <h1 class="block  text-4xl text-slate-900">EDITAR {{ this.$route.params.id }}</h1>



                <div class="relative py-3 sm:w-96 mx-auto text-center">
                    <div class="mt-4 bg-white text-left">
                        <div class="h-2 "></div>

                        <div class="px-8 py-6 ">
                            <label class="block font-semibold"> Nome</label>
                            <input type="text" placeholder="Nome"
                                class="border w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none rounded-md">

                            <label class="block mt-3 font-semibold"> Email </label>
                            <input  type="email" placeholder="Email"
                                class="border w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none rounded-md">


                            <div class="flex justify-between items-baseline">

                                <button  class="mt-4 btn py-3 px-6 text-xs rounded-md btn-success ">Salvar alterações</button>
                                <button  class="mt-4 btn py-3 px-6 text-xs rounded-md btn-error  ">Excluir</button>

                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>

</template>