  <h3>PHP 学習コース Ⅲ</h3>
    <h4>継承について学ぼう</h4>
      <h5>4. 継承</h5>
      <h5>5. 独自メソッド、プロパティ</h5>
      <h5>7.protected（オーバーライド）</h5>
      <h5>8.parent（コードをまとめよう）</h5>

      <?php
      require_once('menu.php');

      // Menuクラスを継承したDrinkクラスを「extends」を用いて作成
      class Drink extends Menu {
        private $type; // Drink独自のプロパティ

        public function __construct($name, $price, $image, $type)　{
          parent::__construct($name, $price, $image); // Menuクラスのメソッドを呼び出し
          $this->type = $type;
        } // Menuクラスの__constructをDrinkクラスでオーバーライド
  
        public function getType(){
          return $this->type;
        } // Drink独自のメソッド
        
        public function setType($type){
          $this->type = $type;
        } // Drink独自のメソッド

      }

      ?>