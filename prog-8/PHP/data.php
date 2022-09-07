    <h3>PHP 学習コース Ⅱ</h3>
      <h4>オブジェクト指向を学ぼう</h4>
        <h5>10. ファイルを分けよう</h5>
          <p>「require_once」を用いると別のphpファイルを読み込むことができます。</p>
        <h5>11.画像と価格を表示しよう</h5>
        <h5>12.税込価格を表示しよう</h5>
        <h5>13. カプセル化を学ぼう</h5>
        <h5>14. 注文個数を管理しよう</h5>
        <h5>15. フォームを作ろう</h5>
        <h5>16. フォームの値を受け取ろう</h5>
        <h5>17. 注文の小計を出そう</h5>
        <h5>18. 注文の合計金額を出そう</h5>
        
        <?php
            require_once('menu.php'); // menu.phpを読み込み

            // データ定義部分
            $juice = new Menu('JUICE',600,'https://s3-ap-northeast-1.amazonaws.com/progate/shared/images/lesson/php/juice.png');
            $coffee = new Menu('COFFEE',500,'https://s3-ap-northeast-1.amazonaws.com/progate/shared/images/lesson/php/coffee.png');
            $curry = new Menu('CURRY',900,'https://s3-ap-northeast-1.amazonaws.com/progate/shared/images/lesson/php/curry.png');
            $pasta = new Menu('PASTA',1200,'https://s3-ap-northeast-1.amazonaws.com/progate/shared/images/lesson/php/pasta.png');

            $juice->setOrderCount(2); // $juiceに対して数値の2を引数としてsetOrderCountメソッドを呼び出し

            $menus = array($juice, $coffee, $curry, $pasta);
            // ここまでデータ定義部分
        ?>

    <h3>PHP 学習コース Ⅲ</h3>
      <h4>継承について学ぼう</h4>
        <h5>4. 継承</h5>
        <h5>5. 独自メソッド、プロパティ</h5>
        <h5>7.protected（オーバーライド）</h5>
          <p>Drinkクラスでtypeを追加</p>
        <h5>9. 継承について復習しよう</h5>
          <p>Foodクラスでspicinessを追加</p>

    <h3>PHP 学習コース Ⅳ</h3>
      <h4>詳細ページを作ろう</h4>
        <h5>6. Reviewのデータを作ろう</h5>

      <h4>ユーザーを追加しよう</h4>
        <h5>14. idでReviewとUserを紐付けよう</h5>

        <?php
          require_once('drink.php');
          require_once('food.php');
          require_once('review.php');
          require_once('user.php');

          $juice = new Drink('JUICE', 600, 'https://s3-ap-northeast-1.amazonaws.com/progate/shared/images/lesson/php/juice.png', 'アイス');
          $coffee = new Drink('COFFEE', 500, 'https://s3-ap-northeast-1.amazonaws.com/progate/shared/images/lesson/php/coffee.png', 'ホット');
          $curry = new Food('CURRY', 900, 'https://s3-ap-northeast-1.amazonaws.com/progate/shared/images/lesson/php/curry.png', 3);
          $pasta = new Food('PASTA', 1200, 'https://s3-ap-northeast-1.amazonaws.com/progate/shared/images/lesson/php/pasta.png', 1);
          
          $menus = array($juice, $coffee, $curry, $pasta);


          $user1 = new User('suzuki', 'male');
          $user2 = new User('tanaka', 'female');
          $user3 = new User('suzuki', 'female');
          $user4 = new User('sato', 'male');

          $users = array($user1, $user2, $user3, $user4);

          // 同じ名前の人がいるので、Idで紐付け
          $review1 = new Review($juice->getName(), $user1->getId(), '果肉たっぷりのオレンジジュースです！');
          $review2 = new Review($curry->getName(), $user1->getId(), '具がゴロゴロしていてとてもおいしいです');
          $review3 = new Review($coffee->getName(), $user2->getId(), '香りがいいです');
          $review4 = new Review($pasta->getName(), $user2->getId(), 'ソースが絶品です。また食べたい。');
          $review5 = new Review($juice->getName(), $user3->getId(), '普通のジュース');
          $review6 = new Review($curry->getName(), $user3->getId(), '値段の割においしいカレーだと思いました');
          $review7 = new Review($coffee->getName(), $user4->getId(), '苦味がちょうどよくて、おすすめです');
          $review8 = new Review($pasta->getName(), $user4->getId(), '具材にこだわりを感じました。');

          $reviews = array($review1, $review2, $review3, $review4, $review5, $review6, $review7, $review8);

        ?>
