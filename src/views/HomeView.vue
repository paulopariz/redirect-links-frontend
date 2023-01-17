<template>
  <div class="flex items-center">
    <div class="w-24 border-r-2 h-screen flex flex-col justify-around">
      <router-link to="/listar">
        <img class="w-1/3 m-auto" :src="iconRoute" />
      </router-link>

      <div v-for="obj in icons" :key="obj">
        <img class="w-1/3 m-auto cursor-pointer" v-if="obj.icon" :src="obj.icon" />
      </div>
    </div>
    <div class="m-auto flex flex-col items-center">
      <h1 class="text-6xl font-semibold">Sistema de Redirecionamentos</h1>
      <h2 class="mt-4 text-5xl font-medium">Paulo Pariz</h2>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeView",

  data() {
    return {
      iconRoute: require("../assets/img/icon1.svg"),

      icons: [
        {
          icon: require("../assets/img/icon2.svg"),
        },
        {
          icon: require("../assets/img/icon3.svg"),
        },
        {
          icon: require("../assets/img/icon4.svg"),
        },
        {
          icon: require("../assets/img/icon5.svg"),
        },
        {
          icon: require("../assets/img/eclipse.svg"),
        },
      ],
    };
  },
};
</script>
