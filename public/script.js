new Vue({
  el: "#app",
  date: {
    todos: {
      title: ""
    },
    methods: {
      todoEdit: {
        入力内容を上書き(.push)
      },
      todoDelete: {
        保存されている内容を削除(.splice)
      },
      todoCreate: {

      }
    }
  }
});
