// JavaScript Document
/*
複数行用
*/

// lesson2-1
console.log('script.jsに書いたよ');
// コンソールに「script.jsに書いたよ」と表示しなさい
// 文字列を表示したい時は''か""で囲む。""の方が文字列の中に含まれる可能性が高いので以降''にする。

// lesson2-3

document.getElementById('answer2-3').onsubmit = function() {
// id="answer2-3" の　type="submit"　ボタンを押したら、以下のファンクションを実行
	window.alert('実行ボタンを押しましたね?');
	// アラートダイアログボックスに「実行ボタンを押しましたね?」と表示しなさい
};

// lesson2-4
document.getElementById('choice1').textContent = new Date();
// id="choice1"　の　textContent　を　new Date()　にする
document.getElementById('choice2').textContent = '文字列';
// id="choice2"　の　textContent　を　文字列　にする
document.getElementById('choice3').textContent = 100+200;
// id="choice3"　の　textContent　を　数式の結果　にする

// lesson3-1
document.getElementById('answer3-1').onsubmit = function() {
// id="answer3-1" の　type="submit"　ボタンを押したら、以下のファンクションを実行
	if(window.confirm('[OK]か[キャンセル]をクリックしてください。')){
	// 確認ダイアログボックスを表示してOKを押したらtrue
		window.alert('[OK]をクリックしましたね');
	} else {
		window.alert('[キャンセル]をクリックしましたね');
	}
};

// lesson3-2
document.getElementById('answer3-2').onsubmit = function() {
// id="answer3-2" の　type="submit"　ボタンを押したら、以下のファンクションを実行
	var answer1 = window.prompt('ヘルプを見ますか');
	// テキストフィールドのあるダイアログボックス（プロンプト）を表示して、入力されたテキストを変数 ansewer1 に代入する。
	if(answer1 === 'yes') {
		window.alert('yesと書きましたね');
	} else if(answer1 === 'no') {
		window.alert('noと書きましたね');
	} else  {
		window.alert('yesかnoでお答えください。');
	}
};

// lesson3-4
document.getElementById('answer3-4').onsubmit = function() {
// id="answer3-4" の　type="submit"　ボタンを押したら、以下のファンクションを実行
	var number = Math.floor(Math.random() * 6);
	// Math.floor(x)　xの小数点以下を切り捨てる
	// Math.random()　0以上1未満の乱数
	// つまり0～5の数字が 変数 number に代入される

	var answer2 = parseInt(window.prompt('数当てゲーム。0～5の数字を入力してね。'));
	// プロンプトを表示して、入力されたテキストを変数 ansewer2 に代入する。
	// parseInt は文字列を整数に変換するメソッド。prompt に入力されたテキストは数字であっても文字列として認識されるため必要。

	var message;
		if(answer2 === number) {
			message = 'あたり!';
		} else if(answer2 < number) {
			message = '残念でした!もっと大きい';
		} else if(answer2 > number) {
			message = '残念でした!もっと小さい';
		} else  {
			message = '0～5の数字を入力してね。';
		}
	window.alert(message);
};

// lesson3-5
document.getElementById('answer3-5').onsubmit = function() {
	var hour = new Date().getHours();
	// new Date()　ページを開いたときの時刻を取得
	// .getHours()　その「時」(何「時」か)を24時間時計で取得して、変数hourに代入
		if(hour >= 19 && hour < 21) {
			// hourが19以上かつ21より小さい時
			window.alert('お弁当30%OFF！');
		} else if(hour === 9 || hour === 15) {
			// hourが9または15の時
			window.alert('お弁当1個買ったら1個おまけ！');
		} else  {
			window.alert('お弁当はいかがですか？');
		}
};

// lesson3-6
for(var i = 1; i <=10; i = i + 1) {
	// 変数iを定義して、繰り返す最初の値を代入(初めの値は1)
	// 10まで繰り返す
	// 1増やす　i = i + 1 ⇒ i++ 同じ
	console.log(i + '枚');
  
  var li = document.createElement('li');
	// 何もないところからタグ(<li></li>)を生成。変数 li に代入。
	li.textContent = i + '枚';
	// <li></li>のテキストコンテンツに、i + '枚'　を指定。
	document.getElementById('answer3_6').appendChild(li);
	// 取得した要素(answer3_6).appendChild(挿入したい子要素)
	// <ul id="answer3_6">を取得し、li 要素を子要素として挿入。
}

