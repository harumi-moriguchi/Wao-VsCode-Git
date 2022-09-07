// JavaScript 学習レッスンⅤ

// ファイルを分割しよう

// 1.ファイルの分割（1）
// 2.ファイルの分割（2）エクスポート（出力）インポート（読込）

class Animal {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log("こんにちは");
  }

  info() {
    this.greet();
    console.log(`名前は${this.name}です`);
    console.log(`${this.age}歳です`);
  }
}

// Animalクラスをエクスポート
export default Animal;
