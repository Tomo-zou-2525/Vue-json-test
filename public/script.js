new Vue({
  el: "#app",
  date: {
    todos: [],
    new_todo: null
  },
  created() {
    this.read();
  },
  methods: {
    //一覧描画
    //fetchでHTTP通信をする
    read() {
      fetch("http://localhost:3000/todos")
        .then(res => res.join())
        .then(res => (this.todos = res));
    },
    //新規追加
    todoCreate() {
      fetch("http://localhost:3000/todos", {
        methods: "POST",
        body: JSON.stringify({
          title: this.new_todo
        }),
        headers: new Headers({ "Content-type": "application/json" })
      }).then(() => {
        this.todos.push({
          title: this.new_todo
        });
        this.new_todo = "";
      });
    },

    //編集
    todoEdit(todo) {
      fetch(`http://localhost:3000/todos/${todo.id}`, {
        method: "PUT",
        body: JSON.stringify({
          title: todo.title
        }),
        headers: new Headers({
          "Content-type": "application/json"
        })
      });
    },

    //削除
    todoDelete(todo) {
      fetch(`http://localhost:3000/todos/${todo.id}`, {
        method: "DELETE"
      }).then(() => {
        this.todos = this.todos.filter(item => item !== todo);
      });
    }
  }
});