// lesson3-7
document.getElementById('answer3-7').onsubmit = function() {
	
var enemy = 100;
var attack;
var count = 0;

window.alert('戦闘スタート！');
while(enemy > 0) {
	attack = Math.floor(Math.random() * 30) + 1;
	console.log('モンスターに' + attack + 'のダメージ！');
  
  var li = document.createElement('li');
	li.textContent = 'モンスターに' + attack + 'のダメージ！';
	document.getElementById('answer3_7_1').appendChild(li);
  
	enemy -= attack;
	count++;
}
console.log(count + '回でモンスターを倒した！');
document.getElementById('answer3_7_2').textContent = count + '回でモンスターを倒した！';

};

// lesson3-8
var total = function(price) {
	var tax = 0.08;
	return price + price * tax;
}

console.log('コーヒーメーカーの値段は' + total(8000) + '円(税込)です。');
document.getElementById('answer3_8').textContent = 'コーヒーメーカーの値段は' + total(8000) + '円(税込)です。';

// lesson3-9
var fizzbuzz = function(num) {
	if(num % 3 === 0 && num % 5 === 0) {
		return 'fizzbuzz!';
	} else if(num % 3 === 0) {
		return 'fizz!';
	} else if(num % 5 === 0) {
		return 'buzz!';
	} else  {
		return num;
	}
}
for(var i = 1; i <=30; i++) {
console.log(fizzbuzz(i));
}
for(var i = 1; i <=30; i++) {
var li = document.createElement('li');
	li.textContent = fizzbuzz(i);
	document.getElementById('answer3_9').appendChild(li);
}

// lesson3-10
var todo = ['配列1つめの項目(インデックス番号0)','配列2つめの項目(インデックス番号1)','配列3つめの項目(インデックス番号2)','配列4つめの項目(インデックス番号3)'];
todo.push('配列5つめの項目を追加(インデックス番号4)');
for(var i = 0; i < todo.length; i++) {
	var li = document.createElement('li');
	li.textContent = todo[i];
	document.getElementById('list').appendChild(li);
}

// lesson3-11
var jsbook = {title: 'JavaScript入門', price: 2500, stock: 3};

console.log(jsbook);
console.log(jsbook.title);
console.log(jsbook['price']);
jsbook.stock = 10;
console.log(jsbook.stock);
jsbook['stock'] = 100;
console.log(jsbook.stock);

for(var p in jsbook) {
	console.log(p + '=' +  jsbook[p]);
}

document.getElementById('title').textContent = jsbook.title;
document.getElementById('price').textContent = jsbook.price;
document.getElementById('stock').textContent = jsbook.stock;

// lesson4-1
document.getElementById('form').onsubmit = function() {
	var search = document.getElementById('form').word.value;
	document.getElementById('output4-1').textContent = '『' + search + '』の検索中・・・';
	return false;
};

// lesson4-2
var now = new Date();
var year = now.getFullYear();
var month = now.getMonth();
var date = now.getDate();
var hour = now.getHours();
var min = now.getMinutes();
var ampm = '';
if(hour < 12) {
	ampm = 'a.m.';
} else {
	ampm = 'p.m.';
}

var output4_2 = year + '/' + (month + 1) + '/' + date + ' ' + (hour % 12) + ':' + min + ampm;
document.getElementById('time4-2').textContent = output4_2;

// lesson4-3
var addZero = function(num, digit) {
	var numString = String(num);
	while(numString.length < digit) {
		numString = '0' + numString;
	}
	return numString;
}

var songs = [
	'白菜',
	'とうふ',
	'長ねぎ',
	'豚肉',
	'とりボール',
	'白だし',
	'おもち',
	'かに',
	'なべ',
	'七味',
];
for(var i = 0; i < songs.length; i++) {
	var paragraph = document.createElement('p');
	paragraph.textContent = addZero(i + 1, 2) + '. ' + songs[i];
	document.getElementById('answer4_3').appendChild(paragraph);
}

