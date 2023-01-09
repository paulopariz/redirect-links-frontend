<template>
    <div>

        <!-- The button to open modal -->
        <label for="my-modal-3" class="btn btn-accent">Adicionar User</label>

        <!-- Put this part before </body> tag -->
        <input type="checkbox" id="my-modal-3" class="modal-toggle" />
        <div class="modal">
            <div class="modal-box relative">
                <label for="my-modal-3" class="btn btn-sm  absolute right-2 top-2">✕</label>

                <div class="relative py-3 sm:w-96 mx-auto text-center">
                    <div class="mt-4 bg-white text-left">
                        <div class="h-2 "></div>
                        <div class="px-8 py-6 ">
                            <label class="block font-semibold"> Nome</label>
                            <input
                                v-model="nome" 
                                type="text" placeholder="Nome"
                                class="border w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none rounded-md">

                            <label class="block mt-3 font-semibold"> Email </label>
                            <input 
                                v-model="email"
                                type="email" placeholder="Email"
                                class="border w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none rounded-md">


                            <div class="flex justify-between items-baseline">

                                <button 
                                    @click="addUser"
                                    class="mt-4 btn py-3 px-6 text-xs rounded-md  ">Salvar</button>

                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>


        <div class="overflow-x-auto m-auto mt-6">
            <table class="table w-full text-center">
                <!-- head -->
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Email</th>
                        <th>Acoes</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="user in listagem" :key="user.id">
                        <td>{{ user.nome }}</td>
                        <td>{{ user.email }}</td>
                        <td><button class="btn btn-primary ">Editar</button></td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                listagem: [],
                nome: '',
                email: ''
            }
        },

        methods: {
            addListagem() {

            },

            addUser(){
                this.listagem.push({nome:this.nome, email:this.email})
                this.nome = ''
                this.email = ''
            }
        },

        created() {
            var list = [{
                nome: 'paulo',
                email: 'paulo@gmail.com',
                id: '1'
            }]
            this.listagem = list
        },
    }
</script>