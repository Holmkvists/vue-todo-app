<template>
  <Header appName="CHECK ✓T" />
  <main>
    <TodoList />
  </main>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import Header from "./components/Header.vue";
import TodoList from "./components/TodoList.vue";

@Options({
  components: {
    Header,
    TodoList,
  },
})
export default class App extends Vue {}
</script>

<style lang="scss">
html,
body {
  background-color: #f4f4f4;
  margin: 0 !important;
  padding: 0 !important;
}

* {
  box-sizing: border-box !important;
}

main {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}

@media screen and (min-width: 900px) {
  main {
    flex-direction: row;
    justify-content: space-evenly;
    align-items: initial;
  }
}
</style>
