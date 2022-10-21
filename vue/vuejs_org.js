/* 宣言的レンダリング */
const Counter = {
  data() {
    return {
      counter: 0
    }
  },
  mounted() {
    setInterval(() => {
      this.counter++
    }, 1000)
  }
}
/* {{ counter }}　を0にして、1秒毎に1ずつ増やす */

Vue.createApp(Counter).mount('#counter')

/* 宣言的レンダリング2 */
const AttributeBinding = {
  data() {
    return {
      message: 'あなたがこのページをロードしたのは、' + new Date().toLocaleString()
    }
  }
}
/* message を指定 */


Vue.createApp(AttributeBinding).mount('#bind-attribute')

/* ユーザー入力の制御1 */
const EventHandling = {
  data() {
    return {
      message: 'v-on:click　でメソッド実行！'
    }
  },
  methods: {
    reverseMessage() {
      this.message = this.message
        .split('')
        .reverse()
        .join('')
    }
  }
}
/* {{ message }}を指定して、reverseMessageメソッド　を指定 */

Vue.createApp(EventHandling).mount('#event-handling')

/* ユーザー入力の制御2 */
const TwoWayBinding = {
  data() {
    return {
      message: 'v-model　入力した文字に変わります'
    }
  }
}
/* messageを指定 */

Vue.createApp(TwoWayBinding).mount('#two-way-binding')

/* 条件分岐とループ */
const ConditionalRendering = {
  data() {
    return {
      seen: true
    }
  }
}
/* trueだと　v-if="seen"を表示。 */

Vue.createApp(ConditionalRendering).mount('#conditional-rendering')

/* 条件分岐とループ2 */
const ListRendering = {
  data() {
    return {
      todos: [
        { text: '<li v-for="todo in todos">と書くと' },
        { text: 'todos配列のデータが' },
        { text: 'ループ表示されるよ' }
      ]
    }
  }
}

Vue.createApp(ListRendering).mount('#list-rendering')


/* コンポーネントによる構成 */
const TodoItem = {
  props: ['todo'],
  template: `<li>{{ todo.text }}</li>`
}

const TodoList = {
  data() {
    return {
      groceryList: [
        { id: 0, text: '野菜' },
        { id: 1, text: 'チーズ' },
        { id: 2, text: 'ほか何でも。' }
      ]
    }
  },
  components: {
    TodoItem // 新しいコンポーネントを登録する
  }
}

// Vue アプリケーションを生成する
const app1 = Vue.createApp(TodoList)

// Vue アプリケーションをマウントする
app1.mount('#todo-list-app')


/* アプリケーションインスタンスの作成 */
/* 全ての Vue アプリケーションは createApp 関数で新しい アプリケーションインスタンス (application instance) を作成するところから始まります */

const app2 = Vue.createApp({
  /* options */
})

/* アプリケーションインスタンスは、そのアプリケーション内のコンポーネントが使えるグローバル（コンポーネント、ディレクティブ、プラグインなど）を登録するために使われます。 */

/* const app3 = Vue.createApp({})
app3.component('SearchInput', SearchInputComponent)
app3.directive('focus', FocusDirective)
app3.use(LocalePlugin) */

/* アプリケーションインスタンスが公開するほとんどのメソッドは、チェーンすることができます。 */

/* Vue.createApp({})
  .component('SearchInput', SearchInputComponent)
  .directive('focus', FocusDirective)
  .use(LocalePlugin) */

/* ルートコンポーネント */
/* ルートコンポーネントは、アプリケーションを マウント する際に、レンダリングの起点として使われます。アプリケーションは DOM 要素にマウントする必要があります。 */

const RootComponent = {
  /* オプション */
}
const app4 = Vue.createApp(RootComponent)
const vm4 = app4.mount('#app4')

/* コンポーネントインスタンスのプロパティ */

