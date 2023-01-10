<template>
  <div>
    <div class="flex items-center mt-12">
      <div class="border-gray-100 border-t-2 border-r-2 h-screen w-5/12">
        <div
          class="flex items-center justify-between mt-2 border-b-2 border-gray-100 py-5 pr-8"
        >
          <h1 class="text-primary font-semibold">00 Links</h1>
          <p class="font-normal text-gray-500 text-sm">Cliques</p>
        </div>

        <div
          @click="btnShowLinks"
          v-for="user in listagem"
          :key="user.id"
          class="flex items-center justify-between cursor-pointer mt-2 border-b-2 border-gray-100 py-5 pr-8"
        >
          <div class="grid grid-cols-2 text-left">
            <h1 class="font-semibold text-lg focus:text-primary">{{ user.name }}</h1>
            <span class="font-normal text-xs ml-6 mt-1">01/01/2023</span>

            <button class="mt-3 text-sm underline decoration-solid w-0 text-primary">
              Ver
            </button>
          </div>

          <span class="text-sm font-normal">👉 02/750 </span>
        </div>
      </div>

      <div class="border-gray-100 border-t-2 h-screen w-7/12">
        <div class="mt-20 pl-8" v-show="ShowLinks">
          <div class="flex items-center gap-10">
            <h1 class="text-2xl font-semibold">Link teste</h1>
            <span class="text-sm text-gray-500 font-normal">Criado em: 01/01/2023</span>
          </div>

          <div class="mt-6 flex items-center gap-16 border-b-2 border-gray-100 pb-4">
            <router-link class="text-sm underline decoration-solid tracking-wider" to=""
              >Clique aqui para acessar</router-link
            >

            <button class="btn btn-outline btn-primary text-xs px-10 py-2 btn-sm">
              Editar Links
            </button>
          </div>

          <div class="mt-11">
            <div>
              <div class="flex items-center gap-5 mb-3 2">
                <h1 class="text-primary text-sm font-semibold">01</h1>
                <a href="" class="text-gray-500 text-sm font-normal"
                  >https://www.notion.so/Green-club-8d477635100044e4b3c5ca81c479fbdc</a
                >
              </div>
              <span class="text-primary ml-8 text-xs">02/750</span>
            </div>
          </div>
          <div class="mt-11">
            <div>
              <div class="flex items-center gap-5 mb-3 2">
                <h1 class="text-primary text-sm font-semibold">02</h1>
                <a href="" class="text-gray-500 text-sm font-normal"
                  >https://www.notion.so/Green-club-8d477635100044e4b3c5ca81c479fbdc</a
                >
              </div>
              <span class="text-primary ml-8 text-xs">02/750</span>
            </div>
          </div>
          <div class="mt-11">
            <div>
              <div class="flex items-center gap-5 mb-3 2">
                <h1 class="text-primary text-sm font-semibold">03</h1>
                <a href="" class="text-gray-500 text-sm font-normal"
                  >https://www.notion.so/Green-club-8d477635100044e4b3c5ca81c479fbdc</a
                >
              </div>
              <span class="text-primary ml-8 text-xs">02/750</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!---MODAL CRIAR --->
    <input type="checkbox" id="my-modal-5" class="modal-toggle" />
    <div class="modal">
      <div class="modal-box w-2/4 max-w-5xl relative p-0 rounded-none">
        <header class="p-4 px-6 bg-black flex items-center justify-between">
          <h1 class="text-white text-sm">Criação de Link</h1>

          <label for="my-modal-5">
            <img class="w-3 cursor-pointer" src="../assets/img/close.svg" />
          </label>
        </header>

        <div class="p-4 px-6 mt-5">
          <div class="grid">
            <label class="text-sm font-semibold">Título do Link</label>
            <input
              v-model="nome"
              type="text"
              placeholder="Ex: Link Legal"
              class="border-b-2 text-gray-500 border-gray-100 pl-2 pb-2 text-xs outline-none mt-3 focus:outline-none w-3/4"
            />
          </div>

          <div class="mt-6">
            <h1 class="text-primary text-sm font-semibold">URL original</h1>
            <p class="mt-3 text-gray-500 text-xs">
              Você poderá inserir uma ou várias URL's, faça como desejar. Lembre-se de
              inserir a quantidade de cliques junto à URL.
            </p>
          </div>
        </div>

        <div class="relative py-3 sm:w-96 mx-auto">
          <div class="mt-4 bg-white text-left">
            <div class="h-2"></div>
            <div class="px-8 py-6">
              <label class="block mt-3 font-semibold"> Email </label>
              <input
                v-model="email"
                type="email"
                placeholder="Email"
                class="border w-full h-5 px-3 py-5 mt-2 p-3 hover:outline-none focus:outline-none rounded-md"
              />

              <div class="flex justify-between items-baseline">
                <label
                  @click="addLink"
                  for="my-modal-5"
                  class="btn mt-4 py-3 px-6 text-xs rounded-md"
                  >Salvar</label
                >
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
  name: "LinksRedirect",

  data() {
    return {
      listagem: [],
      name: "",
      email: "",

      ShowLinks: false,
    };
  },

  methods: {
    btnShowLinks() {
      this.ShowLinks = !this.ShowLinks;
    },

    addListagem() {},

    addLink() {
      this.spiner;
      var data = {
        name: this.nome,
        email: this.email,
      };
      this.$http.post("adicionar", data).then((response) => {
        console.log(response);
      });

      this.listagem.push(data);
      this.nome = "";
      this.email = "";
    },
  },

  created() {
    var list = [
      {
        name: "Link teste",
        email: "https://www.google.com.br/",
        id: "1",
      },
    ];
    this.listagem = list;
  },
};
</script>
