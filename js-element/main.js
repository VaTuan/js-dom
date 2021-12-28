// const headingNode = document.getElementById("heading");
// const headingNodes = document.getElementsByClassName("heading");
// const tagNames = document.getElementsByTagName("a");
// const boxNode = document.querySelector("html .box-02");
// const boxNodes = document.querySelectorAll(".box-02");

// const box01 = document.querySelector(".box-1");
// const _box01 = document.getElementsByClassName("box-1");
// const box01s = document.querySelectorAll(".box-1 li");

// const _liBox01 = box01.getElementsByTagName("li");
// console.log("====================================");
// console.log(box01s);
// console.log("====================================");
const headingEl = document.querySelector("h1");
headingEl.title = "title test";
headingEl.data = "data test";
console.log("====================================");
console.log(headingEl.title);
console.log("====================================");
console.log("====================================");
console.log(headingEl.data);
console.log("====================================");

const headingEl02 = document.querySelector("h2");

headingEl02.setAttribute("class", "heading-02");
console.log(headingEl02.getAttribute("class"));
