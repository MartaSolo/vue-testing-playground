<template>
    <div>
      <div 
        v-for="todo in todos" 
        :key="todo.id" 
        data-test="todo"
        :class="{completed: todo.completed }"
        >
        {{ todo.text }}
        <input 
          type="checkbox" 
          v-model="todo.completed"
          data-test="todo-checkbox"
          />
      </div>
      <form 
        data-test="form" 
        @submit.prevent="createTodo"
        >
        <input 
          data-test="new-todo" 
          v-model="newTodo" 
          />
      </form>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ToDoApp',
    data() {
      return {
        todos: [
          {id: 1, text: "Learn Vue testing", completed: false}
        ],
        newTodo: "",
      }
    },
    methods:{
      createTodo() {
        this.todos.push({
          id: 2,
          text: this.newTodo,
          completed: false,
        })
        this.newTodo= "";
      }  
    }
  }
  </script>

  <style>
  .completed {
    text-decoration: line-through;
  }
  </style>
  
 