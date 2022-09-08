/* window.addEventListener('DOMContentLoaded', function(){

  fetch('https://jimmy-waiwai.github.io/Wao-VsCode-Git/javascript-fetch/data.json') // (1) リクエスト送信
  .then(response => response.json()) // (2) レスポンスデータを取得
  .then(data => console.log(data));
}); */

(await fetch("https://jimmy-waiwai.github.io/Wao-VsCode-Git/javascript-fetch/data.json")).json();