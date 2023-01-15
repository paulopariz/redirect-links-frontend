<template>
  <div>
    <div class="flex items-center mt-12">
      <div class="border-gray-100 border-t-2 border-r-2 h-screen w-5/12">
        <div
          class="flex items-center justify-between mt-2 border-b-2 border-gray-100 py-5 pr-8"
        >
          <h1 class="text-primary font-semibold">{{ listagem.length }} Links</h1>
          <p class="font-normal text-gray-500 text-sm">Cliques</p>
        </div>

        <div
          @click="btnShowLinks"
          v-for="link in listagem"
          :key="link.id"
          class="flex items-center justify-between cursor-pointer mt-2 border-b-2 border-gray-100 py-5 pr-8"
        >
          <div class="grid grid-cols-2 text-left">
            <h1 class="font-semibold text-lg focus:text-primary">{{ link.nome }}</h1>
            <span class="font-normal text-xs ml-6 mt-1">{{
              Dates(link.created_at)
            }}</span>

            <button class="mt-3 text-sm underline decoration-solid w-0 text-primary">
              Ver
            </button>
          </div>

          <span class="text-sm font-normal">👉 02/750 </span>
        </div>
      </div>

      <div class="border-gray-100 border-t-2 h-screen w-7/12">
        <div
          class="mt-20 pl-8"
          v-show="ShowLinks"
          v-for="link in listagem"
          :key="link.id"
        >
          <div class="flex items-center gap-10">
            <h1 class="text-2xl font-semibold">{{ link.nome }}</h1>
            <div class="grid gap-2">
              <span class="text-xs text-gray-500 font-normal"
                >Criado em: {{ dateHours(link.created_at) }}
              </span>
              <span class="text-xs text-gray-500 font-normal"
                >Atualizado em: {{ dateHours(link.updated_at) }}
              </span>
            </div>
          </div>

          <div class="mt-6 flex items-center gap-16 border-b-2 border-gray-100 pb-4">
            <router-link class="text-sm underline decoration-solid tracking-wider" to=""
              >Clique aqui para acessar
            </router-link>

            <router-link :to="{ name: 'editar', params: { id: link.id } }">
              <button class="btn btn-outline btn-primary text-xs px-10 py-2 btn-sm">
                Editar Links
              </button>
            </router-link>
          </div>

          <div class="mt-11">
            <div>
              <div class="flex items-center gap-5 mb-3 2">
                <h1 class="text-primary text-sm font-semibold">01</h1>
                <a href="" class="text-gray-500 text-sm font-normal">{{ link.email }}</a>
              </div>
              <span class="text-primary ml-8 text-xs">02/750</span>
            </div>
          </div>
          <div class="mt-11">
            <div>
              <div class="flex items-center gap-5 mb-3 2">
                <h1 class="text-primary text-sm font-semibold">02</h1>
                <a href="" class="text-gray-500 text-sm font-normal">{{
                  link.linktwo
                }}</a>
              </div>
              <span class="text-primary ml-8 text-xs">02/750</span>
            </div>
          </div>
          <div class="mt-11">
            <div>
              <div class="flex items-center gap-5 mb-3 2">
                <h1 class="text-primary text-sm font-semibold">03</h1>
                <a href="" class="text-gray-500 text-sm font-normal">{{
                  link.linkthree
                }}</a>
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
      <div class="modal-box w-2/5 max-w-5xl relative p-0 rounded-none">
        <header class="p-4 px-12 bg-black flex items-center justify-between">
          <h1 class="text-white text-sm">Criação de Link</h1>

          <label for="my-modal-5">
            <img class="w-3 cursor-pointer" src="../assets/img/close.svg" />
          </label>
        </header>

        <div class="p-4 px-12 mt-5">
          <div class="grid">
            <label class="text-sm font-semibold">Título do Link</label>
            <input
              v-model="nome"
              type="text"
              placeholder="Ex: Link Legal"
              class="border-b-2 text-gray-500 border-gray-100 pl-2 pb-2 text-xs outline-none mt-6 focus:outline-none w-3/4"
            />
          </div>

          <div class="mt-6">
            <h1 class="text-primary text-sm font-semibold">URL original</h1>
            <p class="mt-3 text-gray-500 text-xs">
              Você poderá inserir uma ou várias URL's, faça como desejar. Lembre-se de
              inserir a quantidade de cliques junto à URL.
            </p>
          </div>

          <div>
            <div class="flex items-center justify-between mt-8">
              <h1 class="font-semibold text-sm">01</h1>
              <input
                v-model="email"
                type="text"
                placeholder="Insira a URL 1"
                class="border-b-2 text-gray-500 border-gray-100 pl-2 pb-2 text-xs outline-none mt-3 focus:outline-none w-3/4"
              />

              <input
                class="w-24 mt-3 border-b-2 text-gray-500 border-gray-100 pl-2 pb-2 text-xs focus:outline-none"
                placeholder="qtd cliques"
                type="number"
              />
            </div>
            <div class="flex items-center justify-between mt-8">
              <h1 class="font-semibold text-sm">02</h1>
              <input
                v-model="linktwo"
                type="text"
                placeholder="Insira a URL 2"
                class="border-b-2 text-gray-500 border-gray-100 pl-2 pb-2 text-xs outline-none mt-3 focus:outline-none w-3/4"
              />

              <input
                class="w-24 mt-3 border-b-2 text-gray-500 border-gray-100 pl-2 pb-2 text-xs focus:outline-none"
                placeholder="qtd cliques"
                type="number"
              />
            </div>
            <div class="flex items-center justify-between mt-8">
              <h1 class="font-semibold text-sm">03</h1>
              <input
                v-model="linkthree"
                type="text"
                placeholder="Insira a URL 3"
                class="border-b-2 text-gray-500 border-gray-100 pl-2 pb-2 text-xs outline-none mt-3 focus:outline-none w-3/4"
              />

              <input
                class="w-24 mt-3 border-b-2 text-gray-500 border-gray-100 pl-2 pb-2 text-xs focus:outline-none"
                placeholder="qtd cliques"
                type="number"
              />
            </div>
          </div>

          <div class="mt-14">
            <h1 class="text-primary text-sm font-semibold">URL Default</h1>
            <p class="mt-3 text-gray-500 text-xs">
              Essa URL será associada ao redirecionamento apenas quando todas as outras
              chegarem ao limite de cliques. Ela será a uma url fixa sem limitação.
            </p>
            <input
              type="text"
              placeholder="Insira a URL Default"
              class="border-b-2 text-gray-500 border-gray-100 pl-2 pb-2 text-xs outline-none mt-6 focus:outline-none w-3/4"
            />
          </div>
          <label
            @click="addLink"
            for="my-modal-5"
            class="btn mt-4 py-3 px-6 text-xs rounded-md btn-primary btn-wide float-right mb-4"
          >
            Salvar Link 💪
          </label>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import moment from "moment";
