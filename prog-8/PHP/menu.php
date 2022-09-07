  <h3>PHP 学習コース Ⅱ</h3>
      <h4>オブジェクト指向を学ぼう</h4>
        <h5>10. ファイルを分けよう</h5>
          <p>「require_once」を用いると別のphpファイルを読み込むことができます。</p>
        <h5>11.画像と価格を表示しよう</h5>
        <h5>12.税込価格を表示しよう</h5>
        
        <?php
          // クラスの定義部分
          class Menu {
            public $name;
            public $price;
            public $image;
            
            public function __construct($name,$price,$image) {
              $this->name = $name;
              $this->price = $price;
              $this->image = $image;
            }

            public function getTaxIncludedPrice(){
              return floor($this->price * 1.08); //小数点以下の切り捨てにはfloor()関数を用います。
            } // getTaxIncludedPriceメソッドを定義

          // ここまでクラスの定義
          }
        ?>

        
        <h5>13. カプセル化を学ぼう</h5>
          <p>クラスの外部からアクセスできるようにするには「public」を、アクセスできないようにするには「private」を用いて定義します。プロパティ（インスタンスが持つデータ）は基本的にアクセス権をprivateにします。</p>
          <p>プロパティのアクセス権をprivateにするとプロパティの値をクラスの外から取り出すことができなくなります。そこで、プロパティの値を返すだけのメソッド「ゲッター」を定義します。</p>
        <h5>14. 注文個数を管理しよう</h5>
          <p>プロパティの値を変更するメソッドを特に「セッター」といいます。</p>
        <h5>15. フォームを作ろう</h5>
        <h5>16. フォームの値を受け取ろう</h5>
        <h5>17. 注文の小計を出そう</h5>
        <h5>18. 注文の合計金額を出そう</h5>
        
        <?php
          class Menu {
            private $name; // アクセス権をpublicでなくprivate
            private $price;
            private $image;

            private $orderCount = 0; // 初期値を数値の0
            
            public function __construct($name,$price,$image) {
              $this->name = $name;
              $this->price = $price;
              $this->image = $image;
            }

            public function getName(){
              return $this->name;
            } // $nameをクラスの外で使うためにゲッターを定義
            
            public function getImage(){
              return $this->image;
            } // $imageをクラスの外で使うためにゲッターを定義

            public function getOrderCount() {
              return $this->orderCount;
            } // $orderCountをクラスの外で使うためにゲッターを定義
  
            public function setOrderCount($orderCount) {
              $this->orderCount = $orderCount;
            } // $orderCountを変更するためにセッターを定義

            public function getTaxIncludedPrice(){
              return floor($this->price * 1.08);
            }

            public function getTotalPrice() {
              return $this->getTaxIncludedPrice() * $this->orderCount;
            }

          }
        ?>

  <h3>PHP 学習コース Ⅲ</h3>
      <h4>オブジェクト指向を学ぼう</h4>
        <h5>1. 目標物を確認しよう</h5>
        <h5>2. クラスプロパティ</h5>
          <p>個々のインスタンスがもつデータ（プロパティ）ではなく、クラスがもつデータをクラスプロパティといいます。クラスプロパティは「static」を用いて定義します。</p>
        <h5>3. クラスメソッド</h5>
          <p>$countの初期値を0として、コンストラクタ（__construct()）内で$countの値に1を足すことで、生成されたインスタンスの数（メニュー数）を数えることができます。</p>
          <p>クラス内でクラスプロパティにアクセスする際は「self」という特殊な変数を用います。selfは、クラスの中で使うとそのクラス自身のことを指し示し、「self::$クラスプロパティ名」のように使います。</p>
          <p>$countのアクセス権をprivateにしましょう。するとクラスの外から$countにアクセスできなくなるので$countのゲッターを定義します。$countのゲッターのように、個々のインスタンスのデータに関係ない処理を行いたい時には「クラスメソッド」を用います。クラスメソッドは「static」を用いて定義し、「クラス名::クラスメソッド名」のように呼び出します。</p>
        <h5>7.protected</h5>
          <p>同じ名前のメソッドを子クラスで定義するとメソッドの中身を上書きすることができます。このようなメソッドの上書きを「オーバーライド」と言います。</p>

  <h3>PHP 学習コース Ⅳ</h3>
    <h4>詳細ページを作ろう</h4>
      <h5>4. 詳細ページの中身を作ろう</h5>
      <h5>8. 関連するレビューを表示しよう</h5>

        <?php
          class Menu {
            protected $name; // 子クラスでオーバーライドできるようにprotectedで定義
            protected $price;
            protected $image;
            private $orderCount = 0;
            
            protected static $count = 0; // $countというクラスプロパティを「static」を用いて定義
            
            public function __construct($name,$price,$image) {
              $this->name = $name;
              $this->price = $price;
              $this->image = $image;

              self::$count++; // クラスプロパティcountの値に1を足す。selfはそのクラス自身。
            }

            public function getName(){
              return $this->name;
            }
            
            public function getImage(){
              return $this->image;
            }

            public function getOrderCount() {
              return $this->orderCount;
            }
  
            public function setOrderCount($orderCount) {
              $this->orderCount = $orderCount;
            }

            public function getTaxIncludedPrice(){
              return floor($this->price * 1.08);
            }

            public function getTotalPrice() {
              return $this->getTaxIncludedPrice() * $this->orderCount;
            }

            // getReviewsメソッドを定義
            // レビューのmenuNameプロパティとメニューのnameプロパティが同じなら、$reviewインスタンスを$reviewsForMenuの配列に追加
            public function getReviews($reviews) {
              $reviewsForMenu = array(); // 空の配列を用意
              foreach ($reviews as $review) {
                if ($review->getMenuName() == $this->name) {
                  $reviewsForMenu[] = $review;
                }
              }
              return $reviewsForMenu;
            }

            public static function getCount() {
              return self::$count;
            } // $countをprivateにしたので、$countのゲッターを定義。クラスメソッドは「static」を用いて定義。

            // 配列$menusから特定のMenuインスタンスを取得するfindByNameというクラスメソッドを定義
            public static function findByName($menus, $name) {
              foreach ($menus as $menu) {
                if ($menu->getName() == $name) {
                  return $menu;
                } // ↑このreturnが終わると処理が終了。以降の繰り返しは行われない。
              }
            }

          }
        ?>