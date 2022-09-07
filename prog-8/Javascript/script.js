// JavaScript 学習レッスンⅠ

// 文字列と数値

// 1.JavaScript（ES6）を学ぼう
// 2.console.log()

console.log("Hello World");
// コンソールに出力
console.log("にんじゃわんこ");
// console.log("この行をコメントアウトしてください");


// 3.計算してみよう

// 5と3を足した値を出力してください
console.log(5 + 3);

// 20から8を引いた値を出力してください
console.log(20 - 8);

// "4 + 5" を文字列として出力してください
console.log("4 + 5");


// 4.計算してみよう(2)

// 8と4をかけた結果を出力してください
console.log(8 * 4);

// 24を4で割った結果を出力してください
console.log(24 / 4);

// 7を2で割った余りを出力してください
console.log(7 % 2);


// 5.文字列の連結

// 「ひつじ」と「仙人」を連結してコンソールに出力してください
console.log("ひつじ" + "仙人");

// 文字列の「20」と「15」を連結してコンソールに出力してください
console.log("20" + "15");


// 6.変数とは(letで定義)

// 変数nameを定義し、「にんじゃわんこ」を代入してください
let name6 = "にんじゃわんこ";

// 変数nameの値を出力してください
console.log(name6);


// 7.変数の役割

// 変数lengthを定義してください
let length = 5;

// 変数lengthの値を出力してください
console.log(length);

// 変数lengthを用いて、円の面積を出力してください
console.log(length * length * 3);


// 8.変数の値の更新（1）

let name8 = "にんじゃわんこ";
console.log(name8);

// 変数nameの値を"とりずきん"に更新してください
name8 = "とりずきん";

// 変数nameの値を出力してください
console.log(name8);


// 9.変数の値の更新（2）

let number9 = 7;
console.log(number9);

// 変数numberの値に3を加えてください
number9 += 3;
console.log(number9);

// 変数numberの値を2で割ってください
number9 /= 2;
console.log(number9);


// 10.定数とは(constで定義)
// 変数(let)は1度代入した値を更新することができましたが、定数(const)は値を更新することはできません。

const language = "フランス語";

// 定数languageの値を出力してください
console.log(language);

// 定数languageを用いて、「〇〇を話せます」と出力してください
console.log(language + "を話せます");


// 11.テンプレートリテラル

const name11 = "にんじゃわんこ";
const age11 = 14;

// 文字列の中で「${定数}」とすることで、定数や変数を含めることができます。この時、文字列全体をバッククォーテーション（`）で囲む必要があります。
console.log(`ぼくの名前は${name11}です`);
console.log(`今は${age11}歳です`);


// 12.if文
// 末尾のセミコロンは不要

const level = 12;

if(level > 10) {
  console.log("レベルが10より大きいです");
}


// 13.真偽値と比較演算子（1）                                                                       

const age13 = 24;

console.log(age13 >= 20);
// true

console.log(age13 < 20);
// false

// ageの値が20以上の場合に、「私は20歳以上です」と出力
if(age13 >= 20) {
  console.log("私は20歳以上です");
}


// 14.真偽値と比較演算子（2）

// 「a == b」はaとbが等しければtrue、等しくなければfalseになります。「a != b」はその逆です。
// 厳密等価演算子を使うと、文字列「"12"」と数値「12」を異なるデータとして扱うことができます。特に理由がなければ、厳密に比較できる厳密等価演算子を利用するようにしましょう。
// 「a === b」はaとbが等しければtrue、等しくなければfalseになります。「a !== b」はその逆です。

const password = "ninjawanko";

// passwordの値が"ninjawanko"の場合、「ログインに成功しました」と出力してください
if(password === "ninjawanko") {
  console.log("ログインに成功しました");
}

// passwordの値が"ninjawanko"でない場合、「パスワードが間違っています」と出力してください
if(password !== "ninjawanko") {
  console.log("パスワードが間違っています");
}


