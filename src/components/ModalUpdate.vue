<template>
  <div>
    <input type="checkbox" id="my-modal-6" class="modal-toggle" />
    <div class="modal modal-bottom sm:modal-middle">
      <div class="modal-box rounded-none">
        <h1 class="font-semibold text-xl text-center">Confirmar alterações?</h1>

        <div class="modal-action justify-center mt-14">
          <label @click="deletar" for="my-modal-6" class="btn">NÃO, CANCELAR</label>
          <label
            @click="update"
            for="my-modal-6"
            class="btn bg-green-600 border-none hover:bg-green-700"
            >SIM</label
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ModalUpdate",

  methods: {
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
  },
};
</script>
