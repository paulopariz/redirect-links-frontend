<template>
  <div>
    <input type="checkbox" id="my-modal" class="modal-toggle" />
    <div class="modal">
      <div class="modal-box rounded-none">
        <label for="my-modal">
          <img
            class="w-3 cursor-pointer invert float-right"
            src="../assets/img/close.svg"
          />
        </label>
        <h1 class="font-semibold text-xl text-center mt-12">
          Tem certeza que deseja excluir?
        </h1>

        <div class="modal-action justify-center mt-9">
          <label for="my-modal" class="btn">NÃO, CANCELAR</label>
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
      this.$redirect.delete(`deletar/${this.$route.params.id}`).then((response) => {
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
