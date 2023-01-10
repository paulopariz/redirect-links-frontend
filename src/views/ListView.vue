<template>
  <div class="container m-auto">
    <header class="flex justify-between items-center mt-16">
      <div class="float-left text-left">
        <h1 class="text-xl text-gray-900 font-semibold">Links de Redirecionamento 🌐</h1>
        <span class="text-sm text-gray-500"
          >Crie seus links de redirect em poucos passos</span
        >
      </div>
      <div>
        <label for="my-modal-5" class="btn btn-primary py-2 px-9 text-sm btn-wide"
          >Criar um Link</label
        >
      </div>
    </header>

    <LinksRedirect />
  </div>
</template>

<script>
import LinksRedirect from "@/components/LinksRedirect.vue";

export default {
  components: {
    LinksRedirect,
  },

  data() {
    return {};
  },
};
</script>