// 15.else

const age15 = 17;

// 条件式が成り立たない場合に「私は20歳未満です」と出力してください
if (age15 >= 20) {
  console.log("私は20歳以上です");
} else {
  console.log("私は20歳未満です");
}


// 16.else if

const age16 = 17;

// ageの値が10以上20未満のとき、「私は20歳未満ですが、10歳以上です」と出力してください
if (age16 >= 20) {
  console.log("私は20歳以上です");
} else if(age16 >= 10) {
  console.log("私は20歳未満ですが、10歳以上です");
} else {
  console.log("私は10歳未満です");
}


// 17.複数の条件式
// 「かつ」は「&&」で表します。「または」は「||」で表します。

const age17 = 24;

// 定数ageの値が20以上かつ30未満ならtrue
if(age17 >= 20 && age17 < 30) {
  console.log("私は20代です");
}

// 定数ageの値が20未満または30以上ならtrue
if(age17 < 20 || age17 >= 30) {
  console.log("私は20代ではありません");
}


// 18.switch文（1）
// 19.switch文（2）
// 定数colorの値によって処理を分岐「switch(条件の値){ 処理 }」
// switch文ではbreakが非常に重要です。breakとはswitch文を終了する命令です。breakがないと、合致したcaseの処理を行った後、その次のcaseの処理も実行してしまいます。

const n = 2;

switch (n) {
  case 1:
    console.log("大吉です");
    break;

  case 2:
    console.log("吉です");
    break;
  
  case 3:
    console.log("小吉です");
    break;

  // どのcaseにも合致しなかったときの処理を追加してください
  default:
    console.log("凶です");
    break;
  
}


// JavaScript 学習レッスンⅡ

// 繰り返し処理

// 1.変数の復習

// 変数numberを定義してください
let number1 = 0;

// 変数numberの値を出力し、その後に変数numberに1を加えてください
console.log(number1);// 0
number1 += 1;

// 上述の2行のコードを4回、貼り付けてください
console.log(number1);// 1
number1 += 1;
console.log(number1);// 2
number1 += 1;
console.log(number1);// 3
number1 += 1;
console.log(number1);// 4
number1 += 1;
console.log(number1);// 5


// 2.while文
// while文は「条件式がtrueの間、{ }内の処理を繰り返す」ことができます。 {}の後にセミコロンは不要です。

let number2 = 1;

while(number2 <= 100) {
  console.log(number2);
  number2 += 1;
}
// while文を用いる場合には、条件式の部分がいつかはfalseになり、繰り返し処理が終わる必要があることに注意してください。
// 変数numberの値を更新するコードを書き忘れると、無限ループになります。


// 3.for文
// for文では「変数の定義」「条件式」「変数の更新」の3つを括弧の中に書きます。括弧の中ではそれぞれをセミコロン（;）で区切ります。

for(let number = 1; number <= 100; number++){
  console.log(number);
}


// 4.繰り返し処理のまとめ

for (let number = 1; number <= 100; number++) {
  
  // numberが3の倍数の時に「3の倍数です」、そうでないときは数字を出力
  if (number % 3 === 0) {
    console.log("3の倍数です");
  } else {
    console.log(number);
  }

}


// 5.配列とは

// 定数animalsに、指定された配列を代入してください
const animals = ["dog","cat","sheep"];

// 定数animalsを出力して下さい
console.log(animals);
// ["dog","cat","sheep"]と出力


// 6.配列の要素の取得
// 配列の要素にはそれぞれインデックス番号という番号がついています。インデックス番号は、0から始まることに注意しましょう。

console.log(animals[0]);
// dog

console.log(animals[2]);
// sheep


// 7.配列の要素の更新

// 配列animalsの3つ目の要素を「rabbit」に更新
animals[2] = "rabbit";

console.log(animals[2]);
// rabbit


// 8.配列と繰り返し（1）