/* const app5 = Vue.createApp({
  data() {
    return { count: 4 }
  }
})

const vm5 = app5.mount('#app5')

console.log(vm5.count) // => 4 */

/* ライフサイクルフック */

Vue.createApp({
  data() {
    return { count: 1 }
  },
  created() {
    // `this` は vm インスタンスを指す
    console.log('count is: ' + this.count) // => "count is: 1"
  }
})

/* テンプレート構文　展開　生の HTML */
const RenderHtmlApp = {
  data() {
    return {
      rawHtml: '<span style="color: red">赤になるべき</span>'
    }
  }
}

Vue.createApp(RenderHtmlApp).mount('#example1')

/* データプロパティ */
/* const app6 = Vue.createApp({
  data() {
    return { count: 4 }
  }
})

const vm6 = app6.mount('#app')

console.log(vm6.$data.count) // => 4
console.log(vm6.count)       // => 4

// vm.count に値を代入すると、 $data.count も更新
vm6.count = 5
console.log(vm.$data.count) // => 5

// ... 逆もまた同様
vm6.$data.count = 6
console.log(vm.count) // => 6

/* メソッド */
const app7 = Vue.createApp({
  data() {
    return { count: 4 }
  },
  methods: {
    increment() {
      // `this` はコンポーネントインスタンスを参照
      this.count+=2
    }
  }
})

const vm7 = app7.mount('#app7')

// console.log(vm7.count) // => 4

vm7.increment()

// console.log(vm7.count) // => 5


/* Debounce (デバウンス) と Throttle (スロットル) */
/* コンポーネントのインスタンスをお互いに独立させるために、 created ライフサイクルフックに Debounce 関数を追加することができます */

/* app.component('save-button', {
  created() {
    // Lodash によるDebounce
    this.debouncedClick = _.debounce(this.click, 500)
  },
  unmounted() {
    // コンポーネントが削除されたらタイマーをキャンセル
    this.debouncedClick.cancel()
  },
  methods: {
    click() {
      // ... クリックに反応 ...
    }
  },
  template: `
    <button @click="debouncedClick">
      Save
    </button>
  `
}) */


/* 算出プロパティ 基本的な例 */
Vue.createApp({
  data() {
    return {
      author: {
        name: 'John Doe',
        books: [
          'Vue 2 - Advanced Guide',
          'Vue 3 - Basic Guide',
          'Vue 4 - The Mystery'
        ]
      }
    }
  },
  computed: {
    // 算出 getter 関数　リアクティブな依存関係の一部が変更された場合にのみ再評価される
    publishedBooksMessage() {
      // `this` は vm インスタンスを指す
      return this.author.books.length > 0 ? 'Yes' : 'No'
    }
  }
}).mount('#computed-basics')


/* 算出プロパティ 算出プロパティ vs メソッド */
Vue.createApp({
  data() {
    return {
      author: {
        name: 'John Doe',
        books: [
          'Vue 2 - Advanced Guide',
          'Vue 3 - Basic Guide',
          'Vue 4 - The Mystery'
        ]
      }
    }
  },
  methods: {
    // メソッドは、再レンダリングが起こるたびに常に関数を実行します。
    calculateBooksMessage() {
      return this.author.books.length > 0 ? 'Yes' : 'No'
    }
  }

}).mount('#computed-basics2')


/* 算出 Setter 関数 */
/* Vue.createApp({
  data() {
    return {
      names: [John,Doe]
      }
    },
  computed: {
    fullName: {
      // getter 関数
      get() {
        return this.firstName + ' ' + this.lastName
      },
      // setter 関数
      set(newValue) {
        const names = newValue.split(' ')
        this.firstName = names[0]
        this.lastName = names[names.length - 1]
      }
    }
  }
}).mount('#computed-basics3')

vm.fullName = 'John Doe' */


/* ウォッチャ */

