fetch("https://jimmy-waiwai.github.io/Wao-VsCode-Git/javascript-fetch/data.json")
  .then(response => {
    return response.json();
  })
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.log("失敗しました");
});

// response.json() – レスポンスを JSON オブジェクトとしてパースします
// response.text() – レスポンスをテキストとして返します
// response.formData() – FormData オブジェクト(form/multipart encoding) として返します
// response.blob() – Blob (型付きのバイナリデータ) としてレスポンスを返します
// response.arrayBuffer() – ArrayBuffer (純粋なバイナリデータ) としてレスポンスを返します
