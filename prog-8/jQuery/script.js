// jQuery学習レッスン初級編

// jQueryの基礎

// 1.jQueryに触れてみよう
// 2.メソッドを使ってみよう

// $('セレクタ').メソッド(引数);
// (1)jQueryオブジェクトを作成
// (2)そのjQueryオブジェクトに対してメソッド（機能）を呼び出す
// 何を（セレクタ）どうするか（メソッド）
// 文末にセミコロンが必要

$(function() {
  // hideメソッドを用いて<h1>要素を5秒で隠す
  $('h1').hide(5000);
  
});


// 3.アニメーションを使おう

$(function() {
  // <img>要素を5秒でフェイドアウト。()内に引数として、アニメーションの速度を指定できます。ミリ秒での指定や、文字列での指定が可能です。
  $('#img3').fadeOut(5000);
  
  // <p>要素を5秒でスライドアップ。()内に引数として、アニメーションの速度を指定できます。
  $('#p3').slideUp(5000);
  
});


// 4.classとid
// idは同一ページに一箇所しか存在しないので、jQueryの処理が高速化されます。jQueryオブジェクトのセレクタにはできるだけidを用いるようにしましょう。

$(function() {

  $('#title4').slideUp(5000);
  // id="title"要素を5秒でスライドアップ。

  $('.lesson-item4').fadeOut(5000);
  // class="lesson-item"要素を5秒でフェイドアウト。

});


// 5.要素を表示しよう
// 隠れた要素を表示するメソッドとして、showメソッドがあります。
// fadeOutの反対としてfadeInメソッド、slideUpメソッドの反対としてslideDownメソッドがあります。

$(function() {
  
  $('#title5').show();
  // id="title5"要素を表示
  
  $('#image5').fadeIn(5000);
  // id="image5"要素を5秒でフェードイン。
  
});


// 6.clickイベント

$(function() {

  $('#hide-text6').click(function(){
    $('#text6').slideUp();
  });
  // id="hide-text6"要素をクリックするとid="text6"がスライドアップ。
  
});


// 7.cssメソッド
// CSSメソッドは、CSSを変更できるメソッドです。1つ目の引数にCSSのプロパティを、2つ目の引数にプロパティの値をいれます。

$(function() {
  
  $('#change-css7').click(function(){
    $('#text7').css('color','red');
    $('#text7').css('font-size','50px');
  });
  // id="change-css7"要素をクリックするとid="#text7"のcssを修正。
    
});


// 8.textメソッドとhtmlメソッド

$(function() {

  $('#change-text8').click(function(){
    $('#text8').text('ようこそ、Progateへ');
  });
  // id="change-text8"要素をクリックするとid="text8"の要素の中身を修正。（テキストのみ）
  
  $('#change-html8').click(function(){
    $('#text8').html('<a href="https://prog-8.com/">ようこそ、Progateへ</a>');
  });
  // id="change-html8"要素をクリックするとid="text8"の要素の中身を修正。（htmlタグ認識）
  
});


// 9.this
// $(this)はイベントの中で、そのイベントが起こった要素を取得することができます。$()の中でthisをクォーテーション（"や'）で囲まないことに注意してください。
// 例えば、実際にクリックされたli要素にだけ処理を行いたい場合にthisを用います。

$(function() {

  $('.list-item9').click(function(){
    $(this).css('color','red');
  });
  // id="list-item9"をクリックするとクリックした要素のcssを修正。
  
});


// 10.変数とメソッドチェーン
// 同じjQueryオブジェクトを複数回使用する時は変数にしましょう。コードが見やすくなる上、jQueryの処理が高速化されます。
// 同じjQueryオブジェクトを複数回使用する時は、メソッドチェーンを使うことでも処理速度を高速化できます。$('セレクタ').メソッド().メソッド()...のように書くことで、それぞれのメソッドが適用されます。

$(function() {
  $('.btn').click(function() {

    // JavaScriptと同じく、jQueryで変数宣言にはvarを用います。
    // jQueryオブジェクトを格納する時は、わかりやすいように変数の頭に$を付けるのが慣例となっています。
    var $title = $('#title10');
    
    $title.css('color', 'red');
    $title.html('こんばんは、にんじゃわんこさん');
    $title.fadeOut(1000);
    // 変数を使用
    
    $('#text10').css('color', 'blue').html('<h3>jQueryをマスターしましょう！</h3>').fadeOut(1000);
    // メソッドチェーンを使用

  });
});


