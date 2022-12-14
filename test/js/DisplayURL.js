// import Beef from "../models/beefMode.js";
// const Beef = require("../models/beefMode");

let b = 1;

var Test = document.getElementsByClassName("meat-butn-on");
var Try = document.getElementById("try");

// const food = Beef({}, { _id: 0, foodName: 0, Link: 1, emoji: 0 });

// assign each button using className
for (let i = 0; i < Test.length; i++) {
  Test[i].onclick = function () {
    b++;
    if (b % 2 == 0) {
      Try.style.display = "block";
      Try.innerHTML = "hello";
    } else {
      Try.style.display = "none";
      Try.innerHTML = "gone";
    }
  };
}
