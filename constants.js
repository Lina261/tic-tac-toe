const cross = document.getElementById("cross");
const circle = document.getElementById("circle");
const field = document.getElementById("field");
const rows = document.getElementsByClassName("row");
const cells = document.querySelectorAll(".cell");
const len = rows.length

const winner = {
  circle: "кружочки",
  cross: "крестики",
};

const marks = {
  circle:
    '<svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" fill="currentColor" class="bi bi-circle" viewBox="0 0 16 16"> <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" fill="#1a0e3b"></path> </svg>',
  cross:
    '<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16"> <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" fill="#960f08"></path> </svg>',
};