// lesson4-4
document.getElementById('answer4_4_1').textContent = Math.PI;
document.getElementById('answer4_4_2').textContent = Math.floor(Math.PI);

var point =  function(num, digit) {
	var time = Math.pow(10, digit);
	return Math.floor(num * time) / time;
}

document.getElementById('answer4_4_3').textContent = point(Math.PI, 2);

// lesson5-1
var countdown =  function(due) {
	var now = new Date();
	
	var rest = due.getTime() - now.getTime();
	var sec = Math.floor(rest / 1000 % 60);
	var min = Math.floor(rest / 1000 / 60) % 60;
	var hours = Math.floor(rest / 1000 / 60 / 60) % 24;
	var days = Math.floor(rest / 1000 / 60 / 60 / 24);
	var count = [days, hours, min, sec];
	
	return count;
}

var goal = new Date(2020, 6, 24);

var recalc =  function() {
	var counter = countdown(goal);
	var time = counter[0] + '日' + counter[1] + '時間' + counter[2] + '分' + counter[3] + '秒';
	document.getElementById('answer5_1').textContent = time;
	refresh();
}

var refresh =  function() {
	setTimeout(recalc, 1000);
}
recalc();

/*
以下、goalの別の設定方法
var goal = new Date();
goal.setHours(23);
goal.setMinutes(59);
goal.setSeconds(59);

以下、recalcの別の設定方法
var recalc =  function() {
	var counter = countdown(goal);
	document.getElementById('answer5_1_2').textContent = counter[0] ;
	document.getElementById('answer5_1_3').textContent = counter[1] ;
	document.getElementById('answer5_1_4').textContent = counter[2] ;
	document.getElementById('answer5_1_5').textContent = counter[3] ;
	refresh();
}
*/

// lesson5-2
var lang = document.querySelector('html').lang;

var opt;
if(lang === 'ja') {
	opt = document.querySelector('option[value="lesson.html#lesson3-4"]');
} else if(lang === 'en') {
	opt = document.querySelector('option[value="lesson.html#lesson3-5"]');
} else if(lang === 'zh') {
	opt = document.querySelector('option[value="lesson.html#lesson3-6"]');
}
opt.selected = true;

document.getElementById('answer5_2').select.onchange =  function() {
	location.href = document.getElementById('answer5_2').select.value;
}

// lesson5-3
document.getElementById('form5_3').onsubmit = function() {
	if(Cookies.get('answered') === 'yes') {
	window.alert('回答ずみです。アンケートの回答は1回しかできません。');
	return false;
	} else {
	Cookies.set('answered', 'yes', {expires:7});
}
};
document.getElementById('remove5_3').onclick = function() {
	Cookies.remove('answered');
};

// lesson5-4
var thumbs = document.querySelectorAll('.thumb');
for(var i = 0; i < thumbs.length; i++) {
	thumbs[i].onclick =  function() {
		document.getElementById('bigimg').src = 'book-js/5-04_image/step1/' + this.dataset.image;
	};
}

// lesson5-5
var images = ['book-js/5-05_slide/extra/images/image1.jpg', 'book-js/5-05_slide/extra/images/image2.jpg', 'book-js/5-05_slide/extra/images/image3.jpg', 'book-js/5-05_slide/extra/images/image4.jpg', 'book-js/5-05_slide/extra/images/image5.jpg', ];
var current = 0;
var pageNum =   function() {
		document.getElementById('page').textContent = (current + 1) + '/' + images.length;
}
var changeImage =  function(num) {
	if(current + num >=0 && current + num < images.length) {
		current += num;
		document.getElementById('main_image').src = images[current];
		pageNum();
	}
};

var preloadImage =  function(path) {
	var imgTag = document.createElement('img');
	imgTag.src = path;
}

for(var i =0; i < images.length; i++) {
	preloadImage(images[i]);
}

pageNum();

document.getElementById('prev').onclick = function() {
	changeImage(-1);
};
document.getElementById('next').onclick = function() {
	changeImage(1);
};