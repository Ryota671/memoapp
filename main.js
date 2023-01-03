var e = document.getElementsByClassName("add-btn");

e[0].addEventListener("click", function () {
  var listText = document.getElementById("add-area");
  var text = document.createTextNode("listText.value");
  var li = document.createElement("li");
  var list = document.getElementById("todo");

  li.appendChild(text);
  list.appendChild(li);
});

function addElement() {
  var text = document.createTextNode("listText.value");
  var li = document.createElement("li");
  var list = document.getElementById("todo");

  li.appendChild(text);
  list.appendChild(li);

  var trash = document.createElement("span");
  trash.classList.add("trash");
  trash.innerHTML = '削除　<i class="fas fa-trash-alt"></i>';
  li.appendChild(trash);

  var check = document.createElement("span");
  check.classList.add("check");
  check.innerHTML = '完了　<i class="far fa-check-square"></i>';
  li.appendChild(check);
}
