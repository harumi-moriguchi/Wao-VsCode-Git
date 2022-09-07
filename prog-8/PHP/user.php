  <h3>PHP 学習コース Ⅳ</h3>
    <h4>ユーザーを追加しよう</h4>
      <h5>9. Userクラスを作ろう</h5>
      <h5>13. id</h5>

      <?php

      class User {
        private $id;
        private $name;
        private $gender;
        private static $count = 0; // ユーザーidに1から順に番号を入れるため
        
        public function __construct($name, $gender) {
          $this->name = $name;
          $this->gender = $gender;
          self::$count++; // インスタンスが生成される度に1を足す
          $this->id = self::$count; // インスタンスが生成された時の$countの値をidプロパティに代入
        }
        
        public function getId() {
          return $this->id;
        }

        public function getName() {
          return $this->name;
        }
        
        public function getGender() {
          return $this->gender;
        }
      }

      ?>