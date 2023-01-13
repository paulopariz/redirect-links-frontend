<template>
  <div>
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
  name: "ModalDelete",

  methods: {
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
};
</script>
