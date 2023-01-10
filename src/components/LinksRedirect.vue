<template>
    <div>

        <div v-for="user in listagem" :key="user.id" class="flex items-center justify-between mt-2 border-b-2 border-gray-100 py-5 pr-8 ">
            <div class="grid grid-cols-2 text-left">
                <h1 class="font-semibold text-lg">{{ user.name }}</h1>
                <span class="font-normal text-xs ml-6 mt-1">01/01/2023</span>
                <router-link class="mt-3 text-sm underline decoration-solid	tracking-wider" to="">Acessar</router-link>
            </div>

            <span class="text-sm font-normal">👉 02/750 </span>
        </div>
                

         <!---MODAL CRIAR --->
         <input type="checkbox" id="my-modal-3" class="modal-toggle" />
        <div class="modal">
            <div class="modal-box relative">
                <h1 class="block  text-4xl text-slate-900">ADICIONAR</h1>

                <label for="my-modal-3" class="btn btn-sm  absolute right-2 top-2">✕</label>

                <div class="relative py-3 sm:w-96 mx-auto ">
                    <div class="mt-4 bg-white text-left">
                        <div class="h-2 "></div>
                        <div class="px-8 py-6 ">
                            <label class="block font-semibold"> Nome</label>
                            <input v-model="nome" type="text" placeholder="Nome"
                                class="border w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none rounded-md">

                            <label class="block mt-3 font-semibold"> Email </label>
                            <input v-model="email" type="email" placeholder="Email"
                                class="border w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none rounded-md">


                            <div class="flex justify-between items-baseline">

                                <button @click="addLink" class="mt-4 btn py-3 px-6 text-xs rounded-md  ">Salvar</button>

                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'LinksRedirect',

        data() {
            return {
                listagem: [],
                name: '',
                email: '',
                spiner: 'dgdfgdfgdfg'
            }
        },

        methods: {
            addListagem() {

            },

            addLink() {
                this.spiner
                var data = {
                    name: this.nome,
                    email: this.email
                }
                this.$http.post('adicionar', data).then((response) => {
                    console.log(response)
                })

                this.listagem.push(data)
                this.nome = ''
                this.email = ''

            },
        },

        created() {
            var list = [{
                name: 'Link teste',
                email: 'https://www.google.com.br/',
                id: '1'
            }]
            this.listagem = list
        },
    }
</script>