// for文を用いて、配列の値を順にコンソールに出力してください
for (let i = 0; i < 3; i++) {
  console.log(animals[i]);
}


// 9.配列と繰り返し（2）
// 配列.lengthとすることで、配列の要素数を取得できます。

const animals = ["dog", "cat", "sheep", "rabbit", "monkey", "tiger", "bear", "elephant"];

// lengthを用いて配列の要素の数を出力してください
console.log(animals.length);

// lengthを用いて条件式を書き換えてください
for (let i = 0; i < animals.length; i++) {
  console.log(animals[i]);
}


// 10.オブジェクトとは
// オブジェクトは、{プロパティ1: 値1, プロパティ2: 値2}のようにつくります。配列は要素を[]で囲みましたが、オブジェクトは{}で囲みます。

const character = {name : "にんじゃわんこ", age : 14};

console.log(character);
// {name : "にんじゃわんこ", age : 14}


// 11.オブジェクトの値の取得・更新
// オブジェクトの値を取り出すには、「オブジェクト.プロパティ名」のようにします。
// 「オブジェクト.プロパティ名 = 新しい値」とすることでオブジェクトの値を更新することができます。

console.log(character.name);
// にんじゃわんこ

// characterのageの値を「20」に更新
character.age = 20 ;

console.log(character);
// {name : "にんじゃわんこ", age : 20}


// 12.オブジェクトを要素に持つ配列（1）
// 配列の要素には、文字列や数値だけでなく、オブジェクトも使うことができます。

const characters12 = [
  {name: "にんじゃわんこ", age: 14},
  {name: "ひつじ仙人", age: 1000}
];

console.log(characters12[0]);
// {name: "にんじゃわんこ", age: 14}

console.log(characters12[1].name);
// ひつじ仙人


// 13.オブジェクトを要素に持つ配列（2）

const characters13 = [
  {name: "にんじゃわんこ", age: 14},
  {name: "ひつじ仙人", age: 100},
  {name: "ベイビーわんこ", age: 5},
];

// 変数iの値がcharactersの要素数より小さい時は繰り返す
for (let i = 0; i < characters13.length; i++) {
  console.log("--------------------");
  
  // 定数characterがi番目のcharactersだと定義
  const character = characters13[i];
  
  // 名前はにんじゃわんこです（[0]番目の時）
  console.log("名前は" + character.name + "です");
  
  // 14歳です（[0]番目の時）
  console.log(character.age + "歳です");
  
}


// 14.undefinedとは
// 配列の存在しないインデックス番号の要素や、オブジェクトの存在しないプロパティの要素を取得しようとすると、undefined と出力されます。
// 15.undefinedの対応
// undefined をif文の条件式に使って、存在しない時の対応ができます。

const characters14 = [
  {name: "にんじゃわんこ", age: 14},
  {name: "ひつじ仙人", age: 100},
  {name: "ベイビーわんこ", age: 5},
  {name: "とりずきん"}
];
// [3]番目のageがない

for (let i = 0; i < characters14.length; i++) {
  console.log("--------------------");
  
  const character = characters14[i];
  
  console.log(`名前は${character.name}です`);

  console.log(`${character.age}歳です`);
  // [3]番目の時undefinedになる
  
  // if文でundefinedの時の対応
  if (character.age === undefined) {
    console.log("年齢は秘密です");
  } else {
    console.log(`${character.age}歳です`);
  }
  
}


// 16.総合演習(1)
// オブジェクトの値の中にオブジェクトもあり。「オブジェクト名.プロパティ.プロパティ」のように呼び出します。
// 17.総合演習(2)
// オブジェクトの値の中に配列もあり。

const cafe = {
  name: "Progateカフェ",
  businessHours: {
    opening : "10:00(AM)",
    closing : "8:00(PM)"
  },
  menus: ["コーヒー","紅茶","チョコレートケーキ"]
};