const watchExampleVM = Vue.createApp({
  data() {
    return {
      question: '',
      answer: '質問には通常、疑問符が含まれます。'
    }
  },
  watch: {
    // question が変わるたびに、この関数が実行される
    question(newQuestion, oldQuestion) {
      if (newQuestion.indexOf('?') > -1) {
        this.getAnswer()
      }
    }
  },
  methods: {
    getAnswer() {
      this.answer = 'Thinking...'
      axios
        .get('https://yesno.wtf/api')
        .then(response => {
          this.answer = response.data.answer
        })
        .catch(error => {
          this.answer = 'Error! Could not reach the API. ' + error
        })
    }
  }
}).mount('#watch-example')


/* 算出プロパティ vs 監視プロパティ */

const vm8 = Vue.createApp({
  data() {
    return {
      firstName: 'Foo',
      lastName: 'Bar',
      fullName: 'Foo Bar'
    }
  },
  watch: {
    firstName(val) {
      this.fullName = val + ' ' + this.lastName
    },
    lastName(val) {
      this.fullName = this.firstName + ' ' + val
    }
  }
}).mount('#demo')
/* 上記のコードは命令的だし冗長ですね。算出プロパティで書き換えたものと比べてみましょう */

const vm9 = Vue.createApp({
  data() {
    return {
      firstName: 'Foo2',
      lastName: 'Bar2'
    }
  },
  computed: {
    fullName() {
      return this.firstName + ' ' + this.lastName
    }
  }
}).mount('#demo2')
/* ずっといいですよね？ */


/* HTML クラスのバインディング　オブジェクト構文 */

const htmlBinding = {
  data() {
    return {
      isActive: true,
      hasError: true,
      error: null,
      classObject: {
        active2: true,
        'text-danger2': true
      }
    }
  },
  computed: {
    classObject2() {
      return {
        active: this.isActive && !this.error,
        'text-danger': this.error && this.error.type === 'fatal'
      }
    }
  }
}

Vue.createApp(htmlBinding).mount('#html-binding')

/* HTML クラスのバインディング　配列構文 */

const htmlBinding2 = {
  data() {
    return {
      activeClass: 'active',
      errorClass: 'text-danger',
      isActive: true
    }
  }
}

Vue.createApp(htmlBinding2).mount('#html-binding2')

/* HTML クラスのバインディング　コンポーネントにおいて */

const app8 = Vue.createApp({
  data() {
    return {
      isActive: true,
    }
  }
})

app8.component('my-component', {
  template: `<p class="foo bar">クラスは追加されます</p>`
})

app8.component('my-component2', {
  template: `
    <p :class="$attrs.class">$attrs コンポーネントプロパティでbazクラスを受け取る定義</p>
    <span>ここは受け取らない</span>
  `
})

app8.mount('#app8')

/* インラインスタイルのバインディング　オブジェクト構文 */

const app9 = Vue.createApp({
  data() {
    return {
      activeColor: 'red',
      fontSize: 30,
      styleObject: {
        color: 'blue',
        fontSize: '13px'
      },
      baseStyles: {
        color: 'green'
      },
      overridingStyles: {
        fontSize: '15px'
      }
    }
  }
})

app9.mount('#app9')


/* 条件付きレンダリング　v-if */

const app10 = Vue.createApp({
  data() {
    return {
      awesome: false,
      ok: true,
      type: 'C',
      vShow: true
    }
  }
})

app10.mount('#app10')


/* リストレンダリング
v-for で配列に要素をマッピングする */

Vue.createApp({
  data() {
    return {
      items: [{ message: 'items配列のmessage1' }, { message: 'items配列のmessage2' }]
    }
  }
}).mount('#array-rendering')

Vue.createApp({
  data() {
    return {
      parentMessage: '親スコープのプロパティ',
      items: [{ message: 'items配列のmessage1' }, { message: 'items配列のmessage2' }]
    }
  }
}).mount('#array-with-index')


/* オブジェクトの v-for */

