<template>
  <header>
    <h1>{{ appName }}</h1>
  </header>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  props: {
    appName: String,
  },
})
export default class Header extends Vue {}
</script>

<style lang="scss" scoped>
header {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 75px;
  background-color: black;

  h1 {
    padding: 1em;
    font-family: Arial, Helvetica, sans-serif;
    color: white;
    font-weight: bold;
  }
}
</style>