console.log(`店名:${cafe.name}`);
// 店名:Progateカフェ

console.log(`営業時間:${cafe.businessHours.opening}から${cafe.businessHours.closing}`);
// 営業時間:10:00(AM)から8:00(PM)

console.log(`----------------------------`);
console.log("おすすめメニューはこちら");

// for文を用いて配列menusの中身を表示させてください
for (let i = 0; i < cafe.menus.length; i++) {
  console.log(cafe.menus[i]);
}


// JavaScript 学習レッスンⅢ

// 関数を学ぼう

// 1.関数とは（1）
// 2.関数とは（2）

// 定数helloに関数を代入
const hello = function() {
  console.log("こんにちは！");
  console.log("私の名前ははるみです");
};

// 定数helloに代入された関数を呼び出し
hello();


// 3.アロー関数
// 「function()」の部分を「() =>」としても、これまでと同じように関数を定義することができます。この関数の書き方のことを、特別にアロー関数と呼びます。
// アロー関数では、このこと以外は定義方法は変わりません。また、呼び出し方もこれまで学習してきた関数と変わりません。

// 定数greet3にアロー関数を代入
const greet3 = () => {
  console.log("こんにちは！");
};

greet3();
// こんにちは！


// 4.引数とは
// 引数（ひきすう）とは関数に与える追加情報のようなものです。「(引数名) =>」と括弧の中に引数名を書くことで引数を受け取ることができます。
// 関数を呼び出すときに「定数名(値)」と値を渡すことで、関数の中でその値を利用することができます。

const greet = (name) => {
  console.log(`こんにちは、${name}さん`);
};

greet("ひつじ仙人");
// こんにちは、ひつじ仙人さん


// 5.複数の引数を受け取る関数
// 関数は引数を複数受け取ることもできます。()の中に受け取る引数をコンマ(,)で区切って並べることで、複数の引数を指定することができます。
// 引数は、左から順番に「第1引数、第2引数、...」と呼びます。
// 複数の引数に値を渡して関数を呼び出すには、定義するときと同じように、コンマ(,)を用います。
// 渡す引数の順番と関数を定義したときの引数の順番は対応しているので、関数を呼び出すときは引数の順番に気をつけましょう。

const add = (number1, number2) => {
  console.log(number1 + number2);
};

add(5, 7);
// 12


// 6.戻り値とは
// 呼び出し元で受け取る関数の処理結果を戻り値（もどりち）と呼び、このことを「関数が戻り値を返す」と言います。
// 関数の中で「return 値」と書くことで、関数はその値を戻り値として呼び出し元に返します。
// 関数の呼び出し部分を定数に代入することもできます。

const half = (number) => {
  return number / 2;
};

const result = half(130);

console.log(`130の半分は${result}です`);
// 130の半分は65です


// 7.戻り値の活用
// 戻り値も引数と同様に、様々な値を用いることができます。
// 例えば条件式をreturnすると、真偽値（trueまたはfalse）を返すことができます。
// returnは、戻り値を返すだけでなく、関数の処理を終了させる性質も持っています。よって、returnの後にある関数内の処理は実行されませんので注意しましょう。

const check = (number) => {
  return number % 3 === 0;
  // numberが3の倍数かどうかを（trueまたはfalse）で戻り値として返す
  console.log(check(123)); // returnの後にある関数は実行されない
};

if (check(123)) {
  console.log("3の倍数です");
} else {
  console.log("3の倍数ではありません");
}


// 8.スコープ
// 定数や変数の使用できる範囲のことをスコープと呼びます。スコープは、定数や変数を定義した場所によって異なります。

const name = "ひつじ仙人";

const introduce8 = () => {

  const name = "にんじゃわんこ";
  console.log(name);
  
};

introduce8();
// にんじゃわんこ

console.log(name);
// ひつじ仙人


// 9.総合演習

const toMinutes = (hour, minute) => {
  return hour * 60 + minute;
}