// 11.find・children

$(function() {
  $('#find-method11').click(function() {

    // findメソッドで、「#wrapper」内にあるすべての「a」要素を取得し、cssメソッドで文字の色をredに指定
    // すべてなので、リスト1もリスト2もredになる。
    $('#wrapper11').find('a').css('color','red');
    
  });
  
  $('#children-method11').click(function() {

    // childrenメソッドで、「#wrapper」の一階層下にある「a」要素を取得し、fadeOutメソッドで隠す
    // 一階層下なので、リスト1のみが消えて、リスト2は消えない。
    $('#wrapper11').children('a').fadeOut();
    
  });
});


// 12.hoverイベント
// hoverイベントとは、要素にマウスが乗った時、外れた時に指定した処理を行うイベントです。
// clickイベントと違い、引数を2つ書くことに注意しましょう。引数の間はコンマで区切ります。

$(function() {
  $('#language-wrapper12').hover(
    function(){
    $('.language-text12').fadeIn();
    },
    // 「#language-wrapper」にマウスが乗ったときにフェードイン
    function(){
      $('.language-text12').fadeOut();
    }
    // 「#language-wrapper」にマウスが外れたときにフェードアウト
  );
  
});


// jQuery学習レッスン中級編

// WEBページを作ろう(1)

// 1.jQueryの準備
// jQueryはHTMLの中身を操作するため、HTMLの読み込みが完了してからjQueryによる操作を開始するようにします。 そのためにはreadyイベントを使用し、$(document).ready()の中身にjQueryの処理を書いていきます。 この構文には省略形も用意されており、$(function(){ });と書くことも出来ます。こちらの書き方を覚えておきましょう。

// jQueryの型を用意してください
$(function(){});


// 2.モーダルを表示しよう(1)
// モーダルとはclickイベントなどに基づいて、表示/非表示が行われる要素のことです。
// 3.モーダルを表示しよう(2)

$(function() {
  $('#login-show').click(function(){
    $('#login-modal').fadeIn();
  });
  // id="login-show"をクリックして、id="login-modal"をフェードイン

  $('.signup-show').click(function() {
    $('#signup-modal').fadeIn();
  });
  // class="signup-show"をクリックして、id="signup-modal"をフェードイン（2か所あるのでclass使用）
  
});

// 4.モーダルを隠そう
// ログインと新規登録の2つのモーダルがありますが、これらを閉じるボタンは共通のものを使いましょう。
// 2つのモーダルの閉じるボタンに共通のclass名を指定し、クリックした時にログインと新規登録のモーダルをともに隠します。

$(function() {
  $('.close-modal').click(function(){
    $('#login-modal').fadeOut();
    $('#signup-modal').fadeOut();
  });
  // class="close-modal"をクリックして、id="login-modal"をフェードアウト。id="signup-modal"をフェードアウト。
  
});


// WEBページを作ろう(2)

// 5.hover機能の準備
// 6.addClass・removeClass

$(function() {
  
  $('.lesson-hover').hover(
    function() {
      $(this).find('.text-contents').addClass('text-active');
    },
    // 「.lesson-hover」にマウスが乗ったときこの要素内の全てのclass="text-contents"を取得し、「text-active」クラス（.をつけない）を追加
    function() {
      $(this).find('.text-contents').removeClass('text-active');
    }
    // 「.lesson-hover」にマウスが外れたときこの要素内の全てのclass="text-contents"を取得し、「text-active」クラス（.をつけない）を削除
  );
  
});


// 7.アコーディオンの準備(1)
// 8.アコーディオンの準備(2)
// 9.アコーディオンを完成しよう

$(function() {

  $('.faq-list-item').click(function(){

    var $answer = $(this).find('.answer');
    // 変数 $answer を宣言して、クリックしたこの要素内の全てのclass="answer"を取得し代入。

    if($answer.hasClass('open')) {

      $answer.removeClass('open');
      // openクラスを消す
      $answer.slideUp();
      // $answerをスライドアップで隠す
      $(this).find('span').text('+');
      // spanの「-」を「+」に

    } else {

      $answer.addClass('open');
      // openクラスを追加
      $answer.slideDown();
      // $answerをスライドダウンで表示
      $(this).find('span').text('-');
      // spanの「+」を「-」に

    }
    // 変数 $answer が open クラスを持っていればtrue、持っていなければfalse。

  });
  
});


// jQuery学習レッスン上級編

// スライドを作ろう

