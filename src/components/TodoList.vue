<template>
  <CreateTodo @createTodo="handleCreateTodo($event)" />
  <div id="todo-container">
    <h2>Things to get checked</h2>
    <ul>
      <TodoItem
        @markAsDone="handleMarkAsDone($event)"
        @deleteTodo="handleDeleteTodo($event)"
        v-for="(t, i) in todoArray"
        :todo="t"
        :key="i"
      />
    </ul>
  </div>
</template>

<script lang="ts">
import { Todo } from "@/models/Todo";
import { Options, Vue } from "vue-class-component";
import CreateTodo from "./CreateTodo.vue";
import TodoItem from "./TodoItem.vue";

@Options({
  components: {
    CreateTodo,
    TodoItem,
  },
})
export default class TodoList extends Vue {
  todoArray: Todo[] = [];

  handleCreateTodo(todo: Todo) {
    this.todoArray.push(todo);
  }

  handleMarkAsDone(id: number) {
    let todo = this.todoArray.find((todo) => todo.id === id);

    if (todo) {
      todo.done = !todo.done;
    }
  }

  handleDeleteTodo(id: number) {
    let index = this.todoArray.findIndex((todo) => todo.id === id);

    this.todoArray.splice(index, 1);
  }
}
</script>

<style lang="scss" scoped>
#todo-container {
  background-color: white;
  width: 90%;
  margin-top: 20px;
  box-shadow: 0 0 3px 3px rgb(228, 228, 228);

  h2 {
    font-family: Arial, Helvetica, sans-serif;
  }

  ul {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;
    padding: 0;
  }
}

@media screen and (min-width: 900px) {
  #todo-container {
    width: 40%;
    margin-top: 50px;
  }
}
</style>