const result9 = toMinutes(3, 20);

console.log(`${result9}分`);
// 200分


// JavaScript 学習レッスンⅣ

// クラスの基本

// 1.オブジェクトの復習
// オブジェクトは {プロパティ:値,プロパティ:値,プロパティ:値　…　}
// (定数名.プロパティ名) で値を取得
// オブジェクトの「値」の部分には、関数を用いることもできます。また、その関数を呼び出すには、「定数名.プロパティ名()」とします。()を忘れないようにしましょう。

const animal1 = {
  name:"レオ",
  age: 3,
  greet: () => {
    console.log("こんにちは");
  }
}

console.log(animal1.name);
// レオ

animal1.greet();
// こんにちは


// 2.クラスとは
// 効率よくオブジェクトを作成していくための方法として、最初に「設計図」を用意する方法があります。「設計図」のことをJavaScriptでは「クラス」と呼びます。
// 図のように「class クラス名」とすることで新しくクラスを用意できます。なお、クラス名は基本的に大文字から始めるようにしましょう。

// 3.インスタンスの生成
// クラスからオブジェクトを生成するには、図のように「new クラス名()」とします。
// cクラスから生成したオブジェクトは特別にインスタンスと呼びます。

// 新しくAnimalクラスを用意
class Animal {
}

// Animalクラスのインスタンスを定数animalに代入
const animal3 = new Animal();

console.log(animal3);
// Animal {}


// 4.コンストラクタ（1）
// クラスにはコンストラクタと呼ばれる機能が用意されています。コンストラクタはインスタンスを生成するときに実行したい処理や設定を追加するための機能です。クラスの中括弧 { } 内に「constructor() { }」と記述します。
// コンストラクタの中に書いた処理はインスタンスが生成された直後に実行されます。

class Animal {
  constructor() {
    console.log("インスタンスを生成しました");
  }
  
}

const animal4 = new Animal();
// インスタンスを生成しましたと出力


// 5.コンストラクタ（2）
// コンストラクタの中で「this.プロパティ = 値」とすることで、生成されたインスタンスにプロパティと値を追加することができます。
// コンストラクタの中で追加した値は「インスタンス.プロパティ」とすることでクラスの外で使用することができます。

class Animal {
  constructor() {
    this.name = "レオ";
    this.age =  3;
  }
  // 生成されたインスタンスにプロパティと値を追加
}

const animal5 = new Animal();

console.log(`名前: ${animal5.name}`);
// 名前: レオ

console.log(`年齢: ${animal5.age}`);
// 年齢: 3


// 6.コンストラクタ（3）
// コンストラクタでは、「学習コース Ⅲ」で学んだ関数と同じように、引数を受け取ることが可能です。
// 「constructor」の後の括弧「( )」内に引数名を記述することで、その引数をコンストラクタの処理内で使用できます。

class Animal {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

const animal6 = new Animal("モカ", 8);

console.log(`名前: ${animal6.name}`);
// 名前: モカ
console.log(`年齢: ${animal6.age}`);
// 年齢: 8


// 7.メソッド（1）
// メソッドはクラスの中で定義します。「メソッド名() { }」とすることでメソッドは定義できます。
// メソッドは関数と似たようなもので、中括弧「{ }」の中にそのメソッドで行いたい処理を記述します。
// メソッドは、そのクラスから生成したインスタンスに対して呼び出します。
// 具体的には、以下の図のように「インスタンス.メソッド名()」とすることでそのメソッドを呼び出し、処理を実行することができます。

// 8.メソッド（2）
// メソッド内でインスタンスの値を使用するには、「this」という特殊な値を用いて、「this.プロパティ名」とします。

// 9.メソッド内でのメソッド呼び出し
// メソッド内で他のメソッドを呼び出すことも可能です。メソッド内で「this.メソッド名()」とすることで、同じクラスの他のメソッドを使うことができます。

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
    // こんにちは