// 1.eqメソッド
// jQueryオブジェクトは、実は配列の「ような」構造をしており、セレクタに合致した要素が配列のように入っています（実際には配列とは異なるものです）。

$(function() {

  $('#hide-btn').click(function(){
    $('.slide1').eq(1).fadeOut();
    // .slide要素の中のインデックス番号が1のjQueryオブジェクト（0から始まるので2個目のli要素）を取得してフェイドアウト。
  });
  
});


// 2.表示するスライドを切り替えよう

$(function() {
  $('#second-btn').click(function() {
    
    $('.active').removeClass('active');
    $('.slide2').eq(1).addClass('active');
    
  });
});
// htmlで初期状態で表示させたい1番目の.slide2要素にactiveクラスを追加。.slide2要素は表示しない、.activeの要素は表示するようにcssで設定。
// 「2」のボタンをクリックすると、.activeの要素からactiveクラスを削除し、2番目の.slide2要素にactiveクラスを追加する。


// 3.indexメソッド
// indexメソッドを用いると、「li」要素の中の指定した要素のインデックス番号を取得できます。
// clickイベントの中で、クリックされた要素　$(this)をindexメソッドの引数に指定することで、クリックした要素のインデックス番号を取得することができます。


$(function() {

  // 番号ボタンを押した時の処理
  $('.index-btn').click(function() {

    $('.active').removeClass('active');
    var clickedIndex = $('.index-btn').index($(this));
    // 変数clickedIndexを定義し、クリックしたボタンのインデックス番号を代入
    // 今回登場した変数clickedIndexの頭には$を付けません。変数の頭に$を付けるのはjQueryオブジェクトが格納されていることをわかりやすくするためです。文字列や数値を格納する時は$を付けません。
    
    $('.slide2').eq(clickedIndex).addClass('active');
    // .slide2のclickedIndex番目の要素にactiveクラスを追加。
    
  });
});


// 4.prevとnext
// prevメソッドは、jQueryオブジェクトの兄弟要素（同じ階層の要素）の中から1つ前の要素を、nextメソッドは1つ後ろの要素を取得することができます。

$(function() {
  
  // 「前へ」「次へ」ボタンを押した時の処理
  $('.change-btn').click(function() {
    
    var $displaySlide = $('.active');
    // 変数displaySlideを定義し、.activeオブジェクト（表示されているslide）を代入
    
    $displaySlide.removeClass('active');
    // 変数$displaySlideからactiveクラスを削除
    
    if($(this).hasClass('next-btn')) {
      $displaySlide.next().addClass('active');
    } else {
      $displaySlide.prev().addClass('active');
    };
    // clickした.change-btnオブジェクトが、next-btnクラスを持っていたら、$displaySlideの1つ後ろの要素にactiveクラスを追加。
    // next-btnクラスを持っていなかったら、$displaySlideの1つ前の要素にactiveクラスを追加。
    
  });
});


// 5.ボタンの表示/非表示
// 最初のスライドが表示されている時は「前へ」ボタンを、最後のスライドが表示されている時は、「次へ」ボタンを隠した方がいいでしょう。

$(function() {

  // 番号ボタンを押した時の処理（上の3.の処理に追記する）
  $('.index-btn').click(function() {

    var slideIndex = $('.slide2').index($('.active'));
    // 変数slideIndexに「.active」要素のインデックス番号を代入
    
    $('.change-btn').show();
    // ↓の処理または初期状態でcssで消されている.change-btn要素を一度表示してから次の処理へ。
    
    if( slideIndex === 0 ) {
      $('.prev-btn').hide();
    } else if( slideIndex === 3 ) {
      $('.next-btn').hide();
    };
    // 変数slideIndex（「.active」要素のインデックス番号）が「0」の時は「前へ」ボタンを消す。「3」の時は「次へ」ボタンを消す。
    
  });
  
  // 「前へ」「次へ」ボタンを押した時の処理（上の4.の処理に追記する）
  $('.change-btn').click(function() {
    
    var slideIndex = $('.slide2').index($('.active'));

    $('.change-btn').show();

    if( slideIndex === 0 ) {
      $('.prev-btn').hide();
    } else if( slideIndex === 3 ) {
      $('.next-btn').hide();
    };
    // 番号ボタンを押した時と同じ処理
    
  });
});


// 6.関数を使おう
// 5.で作った処理は2つのclickイベントで全く同じコードになっています。この処理を関数としてまとめてみましょう。
// 定義した関数をそれぞれのclickイベントの中で呼び出します。関数を呼び出すには、その関数名を記述するだけです。

