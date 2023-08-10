let myturn = new Audio("x0CHANGE.wav");
let gameover = new Audio("GAMEOVER.wav");

let turn = "✘";
let isGameover = false;

//function to change the turn
const changeturn = () => {
  return turn === "✘" ? "O" : "✘";
};
//function to check for a win
const checkWin = () => {
  let boxtext = document.getElementsByClassName("boxtext");
  let wins = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 4, 8],
    [2, 4, 6],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
  ];
  wins.forEach((e) => {
    if (
      boxtext[e[0]].innerText === boxtext[e[1]].innerText &&
      boxtext[e[2]].innerText === boxtext[e[1]].innerText &&
      boxtext[e[0]].innerText !== ""
    ) {
      document.querySelector(".info").innerText =
        boxtext[e[0]].innerText + " Won";
      isGameover = true;
      gameover.play();
      document
        .querySelector(".imgbox")
        .getElementsByTagName("img")[0].style.width = "300px";
    }
  });
};

//Main logic of this Game
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach((element) => {
  let boxtext = element.querySelector(".boxtext");

  element.addEventListener("click", () => {
    if (boxtext.innerText === "") {
      boxtext.innerText = turn;
      turn = changeturn();
      myturn.play();
      checkWin();

      if (!isGameover) {
        document.getElementsByClassName("info")[0].innerText =
          "Turn for" + turn;
      }
    }
  });
});
//add on click listener to reset btn
reset.addEventListener("click", () => {
  let boxtext = document.querySelectorAll(".boxtext");
  Array.from(boxtext).forEach((element) => {
    element.innerText = "";
  });
  turn = "✘";
  isGameover = false;
  document.getElementsByClassName("info")[0].innerText = "Turn for" + turn;
  document.querySelector(".imgbox").getElementsByTagName("img")[0].style.width =
    "0px";
});