    console.log(`名前は${this.name}です`);
    console.log(`${this.age}歳です`);
  }
  
}

const animal9 = new Animal("レオ", 3);

console.log(`名前: ${animal9.name}`);
console.log(`年齢: ${animal9.age}`);

animal9.greet();
// こんにちは

animal9.info();
// こんにちは
// 名前はレオです
// 3歳です


// 10.継承とは
// 「継承」とは、すでにあるクラスをもとに、新しくクラスを作成する方法のことです。
// 継承を用いてクラスを作成するには「extends」を用います。
// 「Animalクラス」を継承して「Dogクラス」を作成するには、図のように「class Dog extends Animal」と書きます。
// 継承では元となるクラスを親クラス（今回はAnimalクラス）、新しく作成するクラスを子クラス（今回はDogクラス）と呼びます。

// 11.継承したクラスを使う
// 12.メソッドの追加

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

const animal = new Animal("レオ", 3);
animal.info();
// こんにちは
// 名前はレオです
// 3歳です

// Animalクラスを継承してDogクラスを定義
class Dog extends Animal {

  // getHumanAgeメソッドを追加
  getHumanAge() {
    return this.age * 7;
  }

}

// 定数humanAgeを定義し、定数dogに対してgetHumanAgeメソッドを呼び出した値を代入
const humanAge = this.getHumanAge();
console.log(`人間年齢で${humanAge}歳です`);

const dog12 = new Dog("レオ", 4);
dog12.info();
// こんにちは
// 名前はレオです
// 4歳です


// 13.オーバーライド（1）
// 親クラスと同じ名前のメソッドを子クラスに定義すると、子クラスのメソッドが優先して使用されます。
// これは、子クラスのメソッドが親クラスのメソッドを上書きしていることから、オーバーライドと呼ばれます。

// 14.オーバーライド（2）
// メソッドと同じように、コンストラクタもオーバーライドすることができます。例えば、子クラスにプロパティを追加したい場合などに用います。
// ただし、コンストラクタをオーバーライドする際は1行目に「super()」と記述する必要があります。

class Dog extends Animal {

  // constructorを追加してください
  constructor(name, age, breed) {
    super(name, age); //1行目に「super()」と記述して親クラスのコンストラクタを呼び出し
    this.breed = breed; //子クラスのコンストラクタを追加
  }

  // infoメソッドを追加　Animalクラスのinfoメソッドは上書きされる
  info() {
    this.greet();
    console.log(`名前は${this.name}です`);
    console.log(`犬種は${this.breed}です`)
    console.log(`${this.age}歳です`);
    
    const humanAge = this.getHumanAge();
    console.log(`人間年齢で${humanAge}歳です`);
  }

  getHumanAge() {
    return this.age * 7;
  }

}

const dog = new Dog("レオ", 4, "チワワ");
dog.info();
// こんにちは
// 名前はレオです
// 犬種はチワワです
// 4歳です
// 人間年齢で28歳です


// JavaScript 学習レッスンⅤ

// ファイルを分割しよう

// 1.ファイルの分割（1）
// 2.ファイルの分割（2）エクスポート（出力）インポート（読込）
// コードの量が増えてくると1つのファイルで管理するのが大変になるため、複数のファイルでコードを管理することがあります。
// 今回は、メインのプログラムを実行する「script.js」とAnimalクラスを定義する「animal.js」、Dog クラスを定義する「dog.js」の3つのファイルにコードを分けてみましょう。

// 3.値のエクスポート
// クラスのエクスポートを行いましたが、エクスポートできるのはクラスだけではありません。文字列や数値や関数など、どんな値でもエクスポートが可能です。

// 定数dogをインポート　拡張子の「.js」は省略可
import dog from "./dogData";

dog.info();


// 4.名前付きエクスポート
// 複数の値をエクスポートしたい場合は「名前付きエクスポート」を用います。
// 名前付きエクスポートとは、defaultを書かずに、名前を{}で囲んでエクスポートする書き方です。

