  <h3>PHP 学習コース Ⅲ</h3>
    <h4>継承について学ぼう</h4>
      <h5>4. 継承</h5>
      <h5>9. 継承について復習しよう</h5>

      <?php
      require_once('menu.php');

      // Menuクラスを継承したFoodクラスを「extends」を用いて作成
      class Food extends Menu {
        private $spiciness;
  
      public function __construct($name, $price, $image, $spiciness) {
        parent::__construct($name, $price, $image);
        $this->spiciness = $spiciness;
      } // 親クラスの__constructをオーバーライド
      
      public function getSpiciness(){
        return $this->spiciness;
      } // getSpicinessメソッドを定義

      }

      ?>