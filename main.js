var e = document.getElementsByClassName("add-btn");

e[0].addEventListener("click", function () {
  addElement();
  trashBox();
  checkBox();
});

function addElement() {
  var listText = document.getElementById("add-area");
  var text = document.createTextNode(listText.value);
  var li = document.createElement("li");
  li.appendChild(text);

  // li要素にボタンを追加
  var trash = document.createElement("span");
  trash.classList.add("trashPosition");
  trash.classList.add("trash");
  trash.innerHTML = '削除　<i class="fas fa-trash-alt"></i>';
  li.appendChild(trash);

  var check = document.createElement("span");
  check.classList.add("checkPosition");
  check.classList.add("check");
  check.innerHTML = '完了　<i class="far fa-check-square"></i>';
  li.appendChild(check);

  var lists = document.getElementById("todo");
  lists.appendChild(li);
}

// todoリスト内の削除ボタン
function trashBox() {
  var trash = document.getElementsByClassName("trash");
  // クリックしたliタグの配列数を取得
  for (var i = 0; i < trash.length; i++) {
    trash[i].addEventListener("click", function () {
      // thisはtrash[i]にあたる
      var li = this.parentNode;
      li.remove();
      // console.log(i);
    });
  }
}

function checkBox() {
  var check = document.getElementsByClassName("check");
  var done = document.getElementById("done");
  for (var i = 0; i < check.length; i++) {
    check[i].addEventListener("click", function () {
      var li = this.parentNode;
      done.appendChild(li);
      this.remove();
    });
  }
}