export default {
  name: "LinksRedirect",

  data() {
    return {
      moment: moment,
      listagem: [],
      name: "",
      email: "",
      linktwo: "",
      linkthree: "",
      deleteAlert: false,

      ShowLinks: false,
    };
  },

  methods: {
    dateHours(date) {
      return moment(date).format("DD/MM/YYYY [às] HH:mm");
    },
    Dates(date) {
      return moment(date).format("DD/MM/YYYY");
    },

    btnShowLinks() {
      this.ShowLinks = !this.ShowLinks;
    },

    addLink() {
      var data = {
        name: this.nome,
        email: this.email,
        linktwo: this.linktwo,
        linkthree: this.linkthree,
      };
      var data2 = {
        name: this.name,
        email: this.email,
        linktwo: this.linktwo,
        linkthree: this.linkthree,
      };

      if (this.nome.length < 4) {
        return "error";
      } else {
        this.$http.post("adicionar", data).then((response) => {
          this.$swal("Sucesso", "Link adicionado com sucesso", "success");
          this.$router.push("/listar");
          setTimeout(() => {
            document.location.reload(true);
          }, 1000);
          console.log(response);
        });
      }

      this.listagem.push(data2);
      this.nome = "";
      this.email = "";
      this.linktwo = "";
      this.linkthree = "";
    },

    showListagem() {
      this.$http.get("listar").then((response) => {
        this.listagem = response.data;
      });
    },
  },

  created() {
    this.showListagem();
  },
};
</script>