// 5.相対パス

// 定数dog1, dog2をインポート
import {dog1, dog2} from "./data/dogData";
// ドット1つの「./」は相対パスが書かれているファイルと同じディレクトリを意味します。

// 定数dog1とdog2を出力する
console.log("---------");
dog1.info();
console.log("---------");
dog2.info();


// JavaScript 学習レッスンⅥ

// 配列を操作するメソッドを学ぼう

// 1.pushメソッド
// pushメソッドとは、配列の最後に新しい要素を追加するメソッドです。
// pushメソッドの後の()の中に追加したい要素を入力します。

const characters61 = ["にんじゃわんこ", "ベイビーわんこ", "ひつじ仙人"];

console.log(characters61);

// pushメソッドを使って配列charactersに、文字列「とりずきん」を追加
characters61.push("とりずきん");

console.log(characters61);
// [ 'にんじゃわんこ', 'ベイビーわんこ', 'ひつじ仙人', 'とりずきん' ]


// 2.forEachメソッド
// forEachメソッドは配列の中の要素を1つずつ取り出して、全ての要素に繰り返し同じ処理を行うメソッドです。
// 配列 = [ 要素1, 要素2, 要素3 ];
// 配列.forEach((引数) => {処理});
// 引数には、学習Ⅲで学んだアロー関数が入っています。
// () => {}　はアロー関数（学習レッスンⅢ 3.）
// 引数に要素1が入る　要素1に対して処理
// 引数に要素2が入る　要素2に対して処理
// 引数に要素3が入る　要素3に対して処理
// 引数に入っている関数はコールバック関数と呼びます。

const characters62 = ["にんじゃわんこ", "ベイビーわんこ", "ひつじ仙人", "とりずきん"];

characters62.forEach((character) => {
  console.log(character);
});
// にんじゃわんこ
// ベイビーわんこ
// ひつじ仙人
// とりずきん


// 3.findメソッド
// findメソッドとは、条件式に合う1つ目の要素を配列の中から取り出すメソッドです。

const numbers63 = [1, 3, 5, 7, 9];

// findメソッドを使って配列numbersから3の倍数を見つけ、定数foundNumberに代入
const foundNumber = numbers63.find((number) => {
  return number % 3 === 0;
});

console.log(foundNumber);
// 3　（9は出力されない）

// 配列の要素がオブジェクトの場合もfindメソッドを使うことができます。
const characters63 = [
  {id: 1, name: "にんじゃわんこ", age: 6},
  {id: 2, name: "ベイビーわんこ", age: 2},
  {id: 3, name: "ひつじ仙人", age: 100},
  {id: 4, name: "とりずきん", age: 21}
];

// 定数charactersからidが3のオブジェクトを見つけ、定数foundCharacterに代入
// 以下の例ではオブジェクトのプロパティを条件の中で使用しています。
const foundCharacter = characters63.find((character) => {
  return character.id === 3;
});

console.log(foundCharacter);
// {id: 3, name: "ひつじ仙人", age: 100}
// オブジェクトのプロパティを条件として使用する場合、そのプロパティを持っているオブジェクトそのものを取り出します。


// 4.filterメソッド
// filterメソッドとは記述した条件に合う要素のみを取り出して新しい配列を作成するメソッドです。

const numbers64 = [1, 2, 3, 4];

// filterメソッドを使ってnumbersから偶数を取り出し、定数evenNumbersに代入
const evenNumbers = numbers64.filter((number) => {
  return number % 2 === 0;
});

console.log(evenNumbers);
// [ 2, 4 ]

// findメソッドと同様に、配列の要素がオブジェクトの場合もfilterメソッドを使うことができます。
// 以下の例ではオブジェクトのプロパティを条件の中で使用しています。
// オブジェクトのプロパティを条件として使用する場合、そのプロパティを持っているオブジェクトそのものを取り出します。

