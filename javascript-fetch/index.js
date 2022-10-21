// csvをオブジェクトに

// csvデータ取り込み
const response = await fetch('./data.csv');

// テキストデータとして取り込み
const text = await response.text();

// 改行で分けて配列に
const array = text.split('\n');

// 2番目の要素を配列に（プロパティ名用）
const headArray = array[2].split(",");

// csvDataオブジェクト作成
let csvData = {};

// 3番目の要素から要素の数だけ繰り返し
for (let i = 3; i < array.length; ++i) {

  // ,で分けて配列に
  let values = array[i].split(",");
  
  // valuesObjオブジェクト作成
  let valuesObj = {};

  // 0番目の要素からheadArray配列（プロパティ名）の数だけ繰り返し
  for (let j = 0; j < headArray.length; ++j) {

    // プロパティ名と値を指定
    let key = headArray[j];
    let value = values[j];

    // valuesObjオブジェクトに代入
    valuesObj[key] = value;
  } 

  // 値の2番目の要素（県名英語）を取り込み
  let pref = values[2];

  // csvDataオブジェクトに代入
  csvData[pref] = valuesObj;

} 

console.log(csvData);

const file_area = document.getElementById('file_area');
//csvDataを表示
file_area.innerHTML = csvData;

const file_area2 = document.getElementById('file_area2');
//秋田のpoint_bodyを表示
file_area2.innerHTML = csvData.akita.point_body;


/* vueで活用する */
const ListRendering = {
  data() {
    return {
      vueData: csvData
    }
  }
}

Vue.createApp(ListRendering).mount('#list-rendering')

/* プロパティを用いた子コンポーネントへのデータの受け渡し */

const app13 = Vue.createApp(ListRendering)

app13.component('blog-post', {
  props: {
    title: String
  },
  template: `<h6>{{ title }}</h6>`
})

app13.mount('#blog-post-demo')