// 7.length
// 今のままだとスライドの枚数が変わると、「次へ」ボタンを隠す機能が壊れてしまいます。これをスライドの枚数が変わっても壊れないようにしましょう。
// lengthを用いると、jQueryオブジェクトの要素の個数を取得できます。これはJavaScript基礎編で学んだlengthに似ていますね。
// これを活用して、スライドの枚数が変わっても、関数の内容を書き換えなくて済むようにしてみましょう。

$(function() {

  // toggleChangeBtn関数を定義
  // インデックス番号0のスライドが表示されている時は「前へ」ボタンを隠す。インデックス番号3のスライドが表示されている時は「次へ」ボタンを隠す。
  function toggleChangeBtn () {
    var slideIndex = $('.slide6').index($('.active6'));

    // 「次へ」ボタンを隠すインデックス番号を、.slideの数-1にする
    var slideLength = $('.slide6').length - 1;

    $('.change-btn6').show();
    if (slideIndex == 0) {
      $('.prev-btn6').hide();
    } else if (slideIndex == slideLength) {
      $('.next-btn6').hide();
    }
  }
  
  // 番号ボタンを押した時の処理
  $('.index-btn6').click(function() {
    $('.active6').removeClass('active6');
    var clickedIndex = $('.index-btn6').index($(this));
    $('.slide6').eq(clickedIndex).addClass('active6');
    
    // toggleChangeBtn関数を呼び出す
    toggleChangeBtn ();
  });
  
  // 「前へ」「次へ」ボタンを押した時の処理
  $('.change-btn6').click(function() {

    var $displaySlide = $('.active6');
    $displaySlide.removeClass('active6');
    
    if($(this).hasClass('next-btn6')) {
      $displaySlide.next().addClass('active6');
    } else {
      $displaySlide.prev().addClass('active6');
    };

    // toggleChangeBtn関数を呼び出す
    toggleChangeBtn ();
  });
});


// 8.要素の値を取得しよう（1）
// この演習では、jQueryを使ってHTMLから情報を取得することを学びます。
// jQuery初級編では、textメソッドを学習しました。これは引数に指定した文字列を要素に「セット」するメソッドでした。textメソッドは引数を指定せずに用いることで、要素内の文字列を「ゲット（取得）」することもできます。
// jQueryで値をセットするメソッドは大抵ゲットにも使うことができます。jQuery初級編で学習したhtmlメソッドとcssメソッドも、ゲットとして使うことができます。

// 9.要素の値を取得しよう（2）
// HTMLの属性はattrメソッドを用いて「ゲット」と「セット」ができます。
// 例えば、attr('id', 'title')のように第一引数に属性名、第二引数にその属性値を指定することで属性をセットすることができます。
// そして、第二引数を指定しない場合は、その属性の値をゲットできます。

$(function() {
  // 変数titleに、「#title」要素のテキストを代入
  var title = $('#title').text();

  // 変数に、要素の属性の値をゲット
  var id = $('.section-content p').attr('id');
  var href = $('#link').attr('href');
  
  // textメソッドを用いて、「#title-text」要素のテキストを変数titleの値に書き換え
  $('#title-text').text(title);

  $('#content-id').text(id);
  $('#link-href').text(href);
  
});


// 10.入力欄の値を取得しよう
// フォームに値を入力し送信ボタンを押すと、フォームの内容を取得して表示するようにしてみます。
// inputタグを用いると一行の入力欄を作ることができます。inputタグに入力されている値は、valメソッドで取得できます。
// submitイベントを用いると、送信ボタンがクリックされたときだけでなく、「Enter」キーでフォームが送信された場合もイベントが発生します。

// 11.選択ボックスの値を取得しよう
// selectタグはvalメソッドによって、選択中の値（optionタグのvalue属性の値）を取得できます。

// 12.フォームの入力チェックをしよう
// ここでは、フォームが送信されたときに、フォームに値が入力されているかどうかをチェックする機能を実装します。
// valメソッドでフォームの値を取得し、フォームに値が入力されていなければエラーを出します。
// エラーメッセージを表示するために、if文で条件分岐を行いましょう。

// 13.入力欄への自動入力
// 選択したボタンに応じて、フォームの値が自動で書き込まれるようにしてみましょう。
// valメソッドは値を取得することもできますが、反対に引数に値を指定することで、フォームに値をセットすることもできます。

