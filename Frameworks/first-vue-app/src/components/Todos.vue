<template>
  <div>
    <div v-bind:key="todoItem.id" v-for="todoItem in todos">
      <TodoItem v-bind:todo="todoItem" v-on:del-todo="$emit('del-todo', todoItem.id)" />
    </div>
  </div>
</template>

<script>
import TodoItem from "./TodoItem";

export default {
  name: "Todos",
  components: { TodoItem },
  props: ["todos"]
};
</script>

<style scoped>
</style>