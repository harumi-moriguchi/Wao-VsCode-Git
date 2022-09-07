// JavaScript 学習レッスンⅤ

// ファイルを分割しよう

// 1.ファイルの分割（1）
// 2.ファイルの分割（2）エクスポート（出力）インポート（読込）
// 3.値のエクスポート
// クラスのエクスポートを行いましたが、エクスポートできるのはクラスだけではありません。文字列や数値や関数など、どんな値でもエクスポートが可能です。

// Dogクラスをインポート　拡張子の「.js」は省略可
import Dog from "./dog";

const dog = new Dog("レオ", 4, "チワワ");

// 定数dogをエクスポート
export default dog;

// export defaultはデフォルトエクスポートと呼ばれ、そのファイルがインポートされると自動的に「export default 値」の値がインポートされます。そのためエクスポート時の値の名前と、インポート時の値の名前に違いがあっても問題ありません。
// デフォルトエクスポートは1ファイル1つの値のみ使えます。このファイルをインポートする際には、デフォルトエクスポートの値を自動でインポートするため、値が1つのみとなっています。

// 4.名前付きエクスポート
// 5.相対パス

import Dog from "../class/dog";
// 1つ上の階層に戻る場合はドット2つの「../」を用います。

const dog1 = new Dog("レオ", 4, "チワワ");
const dog2 = new Dog("ベン", 2, "プードル");

// 定数dog1, dog2をエクスポート
export {dog1, dog2};


// 7.パッケージ（2）
// readline-syncというパッケージを導入すると、コンソールへの値の入力と、その入力された値をプログラムの中で使うことができるようになります。

// readline-syncをインポート
import readlineSync from "readline-sync";

import Dog from "../class/dog";

const dog1 = new Dog("レオ", 4, "チワワ");

// readlineSync.questionを使って書き換え
const name = readlineSync.question("名前を入力してください: ");

// 年齢のように整数を入力してほしい場合はreadlineSync.questionInt
const age = readlineSync.questionInt("年齢を入力してください: ");

// readlineSync.questionを使って書き換え
const breed = readlineSync.question("犬種を入力してください: ");

const dog2 = new Dog(name, age, breed);

export { dog1, dog2 };