// Ajaxを使った非同期通信

// XMLHttpRequestオブジェクトを作成する
let request = new XMLHttpRequest();

request.onreadystatechange = function(){
  // サーバからのレスポンスの受信が完了した時にコールバック関数を呼びだす
  if (request.readyState == 4){
    // サーバとの通信が正常に行われたかどうかを確認する
    if (request.status == 200){
      // 受信したデータを取り出す
      let data = request.responseText;
      console.log(data);

      // サーバから受信したテキストをHTMLページ内に表示する
      let node = document.getElementById("result");
      node.innerHTML = request.responseText;
    }
  }
}

// HTTPリクエストを初期化する(open)
// open(メソッド, URL[, 非同期[, ユーザー名[, パスワード]]])
request.open('GET', 'https://jimmy-waiwai.github.io/Wao-VsCode-Git/javascript-fetch/data.csv', true);

// HTTPリクエストをサーバーに送信する(send)
// GET メソッドを使用する場合は通常データはサーバに送信しないので null を指定します。
request.send(null);
