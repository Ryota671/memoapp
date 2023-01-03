var e = document.getElementsByClassName("add-btn");

e[0].addEventListener("click", function () {
  var listText = document.getElementById("add-area");
  var text = document.createTextNode("listText.value");
  var li = document.createElement("li");
  var list = document.getElementById("todo");

  li.appendChild(text);
  list.appendChild(li);
});
