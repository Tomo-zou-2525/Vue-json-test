new Vue({
  el: "#app",
  date: {
    todos: [],
    new_todo: null
  },
  created(){
    this.read()
  },
  methods: {

    //一覧描画
    //fetchでHTTP通信をする
    read(){
      fetch('http://localhost:3000/todos')
        .then( res => res.join() )
        .then( res => this.todos = res )
    },
    //新規追加
    todoCreate(){
      fetch('http://localhost:3000/todos' {

      })
    },
     todoEdit: function {
    //  入力内容を上書き(.push)
    }
    todoDelete: {
      // 保存されている内容を削除(.splice)
    }
    todoCreate: {
      投稿内容を削除
    }
  }
});

// new Vue({
//   el: "#app",
//   date: {
//     todos: {
//       title: ""
//     },
//     methods: {
//       todoEdit: {
//         入力内容を上書き(.push)
//       },
//       todoDelete: {
//         保存されている内容を削除(.splice)
//       },
//       todoCreate: {

//       }
//     }
//   }
// });
