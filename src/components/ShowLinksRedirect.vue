<template>
  <div>
    <div class="mt-20 pl-8">
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
</template>

<script>
export default {
  name: "ShoeLinksRedirect",
};
</script>