Vue.createApp({
  data() {
    return {
      myObject: {
        title: 'myObjectの値を',
        author: 'ただ順に',
        publishedAt: 'v-for表示'
      }
    }
  }
}).mount('#v-for-object')

Vue.createApp({
  data() {
    return {
      myObject: {
        title: '2つ目の引数として',
        author: 'プロパティ名（すなわちキー）も',
        publishedAt: '提供できます'
      }
    }
  }
}).mount('#v-for-object2')

Vue.createApp({
  data() {
    return {
      myObject: {
        title: '3つ目の引数として',
        author: 'index も',
        publishedAt: '提供できます'
      }
    }
  }
}).mount('#v-for-object3')


/* フィルタ/ソートされた結果の表示 */

Vue.createApp({
  data() {
    return {
      numbers: [ 1, 2, 3, 4, 5 ]
    }
  },
  computed: {
    evenNumbers() {
      return this.numbers.filter(number => number % 2 === 0)
    }
  }
}).mount('#numbers-filter')

Vue.createApp({
  data() {
    return {
      sets: [[ 1, 2, 3, 4, 5 ], [6, 7, 8, 9, 10]]
    }
  },
  methods: {
    even(numbers) {
      return numbers.filter(number => number % 2 === 0)
    }
  }
}).mount('#numbers-filter2')


/* 範囲付き v-for */

Vue.createApp({}).mount('#range')

/* template での v-for */

Vue.createApp({
  data() {
    return {
      parentMessage: 'プレゼンテーションスペース',
      items: [{ msg: 'items配列のmsg1' }, { msg: 'items配列のmsg2' }]
    }
  }
}).mount('#template-vfor')

/* v-for と v-if */

Vue.createApp({
  data() {
    return {
      todos: [{ name: 'todos配列のname1' }, { name: 'todos配列のname2' }]
    }
  }
}).mount('#vfor-and-vif')

/* コンポーネントと v-for */

const app11 = Vue.createApp({
  data() {
    return {
      newTodoText: '',
      todos: [
        {
          id: 1,
          title: 'Do the dishes'
        },
        {
          id: 2,
          title: 'Take out the trash'
        },
        {
          id: 3,
          title: 'Mow the lawn'
        }
      ],
      nextTodoId: 4
    }
  },
  methods: {
    addNewTodo() {
      this.todos.push({
        id: this.nextTodoId++,
        title: this.newTodoText
      })
      this.newTodoText = ''
    }
  }
})

app11.component('todo-item', {
  template: `
    <li>
      {{ title }}
      <button @click="$emit('remove')">Remove</button>
    </li>
  `,
  props: ['title'],
  emits: ['remove']
})

app11.mount('#todo-list-example')

/* イベントハンドリング */
/* イベントの購読 */

Vue.createApp({
  data() {
    return {
      counter: 0
    }
  }
}).mount('#basic-event')

/* メソッドイベントハンドラ */

Vue.createApp({
  data() {
    return {
      name: 'Vue.js'
    }
  },
  methods: {
    greet(event) {
      // メソッド内の `this` は、 Vue インスタンスを参照します
      alert('こんにちは' + this.name + '!')
      // `event` は、ネイティブ DOM イベントです
      if (event) {
        alert(event.target.tagName)
      }
      // イベントが発生した場所のタグ名を表示
    }
  }
}).mount('#event-with-method')

/* インラインメソッドハンドラ */

Vue.createApp({
  methods: {
    say(message) {
      alert(message)
    }
  }
}).mount('#inline-handler')

// ...
/* methods: {
  warn(message, event) {
    // ネイティブイベントを参照しています
    if (event) {
      event.preventDefault()
    }
    alert(message)
  }
} */

/* 複数イベントハンドラ */

// ...
/* methods: {
  one(event) {
    // one($event)のハンドラーロジック
  },
  two(event) {
    // two($event)のハンドラーロジック
  }
} */


/* フォーム入力バインディング */
/* 基本的な使い方 */
/* テキスト */

