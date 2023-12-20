let inp = document.querySelector("input");
let ol = document.querySelector("ol");
let li = document.querySelector("li");

let btn = document.querySelector("button");
btn.addEventListener("click", function () {
  item = document.createElement("li");
  item.innerText = inp.value;
  ol.appendChild(item);
  inp.value = "";

  delbtn = document.createElement("button");
  delbtn.innerText = "Delete";
  delbtn.classList.add("delete");
  item.appendChild(delbtn);
});

ol.addEventListener("click", function (event) {
  let listItem = event.target.parentElement;
  if (event.target.nodeName == "BUTTON") {
    listItem.remove();
    alert("Removed Success  fully...");
  }
});
// 😆Not Working For New Items
// let delbtns = document.querySelectorAll(".delete");
// for (delbtn of delbtns) {
//   delbtn.addEventListener("click", function () {
//     let para = delbtn.parentElement;
//     console.log(para);
//     para.remove();
//   });
// }
