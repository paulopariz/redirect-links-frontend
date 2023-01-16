<template>
  <div>
    <div class="p-4 px-12 mt-9">
      <div class="grid">
        <label class="text-xl font-semibold">Título do Link</label>
        <input
          v-model="nome"
          type="text"
          placeholder="Ex: Link Legal"
          class="border-b-2 text-gray-500 border-gray-100 pl-2 pb-2 text-sm outline-none mt-6 focus:outline-none w-3/4"
        />
      </div>

      <div class="mt-14">
        <h1 class="text-primary text-xl font-semibold">URL original</h1>
        <p class="mt-3 text-gray-500 text-sm">
          Você poderá inserir uma ou várias URL's, faça como desejar. Lembre-se de inserir
          a quantidade de cliques junto à URL.
        </p>
      </div>

      <div class="mt-14">
        <div class="flex items-center justify-between mt-8">
          <h1 class="font-semibold text-base">01</h1>
          <input
            v-model="linkone"
            type="text"
            placeholder="Insira a URL 1"
            class="border-b-2 text-gray-500 border-gray-100 pl-2 pb-2 text-sm outline-none mt-3 focus:outline-none w-3/4"
          />

          <input
            v-model="maxclickOne"
            class="w-24 mt-3 border-b-2 text-gray-500 border-gray-100 pl-2 pb-2 text-sm focus:outline-none"
            placeholder="qtd cliques"
            type="number"
          />
        </div>
        <div class="flex items-center justify-between mt-14">
          <h1 class="font-semibold text-base">02</h1>
          <input
            v-model="linktwo"
            type="text"
            placeholder="Insira a URL 2"
            class="border-b-2 text-gray-500 border-gray-100 pl-2 pb-2 text-sm outline-none mt-3 focus:outline-none w-3/4"
          />

          <input
            v-model="maxclickTwo"
            class="w-24 mt-3 border-b-2 text-gray-500 border-gray-100 pl-2 pb-2 text-sm focus:outline-none"
            placeholder="qtd cliques"
            type="number"
          />
        </div>
        <div class="flex items-center justify-between mt-14">
          <h1 class="font-semibold text-base">03</h1>
          <input
            v-model="linkthree"
            type="text"
            placeholder="Insira a URL 3"
            class="border-b-2 text-gray-500 border-gray-100 pl-2 pb-2 text-sm outline-none mt-3 focus:outline-none w-3/4"
          />

          <input
            v-model="maxclickThree"
            class="w-24 mt-3 border-b-2 text-gray-500 border-gray-100 pl-2 pb-2 text-sm focus:outline-none"
            placeholder="qtd cliques"
            type="number"
          />
        </div>
      </div>

      <div class="mt-16">
        <h1 class="text-primary text-xl font-semibold">URL Default</h1>
        <p class="mt-3 text-gray-500 text-sm">
          Essa URL será associada ao redirecionamento apenas quando todas as outras
          chegarem ao limite de cliques. Ela será a uma url fixa sem limitação.
        </p>
        <input
          v-model="linktdefault"
          type="text"
          placeholder="Insira a URL Default"
          class="border-b-2 text-gray-500 border-gray-100 pl-2 pb-2 text-sm outline-none mt-8 focus:outline-none w-3/4"
        />
      </div>

      <div class="flex items-center justify-between mb-4 mt-12">
        <div>
          <router-link to="/listar">
            <button class="btn py-3 px-6 text-sm rounded-md btn-wide mr-2">
              Cancelar
            </button>
          </router-link>
        </div>
        <div>
          <label
            for="my-modal"
            class="btn btn-outline mr-2 border-none py-3 px-6 text-sm rounded-md btn-wide bg-red-600 text-white hover:bg-red-700"
          >
            Exluir
          </label>

          <label
            @click="update"
            for="my-modal-5"
            class="btn py-3 px-6 text-sm rounded-md btn-primary btn-wide"
          >
            Editar Link 💪
          </label>
        </div>
      </div>
    </div>

    <!--MODAL DELETE-->
    <ModalDelete />
  </div>
</template>

<script>
import ModalDelete from "./ModalDelete.vue";

export default {
  name: "RedirectEdit",
  components: { ModalDelete },

  data() {
    return {
      nome: "",
      linkone: "",
      linktwo: "",
      linkthree: "",
      linktdefault: "",
      maxclick: "",
    };
  },
  methods: {
    getUser() {
      this.$http.get(`editar/${this.$route.params.id}`).then((response) => {
        this.nome = response.data.nome;
        this.linkone = response.data.linkone;
        this.linktwo = response.data.linktwo;
        this.linkthree = response.data.linkthree;
        this.linktdefault = response.data.linktdefault;
        this.maxclick = response.data.maxclick;
      });
    },
    update() {
      var data = {
        name: this.nome,
        linkone: this.linkone,
        linktwo: this.linktwo,
        linkthree: this.linkthree,
        linktdefault: this.linktdefault,
        maxclick: this.maxclick,
      };
      this.$http.put(`atualizar/${this.$route.params.id}`, data).then((response) => {
        if (response.data == "success") {
          setTimeout(() => {
            this.$swal("Sucesso", "Link editado com sucesso", "success");
            this.$router.push("/listar");
          }, 1300);
        }
      });
    },
  },
  created() {
    this.getUser();
  },
};
</script>
