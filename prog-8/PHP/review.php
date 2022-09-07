  <h3>PHP 学習コース Ⅳ</h3>
    <h4>詳細ページを作ろう</h4>
      <h5>5. Reviewクラスを作ろう</h5>

    <h4>ユーザーを追加しよう</h4>
      <h5>11. ReviewとUserをひも付けよう</h5>
      <h5>14. idでReviewとUserを紐付けよう</h5>

      <?php
      // Reviewクラスを定義
      class Review {
        private $menuName;
        private $userId;
        private $body;
        
        public function __construct($menuName, $userId, $body) {
          $this->menuName = $menuName;
          $this->userId = $userId;
          $this->body = $body;
        }
        
        public function getMenuName() {
          return $this->menuName;
        }
        
        public function getBody() {
          return $this->body;
        }

        // getUserメソッドを定義
        public function getUser($users) {
          foreach ($users as $user) {
            if ($user->getId() == $this->userId) {
              return $user;
            } // UserインスタンスがもつnameプロパティとReviewインスタンスがもつuserNameプロパティが同じならば、そのUserインスタンスを戻り値とする。
          }
        }

      }

      ?>