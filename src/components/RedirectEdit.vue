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
            v-model="email"
            type="text"
            placeholder="Insira a URL 1"
            class="border-b-2 text-gray-500 border-gray-100 pl-2 pb-2 text-sm outline-none mt-3 focus:outline-none w-3/4"
          />

          <input
            class="w-24 mt-3 border-b-2 text-gray-500 border-gray-100 pl-2 pb-2 text-sm focus:outline-none"
            placeholder="qtd cliques"
            type="number"
          />
        </div>
        <div class="flex items-center justify-between mt-14">
          <h1 class="font-semibold text-base">02</h1>
          <input
            type="text"
            placeholder="Insira a URL 2"
            class="border-b-2 text-gray-500 border-gray-100 pl-2 pb-2 text-sm outline-none mt-3 focus:outline-none w-3/4"
          />

          <input
            class="w-24 mt-3 border-b-2 text-gray-500 border-gray-100 pl-2 pb-2 text-sm focus:outline-none"
            placeholder="qtd cliques"
            type="number"
          />
        </div>
        <div class="flex items-center justify-between mt-14">
          <h1 class="font-semibold text-base">03</h1>
          <input
            type="text"
            placeholder="Insira a URL 3"
            class="border-b-2 text-gray-500 border-gray-100 pl-2 pb-2 text-sm outline-none mt-3 focus:outline-none w-3/4"
          />

          <input
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
    <input type="checkbox" id="my-modal" class="modal-toggle" />
    <div class="modal">
      <div class="modal-box rounded-none">
        <h1 class="font-semibold text-xl text-center">Tem certeza que deseja ecluir?</h1>

        <div class="modal-action justify-center mt-14">
          <label @click="deletar" for="my-modal" class="btn">NÃO, CANCELAR</label>
          <label
            @click="deletar"
            for="my-modal"
            class="btn bg-red-600 border-none hover:bg-red-700"
            >SIM</label
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "RedirectEdit",

  data() {
    return {
      nome: "",
      email: "",
    };
  },

  methods: {
    getUser() {
      this.$http.get(`editar/${this.$route.params.id}`).then((response) => {
        this.nome = response.data.nome;
        this.email = response.data.email;
      });
    },

    update() {
      var data = {
        name: this.nome,
        email: this.email,
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

    deletar() {
      this.$http.delete(`deletar/${this.$route.params.id}`).then((response) => {
        if (response.data == "success") {
          setTimeout(() => {
            this.$swal("Sucesso", "Link deletado com sucesso", "success");
            this.$router.push("/listar");
          }, 1000);
        }
      });
    },
  },

  created() {
    this.getUser();
  },
};
</script>
