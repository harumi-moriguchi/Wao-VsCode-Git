// JavaScript 学習レッスンⅤ

// ファイルを分割しよう

// 1.ファイルの分割（1）
// 2.ファイルの分割（2）エクスポート（出力）インポート（読込）

// 6.パッケージ（1）
// JavaScriptの世界では、誰かが作った便利なプログラムがパッケージという形で公開されています。このパッケージを自分のプログラムの中に組み込んで使うことができます。

// chalkパッケージをインポート（コンソールの文字色を変えられるパッケージ）
import chalk from "chalk";

// Animalクラスをインポート　拡張子の「.js」は省略可
import Animal from "./animal";

class Dog extends Animal {
  constructor(name, age, breed) {
    super(name, age);
    this.breed = breed;
  }

  info() {
    this.greet();

    console.log(chalk.yellow(`名前は${this.name}です`));
    // コンソールの文字の色をyellowに

    console.log(chalk.bgCyan(`犬種は${this.breed}です`));
    // コンソールの文字の背景色をCyanに

    console.log(`${this.age}歳です`);
    
    const humanAge = this.getHumanAge();
    console.log(`人間年齢で${humanAge}歳です`);
  }

  getHumanAge() {
    return this.age * 7;
  }
}

// Dogクラスをエクスポート
export default Dog;
