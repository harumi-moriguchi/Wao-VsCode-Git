<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Progate</title>
  <link rel="stylesheet" type="text/css" href="stylesheet.css">
</head>
<body>
  <h3>PHP 学習コース I</h3>
    <h4>PHPとは？</h4>
      <h5>1. echo</h5>
        <p>文字列を出力する場合はシングルクォーテーション「'」かダブルクォーテーション「"」で囲みます。</p>
        <p>
          <?php
            echo "Hello, world!";
          ?>
          <br>
          <?php
            echo 7 * 2 ;
            echo "<br>";
            echo 8 % 3 ;　// 8÷3の余り
          ?>
        </p>

    <h4>PHPの基礎を学ぼう</h4>
      <h5>2. データの種類</h5>
        <p>
          <?php
            echo 5 + 7 ;
            echo "<br>";
            echo '5 + 7'; //文字列で出力
          ?>
        </p>

      <h5>3. 変数</h5>
        <p>
          <?php
            $fruit = 'りんご';
            echo $fruit;
          ?>
          <br>
          <?php
            $sum = 8 + 9;
            echo $sum; //17
          ?>
        </p>

      <h5>4. 変数の値を更新する</h5>
        <p>
          <?php
            $x = 5;
            $y = 2;
            $a = 8;
            $b = 4;

            $x += 10;
            echo $x; //15
            echo "<br>";

            $y *= 5;
            echo $y; //10
            echo "<br>";

            $a++;
            echo $a; //9
            echo "<br>";

            $b--; //3
            echo $b;
          ?>
        </p>

      <h5>5. 文字列の連結</h5>

        <p>
          <?php
            $name = 'にんじゃ';
            echo $name.'ねこ'; //ドットで連結
            echo "<br>";

            $name .= 'わんこ'; //連結して代入
            echo $name;
            echo "<br>";
            
            echo "こんにちは！{$name}さん"; // ダブルクォーテーションは、$nameが展開される。
            echo "<br>";

            echo 'こんにちは！{$name}さん'; // シングルクォーテーションは、$nameがそのまま表示される。
          ?>
        </p>

    <h4>条件分岐</h4>
      <h5>6. if文</h5>

        <p>
          <?php
            $x = 99 * 99;
            $y = 77 * 77;
            
            if($x > 9800) {
              echo '変数xは9800より大きいです。'; //出力される
            }
            
            if($y > 6000) {
              echo '変数yは6000より大きいです。'; //出力されない
            }
          ?>
        </p>

      <h5>7. else, elseif文</h5>

        <p>
          <?php
            $age = 49;
            if ($age >= 30) {
              echo 'あなたは30歳以上です。'; //出力される
            } else {
              echo 'あなたは30歳未満です。'; //出力されない
            }
          ?>
        </p>

      <h5>8. &&, ||</h5>
        <p>&&（かつ）||（または）!（条件の否定～でないなら）</p>
        <p>
          <?php
            $x = 1071;
    
            if ($x % 3 == 0 && $x % 7 == 0) {
              echo 'xは3の倍数かつ7の倍数です。<br>';
            } elseif ($x % 3 == 0) {
              echo 'xは3の倍数ですが7の倍数ではありません。<br>';
            } elseif ($x % 7 == 0) {
              echo 'xは7の倍数ですが3の倍数ではありません。<br>';
            } else {
              echo 'xは7の倍数でも3の倍数でもありません。<br>';
            }

            if ($x <= 100 || $x >= 1000) {
              echo 'xは100以下または1000以上です。<br>';
            }
    
            if (!($x == 1000)) {
              echo 'xは1000ではありません。';
            }
          ?>
        </p>

      <h5>9.switch文</h5>
        <p>if, elseifによる分岐が多く複雑な場合</p>
        <p>
          <?php
            $num = 7;
            $remainder = $num % 3; //7を3で割った時の余り

            switch ($remainder) {
              case 0:
              echo '大吉です。';
              break;
              case 1:
              echo '中吉です。'; //出力される
              break; //忘れると、下のcaseも出力される
              case 2:
              echo '小吉です。';
              break;
              default: //それ以外の場合
              echo '凶です。';
              break;
            }
          ?>
        </p>

    <h4>配列を使ってみよう</h4>
      <h5>10.配列</h5>
        <p>
          <?php
            $colors = array('赤','青','黄');
            echo $colors[0]; //赤
            $colors[] = '白'; //末尾に追加
            echo $colors[3]; //白
          ?>
        </p>

      <h5>11.連想配列</h5>
        <p>
          <?php
            $scores = array ('数学' => 70, '英語' => 90, '国語' => 80);
            $scores['国語'] += 5;
            echo $scores['国語']; //85
          ?>
        </p>

    <h4>繰り返し処理</h4>
      <h5>12.for文</h5>
        <p>
          <?php
            for($i = 51; $i <= 100; $i++){ //(1)初期化(2)ループの条件(4)変数の更新
              echo $i; //(3)繰り返す処理
              echo '<br>';
            } //(1)iを51に　(2)iが100以下の場合まで繰り返し　(3)iをecho　(4)iに1を足す
          ?>
        </p>

      <h5>13.while文</h5>
        <p>
          <?php
            $i = 2; //(1)初期化
            while($i <= 100){ //(2)ループの条件
              echo $i; //(3)繰り返す処理
              echo '<br>'; //(3)繰り返す処理
              $i += 2; //(4)変数の更新 無限ループにならないようにちゃんと指定
            } //(1)iを2に　(2)iが100以下の場合まで繰り返し　(3)iをecho　(4)iに2を足す
          ?>
        </p>

      <h5>14.break</h5>
        <p>現在のループを強制的に中断する命令です。for, while, foreachなどの繰り返し文の中で利用できます。</p>
        <p>
          <?php
            for($i = 1; $i <= 1000; $i++){
              if($i > 500){
                break;
              } //iが500を超えると中断
              echo $i.'<br>';
            }
          ?>
        </p>

      <h5>15.continue文</h5>
        <p>break文に対して、continue文は現在の周だけをスキップし、ループそのものは継続して実行します。</p>
        <p>
          <?php
            for($i = 1; $i <= 1000; $i++){
              if($i % 3 == 0){
                continue;
              } //iが3の倍数の時ループを終了
              echo $i.'<br>';
            } //1から1000までの3の倍数を除いた数が出力
          ?>
        </p>

      <h5>16.foreach文</h5>
        <p>foreach文とは、配列または連想配列に対して、先頭のデータから順に繰り返し処理を行うための命令です。<br>
        「as」の後ろの変数に、ループの度にデータが先頭から順に代入されていきます。asの後ろの変数名は何を指定しても大丈夫です。</p>
        <p>
          <?php
            $scores = array('数学' => 70, '英語' => 90, '国語' => 80);

            foreach($scores as $key => $value){
              echo $key.'は'.$value.'点です。<br>';
            } //数学は70点です。<br>英語は90点です。<br>国語は80点です。
          ?>
        </p>

        
    <h4>関数を使ってみよう</h4>
      <h5>17.関数</h5>
        <p>
          <?php
            $str = 'progate';
            echo strlen ($str); // $strの文字数をecho　7
            echo '<br>';
            
            $array = array('HTML', 'CSS', 'PHP');
            echo count ($array); // $arrayの要素数をecho　3
            echo '<br>';
            
            echo rand (10, 15);　// 10から15までのランダムな数字をecho　(例)12
          ?>
        </p>

      <h5>18.関数を自作する</h5>
        <p>
          <?php
            function hello(){
              echo "Hello,world!";
            } // 関数helloを定義
            
            hello(); // 関数helloを呼び出し　Hello,world!
            echo '<br>';

            function printRectangleArea($height,$width){
              echo $height*$width;
            } // 関数printRectangleAreaを定義
            
            printRectangleArea(5, 10); // 引数を(5, 10)としてprintRectangleAreaを呼び出し　50
          ?>
        </p>

      <h5>19.戻り値</h5>
        <p>
          <?php
            function getCircleArea($radius){
              return $radius*$radius*3;
            } // 関数getCircleAreaは　$radius*$radius*3　を　return　する。
            
            $circleArea = getCircleArea(5); // 関数getCircleArea(5)を　変数$circleAreaに代入
            echo $circleArea; // 75
          ?>
        </p>

    <h4>お問い合わせフォームを作ろう</h4>
      <h5>20.formタグ</h5>
      <h5>21.テキストボックス</h5>
      <h5>22.$_POST</h5>
      <h5>23.セレクトボックス</h5>

        <div class="contact-form">
          <div class="form-title">お問い合わせ</div>

          <form action="sent.php" method="post"> <!-- actionはデータを渡す先のURL。methodは送信の方法で、「get」の場合は送信される値がURLに表示され、「post」の場合はURLに表示されません。-->

            <div class="form-item">名前</div>
            <input type="text" name="name"> <!-- <input type="text">はテキストボックス。閉じタグは必要なし。name属性は入力された値を取得するときに使う名前 -->

            <div class="form-item">年齢</div>
              <select name="age"><!-- セレクトボックス。入力された値を取得する時に使う名前。 -->
                <option value="未選択">選択してください</option>
                <?php 
                  for($i = 6 ; $i <= 100 ; $i++){
                    echo "<option value='{$i}'>{$i}</option>"; //ダブルクォーテーションで文字列を囲んだ場合、中の変数を{}で囲むとその部分が変数に入っている値で置き換えられます(変数展開)。
                  }
                ?><!-- 6から100までのoptionをecho -->
              </select>

            <div class="form-item">お問い合わせの種類</div>
              <?php 
                $types = array('Progateに関するお問い合わせ', 'Progateに対する意見', '採用に関するお問い合わせ', '取材・メディア関連のお問い合わせ', '料金に関するお問い合わせ', 'その他');
              ?><!-- 配列$typesの値を設定 -->
              <select name="category">
                <option value="未選択">選択してください</option>
                <?php 
                  foreach($types as $type){
                    echo "<option value='{$type}'>{$type}</option>";
                  }
                ?><!-- 配列$typesから値を取得し、変数$typeに代入 -->
              </select>

            <div class="form-item">内容</div>
            <textarea name="body"></textarea> <!-- <textarea>は改行を含む文章のためのテキストボックス。閉じタグが必要。 -->

            <input type="submit" value="送信"> <!-- <input type="submit">は送信ボタン。value属性に指定された値がボタン上に表示。 -->

          </form>

        </div>

  <h3>PHP 学習コース Ⅱ</h3>
    <h4>オブジェクト指向を学ぼう</h4>
      <h5>1. 目標物を確認しよう</h5>
      <h5>2. クラスとインスタンス</h5>
        <p>オブジェクト指向では「クラス」という設計図を作成し、クラスを元にオブジェクト（実体）を生成します。生成された実体を「インスタンス」と呼びます。</p>
      <h5>3. プロパティ</h5>
      <h5>4. メソッド</h5>
        <p>プロパティとはインスタンスが持つデータのことで、メソッドはインスタンスに関連する処理（関数）のことです。</p>
      <h5>5. $this</h5>
        <p>メソッド内でインスタンスのプロパティやメソッドにアクセスしたい時には「$this」という特殊な変数を用います。</p>

        <?php
        
        class Menu {
          public $name; // $nameというプロパティを定義
          
          public function hello(){
            echo '私はMenuクラスのインスタンスです<br>';
            echo '私は'.$this->name.'です'; //メソッド内で使用できる$this
          } // helloメソッドを定義
          
        } // Menuクラスを定義

        $curry = new Menu();　// Menuクラスのインスタンスを作り、変数$curryに代入。
        $pasta = new Menu();

        $curry->name = 'CURRY'; // $curryのnameプロパティに'CURRY'を代入。プロパティ名に$は不要「->」を用います。
        $pasta->name = 'PASTA';

        echo $curry->name; // $curryのnameプロパティをecho CURRY
        echo '<br>';
        echo $pasta->name;

        $curry->hello(); // $curryに対してhelloメソッドを呼び出し
        echo '<br>';
        $pasta->hello();

        ?>

      <h5>6. コンストラクタ</h5>
        <p>「__construct」という特別なメソッドを定義すると、newを用いてインスタンスを生成するときに、このメソッドが自動的に呼ばれます。</p>
      <h5>7. コンストラクタとプロパティ</h5>
        <p>__constructメソッドは引数をとることができます。newを用いてインスタンスを生成する際には引数を与えることができ、その引数の値が__constructメソッドに渡されます。</p>

        <?php
        
        class Menu {
          public $name;

          public function __construct() {
            echo '１つのメニューが作られました';
          }

          public function __construct($name) {
            $this->name = $name; // nameプロパティに引数の$nameを代入
          } // コンストラクタの引数に$nameを入れる
          
          public function hello(){
            echo '私は'.$this->name.'です';
          }
          
        }

        $curry = new Menu();　// __construct()で「１つのメニューが作られました」が自動的にecho
        $pasta = new Menu();

        $curry->name = 'CURRY';
        $pasta->name = 'PASTA';

        $pizza = new Menu('PIZZA');　// $pizza の name プロパティに引数の'PIZZA'を代入
        $coffee = new Menu('COFFEE');

        $curry->hello();
        echo '<br>';
        $pasta->hello();
        echo '<br>';
        $pizza->hello();
        echo '<br>';
        $coffee->hello();

        ?>


      <h5>8. HTMLとPHP</h5>
        <p>HTMLとPHPを分けて、HTMLの中にPHPのコードを埋め込むと見やすい。</p>
      <h5>8. HTMLとPHP(2)</h5>
        <p>foreach文をHTMLに埋め込む際、foreach文の「{」の代わりに「:」、「}」の代わりに「endforeach」と記述し、その間に処理を書いていきます。</p>
        <p>if文、for文、while文やswitch文などもforeach文と同様に、それぞれ「endif」、「endfor」、「endwhile」、「endswitch」を使って書くことができます。</p>

        <?php
        
        class Menu {
          public $name;

          public function __construct($name) {
            $this->name = $name;
          }
          
          public function hello(){
            echo '私は'.$this->name.'です';
          }
          
        }

        $juice = new Menu('JUICE');
        $coffee = new Menu('COFFEE');
        $curry = new Menu('CURRY');
        $pasta = new Menu('PASTA');

        $menus = array($juice, $coffee, $curry, $pasta); // 配列の中に上記の4つのインスタンスを順に入れて、変数$menusに代入

        ?>

        <p><?php echo $curry->name ?></p>
        <p><?php echo $pasta->name ?></p>

        <?php foreach($menus as $menu): ?>
          <h6><?php echo $menu->name ?></h6>
        <?php endforeach ?>


      <h5>10. ファイルを分けよう</h5>
        <p>「require_once」を用いると別のphpファイルを読み込むことができます。</p>
      <h5>11.画像と価格を表示しよう</h5>
      <h5>12.税込価格を表示しよう</h5>
        
      <?php require_once('data.php') ?><!-- data.phpを読み込み  -->

        <div class="menu-wrapper container">
          <h6 class="logo">Café Progate</h6>
          <div class="menu-items">
            <?php foreach ($menus as $menu): ?>
              <div class="menu-item">
              <img src="<?php echo $menu->image ?>">
              <p class="menu-item-name"><?php echo $menu->name ?></p>
              <p class="price">¥<?php echo $menu->getTaxIncludedPrice() ?>（税込）</p><!-- $menuのgetTaxIncludedPriceメソッドの戻り値を表示 -->
            </div>
            <?php endforeach ?>
          </div>
        </div>

        
      <h5>13. カプセル化を学ぼう</h5>
      <h5>14. 注文個数を管理しよう</h5>
      <h5>15. フォームを作ろう</h5>
      <h5>16. フォームの値を受け取ろう</h5>
      <h5>17. 注文の小計を出そう</h5>
      <h5>18. 注文の合計金額を出そう</h5>
        
      <?php require_once('data.php') ?>

        <div class="menu-wrapper container">
          <h6 class="logo">Café Progate</h6>
          <form action="sent.php" method="post">
            <div class="menu-items">
              <?php foreach ($menus as $menu): ?>
              <div class="menu-item">
                <img src="<?php echo $menu->getImage() ?>">
                <p class="menu-item-name"><?php echo $menu->getName() ?></p>
                <p class="price">¥<?php echo $menu->getTaxIncludedPrice() ?>（税込）</p>
                <input type="text" value="0" name="<?php echo $menu->getName() ?>"><span>個</span>
              </div>
              <?php endforeach ?>
            </div>
            <input type="submit" value="注文する">
          </form>
        </div>


  <h3>PHP 学習コース Ⅲ</h3>
    <h4>オブジェクト指向を学ぼう</h4>
      <h5>1. 目標物を確認しよう</h5>
      <h5>2. クラスプロパティ</h5>
        <p>クラスプロパティにアクセスする場合は「クラス名::$クラスプロパティ名」のようにします。</p>
      <h5>3. クラスメソッド</h5>
        <p>個々のインスタンスのデータに関係ない処理を行いたい時には「クラスメソッド」を用います。クラスメソッドは「クラス名::クラスメソッド名」のように呼び出します。</p>
    <h4>継承について学ぼう</h4>
      <h5>6. instanceof</h5>
      <h5>9. 継承について復習しよう</h5>
      <h5>10. Foodの表示を仕上げよう</h5>

  <h3>PHP 学習コース Ⅳ</h3>
    <h4>詳細ページを作ろう</h4>
      <h5>2. リンクを作ろう</h5>
      <h5>3. クエリ情報</h5>

        <?php
        require_once('data.php');
        require_once('menu.php'); //クラスプロパティにアクセスするのに書かなければならない
        ?>

          <div class="menu-wrapper container">
            <h6 class="logo">Café Progate</h6>
            <p>メニュー<?php echo Menu::getCount() ?>品</p><!-- Menuクラスのクラスプロパティ$countを表示 -->

            <form action="sent.php" method="post">
              <div class="menu-items">

                <?php foreach ($menus as $menu): ?>
                <div class="menu-item">
                  <img src="<?php echo $menu->getImage() ?>">
                  
                  <p class="menu-item-name">
                    <a href="show.php?name=<?php echo $menu->getName() ?>">
                      <?php echo $menu->getName() ?>
                    </a>
                  </p><!-- 詳細ページへリンク。クエリ情報を使ってnameプロパティを送る。 -->

                  <?php if ($menu instanceof Drink): ?><!-- $menuがDrinkクラスのインスタンスである時だけgetTypeメソッドを呼び出す -->
                    <p class="menu-item-type"><?php echo $menu->getType() ?></p> 
                  <?php else: ?><!-- それ以外（Foodクラスのインスタンスである時だけ）getSpicinessメソッドを呼び出す -->
                    
                    <?php for ($i = 1; $i <= $menu->getSpiciness(); $i++): ?><!-- spicinessプロパティの数だけ画像を繰り返し表示 -->
                    <img src="https://s3-ap-northeast-1.amazonaws.com/progate/shared/images/lesson/php/chilli.png" class="icon-spiciness">
                    <?php endfor ?>
                    
                  <?php endif ?>

                  <p class="price">¥<?php echo $menu->getTaxIncludedPrice() ?>（税込）</p>
                  <input type="text" value="0" name="<?php echo $menu->getName() ?>"><span>個</span>
                </div>
                <?php endforeach ?>
                
              </div>
              <input type="submit" value="注文する">
            </form>

          </div>





      

      



</body>
</html>