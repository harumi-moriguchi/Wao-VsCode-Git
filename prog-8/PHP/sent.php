<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Progate</title>
  <link rel="stylesheet" type="text/css" href="stylesheet.css">
</head>
<body>
  <h3>PHP 学習コース I</h3>
  
    <h4>お問い合わせフォームを作ろう</h4>
      <h5>20.formタグ</h5>
      <h5>21.テキストボックス</h5>
      <h5>22.$_POST</h5>

      <div class="display-contact">
        <div class="form-title">入力内容</div>
        <div class="form-item">■ 名前</div>
          <p>
            <?php echo $_POST['name']; ?><!-- フォームで送信した値を受け取るには「$_POST」を使用 -->
          </p>
        <div class="form-item">■ 年齢</div>
          <p>
            <?php echo $_POST['age']; ?>
          </p>
        <div class="form-item">■ 内容</div>
          <p>
            <?php echo $_POST['body']; ?>
          </p>
      </div>


  <h3>PHP 学習コース Ⅱ</h3>
    <h4>オブジェクト指向を学ぼう</h4>
      <h5>15. フォームを作ろう</h5>
      <h5>16. フォームの値を受け取ろう</h5>
      <h5>17. 注文の小計を出そう</h5>
      <h5>18. 注文の合計金額を出そう</h5>

      <?php require_once('data.php') ?><!-- data.phpを読み込む  -->

      <div class="order-wrapper">
        <h6>注文内容確認</h6>

        <?php $totalPayment = 0 ?><!-- 変数$totalPaymentを定義し、数値の0を代入 -->

        <?php foreach ($menus as $menu): ?>
          
          <?php
            $orderCount = $_POST[$menu->getName()] ; //$orderCountに$_POSTで受け取ったname属性が$menu->getName()の値を代入
            $menu->setOrderCount($orderCount); // $menuのsetOrderCountメソッドを呼び出し（入力された$orderCountを引数とした）
            $totalPayment += $menu->getTotalPrice();　// $totalPaymentに、$menuのgetTotalPriceメソッドで得た値を足す
          ?> <!-- 入力された$orderCountを使う前に書かなければならない。formの送信先がsent.phpだから。 -->

          <p class="order-amount">
            <?php echo $menu->getName() ?><!-- $menuのゲッターを用いてnameプロパティを表示 -->
            x
            <?php echo $orderCount ?>
            個
          </p>

          <p class="order-price"><?php echo $menu->getTotalPrice() ?>円</p><!-- $menuのgetTotalPriceメソッドを呼び出し -->

        <?php endforeach ?>

        <p>合計金額: <?php echo $totalPayment ?>円</p>
      </div>

      



</body>
</html>