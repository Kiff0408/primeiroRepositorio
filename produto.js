
var size = document.querySelector(".size-pick");
console.log(size)
var choices = size.childNodes;

size.addEventListener("click", function (e) {
  console.log(e.target);
  choices.forEach(function (escolha) {
    escolha.classList.remove("ativo");
  });
  e.target.classList.add("ativo");
});

var imageList = document.querySelector(".image-list");
var mainImage = document.querySelector(".main-image");
imageList.addEventListener("click", function (e) {
  if (e.target.tagName === "IMG")
    mainImage.setAttribute("src", e.target.getAttribute("src"));
});