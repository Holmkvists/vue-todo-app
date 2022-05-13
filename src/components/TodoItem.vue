<template>
  <li>
    <span :class="{ checked: todo.done }">{{ todo.name }}</span>
    <div class="icon-container">
      <p @click="markAsDone" class="checkmark">✓</p>
      <i @click="deleteTodo" class="bi bi-trash3-fill"></i>
    </div>
    <p class="date">{{ todo.date }}</p>
  </li>
</template>

<script lang="ts">
import { Todo } from "@/models/Todo";
import { Vue } from "vue-class-component";
import { Prop } from "vue-property-decorator";

export default class TodoItem extends Vue {
  @Prop() todo!: Todo;

  markAsDone() {
    this.$emit("markAsDone", this.todo.id);
  }

  deleteTodo() {
    this.$emit("deleteTodo", this.todo.id);
  }
}
</script>

<style lang="scss" scoped>
li {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  text-align: left;
  width: 80%;
  border-bottom: 1px solid black;

  p,
  i,
  span {
    padding: 0 0.5em;
    font-size: 12pt;
  }

  span {
    width: 80%;
    word-wrap: break-word;
  }

  .checked {
    text-decoration: line-through;
  }

  .icon-container {
    display: flex;
    align-items: center;

    p,
    i {
      cursor: pointer;
    }
  }

  .date {
    width: 100%;
  }
}
</style>