Vue.createApp({
  data() {
    return {
      message: ''
    }
  }
}).mount('#v-model-basic')

/* 複数行テキスト */

Vue.createApp({
  data() {
    return {
      message: ''
    }
  }
}).mount('#v-model-textarea')

/* チェックボックス */

Vue.createApp({
  data() {
    return {
      checked: false
    }
  }
}).mount('#v-model-checkbox')

Vue.createApp({
  data() {
    return {
      checkedNames: []
    }
  }
}).mount('#v-model-multiple-checkboxes')

/* ラジオ */

Vue.createApp({
  data() {
    return {
      picked: ''
    }
  }
}).mount('#v-model-radiobutton')

/* セレクト */

Vue.createApp({
  data() {
    return {
      selected: ''
    }
  }
}).mount('#v-model-select')

Vue.createApp({
  data() {
    return {
      selected: ''
    }
  }
}).mount('#v-model-select2')

Vue.createApp({
  data() {
    return {
      selected: 'まだ選べてないよ',
      options: [
        { text: 'いちご', value: 'いちご' },
        { text: 'みかん', value: 'みかん' },
        { text: 'ぶどう', value: 'ぶどう' }
      ]
    }
  }
}).mount('#v-model-select-dynamic')

/* チェックボックス */

Vue.createApp({
  data() {
    return {
      checked: 'いいえ'
    }
  }
}).mount('#v-model-checkbox2')

/* コンポーネントの基本 */
/* 基本例 */

// Vue アプリケーションを作成します
const app12 = Vue.createApp({})

// グローバルな button-counter というコンポーネントを定義します
app12.component('button-counter', {
  data() {
    return {
      count: 0
    }
  },
  template: `
    <button @click="count++">
      あなたはボタンを {{ count }} 回クリックしました
    </button>`
})

app12.mount('#components-demo')

/* プロパティを用いた子コンポーネントへのデータの受け渡し */
/* 子コンポーネントのイベントを購読する */

const App = {
  data() {
    return {
      posts: [
        { id: 1, title: 'Vueとの旅' },
        { id: 2, title: 'Vueでブログ' },
        { id: 3, title: 'なぜVueはそんなに楽しいの' }
      ],
      postFontSize: 1
    }
  }
}

const app13 = Vue.createApp(App)

app13.component('blog-post', {
  props: ['title'],
  template: `
    <div class="blog-post">
      <h6>{{ title }}</h6>
      <button @click="$emit('enlargeText')">
        文字を大きくする
      </button>
    </div>
  `
})

app13.mount('#blog-posts-events-demo')

/* methods: {
  onEnlargeText(enlargeAmount) {
    this.postFontSize += enlargeAmount
  }
} */

/* コンポーネントで v-model を使う */

/* app.component('custom-input', {
  props: ['modelValue'],
  emits: ['update:modelValue'],
  template: `
    <input
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
    >
  `
}) */

/* スロットによるコンテンツ配信 */

const app14 = Vue.createApp({})

app14.component('alert-box', {
  template: `
    <div class="error-alert-box">
      <strong>Error!</strong>
      <slot></slot>
    </div>
  `
})

app14.mount('#slots-demo')

/* 動的なコンポーネント */

const app15 = Vue.createApp({
  data() {
    return {
      currentTab: 'Home',
      tabs: ['Home', 'Posts', 'Archive']
    }
  },
  computed: {
    currentTabComponent() {
      return 'tab-' + this.currentTab.toLowerCase()
    }
  }
})

app15.component('tab-home', {
  template: `<div class="demo-tab">Home component</div>`
})
app15.component('tab-posts', {
  template: `<div class="demo-tab">Posts component</div>`
})
app15.component('tab-archive', {
  template: `<div class="demo-tab">Archive component</div>`
})

app15.mount('#dynamic-component-demo')

/* DOM テンプレートパース時の注意 */