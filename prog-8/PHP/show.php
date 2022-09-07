<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Progate</title>
  <link rel="stylesheet" type="text/css" href="stylesheet.css">
  <link href='https://fonts.googleapis.com/css?family=Pacifico|Lato' rel='stylesheet' type='text/css'>
</head>
<body>

  <h3>PHP 学習コース Ⅳ</h3>
      <h4>詳細ページを作ろう</h4>
        <h5>2. リンクを作ろう</h5>
        <h5>3. クエリ情報</h5>
        <h5>4. 詳細ページの中身を作ろう</h5>
        <h5>7. レビューを表示しよう</h5>
        <h5>8. 関連するレビューを表示しよう</h5>

      <h4>ユーザーを追加しよう</h4>
        <h5>12. ユーザーの情報を表示しよう</h5>
        <h5>13. id</h5>
      
      <?php
      require_once('data.php');
      require_once('menu.php');

      $menuName = $_GET['name']; // $_GETでクエリ情報の値を受け取って、変数$menuNameに代入

      $menu = Menu::findByName($menus, $menuName); // Menuクラスに対して配列$menusから特定のMenuインスタンスを取得するfindByNameというクラスメソッドを呼び出し

      $menuReviews = $menu->getReviews($reviews); // $menuに対してgetReviewsメソッドを呼び出して、$menuReviewsに代入

      ?>

      <h6><?php echo $menuName ?>の詳細ページです</h6><!-- 変数$menuNameを表示 -->

      <div class="review-wrapper">
        <div class="review-menu-item">
          <img src="<?php echo $menu->getImage() ?>" class="menu-item-image">
          <h3 class="menu-item-name"><?php echo $menu->getName() ?></h3>
      
          <?php if ($menu instanceof Drink): ?>
            <p class="menu-item-type"><?php echo $menu->getType() ?></p>
          <?php else: ?>
            <?php for ($i = 0; $i < $menu->getSpiciness(); $i++): ?>
              <img src="https://s3-ap-northeast-1.amazonaws.com/progate/shared/images/lesson/php/chilli.png" class='icon-spiciness'>
            <?php endfor ?>
          <?php endif ?>
          <p class="price">¥<?php echo $menu->getTaxIncludedPrice() ?></p>
        </div>
        
        <div class="review-list-wrapper">
          <div class="review-list">
            <div class="review-list-title">
              <img src="https://s3-ap-northeast-1.amazonaws.com/progate/shared/images/lesson/php/review.png" class='icon-review'>
              <h4>レビュー一覧</h4>
            </div>

            <?php foreach($menuReviews as $review): ?><!-- 名前の一致したレビューのみを表示 -->
              
              <?php $user = $review->getUser($users) ?><!-- $reviewに対して、引数を$usersとしてgetUserメソッドを呼び出して、戻り値を変数$userに代入 --><!-- Reviewにひも付けされたUserを取得 -->

              <div class="review-list-item">
                <div class="review-user">

                  <?php if ($user->getGender() == 'male'): ?><!-- $userのgenderプロパティによって表示する画像を変える -->
                    <img src="https://s3-ap-northeast-1.amazonaws.com/progate/shared/images/lesson/php/male.png" class='icon-user'>
                  <?php else: ?>
                    <img src="https://s3-ap-northeast-1.amazonaws.com/progate/shared/images/lesson/php/female.png" class='icon-user'>
                  <?php endif ?>
                  
                  <p><?php echo $user->getId() ?></p><!-- $userのidプロパティを表示 -->
                  <p><?php echo $user->getName() ?></p><!-- $userのnameプロパティを表示 -->
                </div>
                <p class="review-text"><?php echo $review->getBody() ?></p>
              </div>
            <?php endforeach ?>
            
          </div>
        </div>
        <a href="index.php">← メニュー一覧へ</a>
      </div>


</body>
</html>