const characters = [
  {id: 1, name:"にんじゃわんこ", age: 14},
  {id: 2, name:"ベイビーわんこ", age: 5},
  {id: 3, name:"ひつじ仙人", age: 100}
];

// charactersから20歳未満のキャラクターを取り出し、定数underTwentyに代入
const underTwenty = characters.filter((character) => {
  return character.age < 20;
});

console.log(underTwenty);
// [ {id: 1, name:"にんじゃわんこ", age: 14}, {id: 2, name:"ベイビーわんこ", age: 5}, ]


// 5.mapメソッド
// mapメソッドとは、配列内のすべての要素に処理を行い、その戻り値から新しい配列を作成するメソッドです。

const numbers = [1, 2, 3, 4];

// 定数numbersにmapメソッドを使って2倍にした配列を作り、定数doubledNumbersに代入
const doubledNumbers = numbers.map((number) => {
  return number * 2;
});

console.log(doubledNumbers);
// [ 2, 4, 6, 8 ]

// mapメソッドもこれまでのメソッドと同様に、配列のオブジェクト要素に対しても使うことができます。
const names = [
  {firstName: "Kate", lastName: "Jones"},
	{firstName: "John", lastName: "Smith"},
	{firstName: "Denis", lastName: "Williams"},
	{firstName: "David", lastName: "Black"}
];

// 定数namesにmapメソッドを使って新しい配列を作り、定数fullNamesに代入してください
// 以下の例では、mapでfirstNameプロパティとlastNameプロパティを繋げる処理をしています。
const fullNames = names.map((name) => {
  return name.firstName + name.lastName;
});

console.log(fullNames);
// [ 'KateJones', 'JohnSmith', 'DenisWilliams', 'DavidBlack' ]


// JavaScript 学習レッスンⅦ

// コールバック関数を学ぼう

// 1.コールバック関数を学ぼう
// 2.コールバック関数とは
// JavaScriptでは引数に関数を渡すことができます。引数に渡される関数をコールバック関数と呼びます。

const printWanko = () => {
  console.log("にんじゃわんこ");
};
// 関数callの引数に渡すための関数printWankoを定義

// 関数callにcallbackという名前の引数を追加
const call = (callback) => {
  console.log("コールバック関数を呼び出します。");
  callback();
  // コールバック関数を呼び出すときは()をつける
};

// 関数printWankoを引数に渡して関数callを実行
call(printWanko);
// コールバック関数を呼び出します。
// にんじゃわんこ
// コールバック関数を渡すときは()をつけない


// 3.コールバック関数を直接定義する
// 先程は事前に定義した関数をコールバック関数として渡しましたが、関数を直接引数の中で定義することもできます。
// 動作の流れは、事前に定義した関数を引数に渡す場合と同じです。

const call = (callback) => {
  console.log("コールバック関数を呼び出します。");
  callback();
};

// 引数で関数を定義して渡す
call(() => {
  console.log("ひつじ仙人");
});
// コールバック関数を呼び出します。
// ひつじ仙人


// 4.コールバック関数の引数
// コールバック関数では、普通の関数と同じように引数を渡すことができます。
// 2つ以上の引数を渡すこともできます。
// コールバック関数の引数と、実行時に渡す引数の数をそろえるように気をつけましょう。

// 普通の関数の場合
// 引数を2つ受け取る
const introduce = (name, age) => {
  console.log(`${name}は${age}歳です。`);
};

introduce("にんじゃわんこ", 14);
// 引数を2つ渡す
// にんじゃわんこは14歳です。

// コールバック関数の場合
const introduce = (callback) => {
  callback("にんじゃわんこ", 14);
  // 引数を2つ渡す
};

// 引数を2つ受け取る
introduce((name, age) => {
  console.log(`${name}は${age}歳です。`);
});
// にんじゃわんこは14歳です。