<template>
  <div id="input-wrapper">
    <h2>What needs to get checked?</h2>
    <div id="input-container">
      <textarea rows="8" v-model="name"></textarea>
      <input type="date" v-model="date" />
      <button @click="createTodo">Add</button>
    </div>
  </div>
</template>

<script lang="ts">
import { Todo } from "@/models/Todo";
import { Vue } from "vue-class-component";

export default class CreateTodo extends Vue {
  name = "";
  date = "";
  id: number = new Date().getTime();

  createTodo() {
    this.$emit("createTodo", new Todo(this.name, this.date, false));

    this.name = "";
    this.date = "";
  }
}
</script>

<style lang="scss" scoped>
h2 {
  font-family: Arial, Helvetica, sans-serif;
}

#input-wrapper {
  display: flex;
  flex-direction: column;
  background-color: white;
  align-items: center;
  margin-top: 20px;
  width: 90%;
  box-shadow: 0 0 3px 3px rgb(228, 228, 228);

  #input-container {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    width: 80%;
    padding: 0 1em 1em 1em;

    textarea {
      width: 100%;
      margin-bottom: 15px;
      resize: none;
    }

    textarea:focus {
      outline: 0;
    }

    button {
      background-color: white;
      cursor: pointer;
      border: 1px solid black;
    }
  }
}

@media screen and (min-width: 900px) {
  #input-wrapper {
    height: fit-content;
    width: 40%;
    margin-top: 50px;
  }
}
</style>