// 14.選択ボックスの自動選択
// selectタグもvalメソッドを用いて自動で選択させることができます。
// 属性は自分でつくることもできます。これをカスタムデータ属性といい、「data-」から始まる属性名を自由に設定できます。data属性は、何らかの情報をHTML内に指定しておくのに便利なため、jQueryではしばしば用いられます。
// ここでは、選択ボタンにdata-optionという属性を設定して自動的にセレクトボックスが選択されるようにしてみましょう。

$(function() {
  
  // 「#form」要素のsubmitイベントを作成
  $('#form').submit(function(){

    // 変数selectValueに、#select-formの選択中の値（optionタグのvalue属性の値）を代入
    var selectValue = $('#select-form').val();

    // 変数textValueに、#text-formに入力されている値を代入
    var textValue = $('#text-form').val();

    // textValueが空のとき、エラー文を表示。入力されたら、エラー文を表示しない。
    if(textValue == '') {
      $('#error-message').text('理由を記入してください');
    } else {
      $('#error-message').text('');
    };

     // #output-select要素のテキストを、変数selectValueの値で書き換え
     $('#output-select').text(selectValue);

    // #output-text要素のテキストを、変数textValueの値で書き換え
    $('#output-text').text(textValue);

    // フォームの値を実際に送信するわけではないので記述
    return false;
  }); 

  // 「.option-btn」要素のclickイベントを作成
  $('.option-btn').click(function() {

    // 変数optionTextに、クリックした要素のテキストを代入
    var optionText = $(this).text();

    // 変数clickedOptionに、クリックした要素のdata-optionの値(1～3)を代入
    var clickedOption = $(this).attr('data-option');
    
    // #text-formに()の値をセット
    $('#text-form').val(optionText + 'が好きな理由は、');

    // #select-formを自動でvalue属性がclickedOptionの値(1～3)のものを選択させる
    $('#select-form').val(clickedOption);
  });
    
});


// 15.アニメーションをつけよう
// アニメーションをつけるにはanimateメソッドを用います。$('セレクタ').animate({'プロパティ':'値'})のように、引数は連想配列で指定します。
// 2つ目の引数でアニメーションの時間を設定することができます。時間は下図のようにミリ秒で指定するか、'slow'や'fast'といった文字列で指定することができます。
// hoverイベントは初級編で使いました。引数を2つ書くことに注意しましょう。引数の間はコンマで区切ります。

$(function(){
  
  $('.social-icon').hover(
    // マウスが乗ったときの処理
    function(){
      $(this).animate({
        'font-size':'30px'
      }, 300);
    },
    // マウスが外れたときの処理
    function(){
      $(this).animate({
        'font-size':'24px'
      }, 300);
    }
  );
  
});


// 16.ページ内リンクをつくろう
// ページ内リンクはjQueryでも実装できます。jQueryで実装するとリンク先への移動にアニメーションをつけたりすることが可能になります。scrollTopメソッドは、$('html, body').scrollTop(値); のように指定し、ページ最上部から値pxの位置に移動することができます。
// scrollTopは通常$('html, body')に対して用いるので、セットで覚えておきましょう。

// 17.スクロールにアニメーションをつけよう
// スクロールにアニメーションをつけてみましょう。animateメソッドでは、CSSの値だけでなく、scrollTopなどの値も変更できます。
// $('html, body').animate({'scrollTop': 0}, 時間); のように指定します。

$(function(){
  
  // #top-btnをクリックしたときに
  $('#top-btn').click(function(){

    // ページ最上部まで自動でスクロール
    $('html, body').scrollTop(0);

    // ページ最上部まで自動でアニメーション付きでスクロール
    $('html, body').animate({'scrollTop': 0}, 500);

  });
  
});


// 18.ナビゲーションをつくろう
// offsetメソッドを使用することで、要素の表示位置を取得することができます。offsetメソッドは、ページの上端からの距離とページの左端からの距離が連想配列の形{ top: 180, left: 100 }で返ってきます。
// offset().topとすると、ページの上端からの距離が取得できます。

  // ヘッダー内の<a>タグをクリックしたとき
  $('header a').click(function(){

    // 変数idに、クリックした要素のhrefの値(#～)を代入
    var id = $(this).attr('href');

    // 変数positionに、リンク先の要素のページトップからの距離を代入
    var position = $(id).offset().top;

    // positionの位置まで自動でアニメーション付きでスクロール
    $('html, body').animate({
      'scrollTop': position
    }, 500);

  });