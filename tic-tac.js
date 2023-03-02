let emptyCells = field.querySelectorAll("td").length;
let activeMark;

function changeMark(mark) {
  if (mark === "cross") {
    cross.style.border = "3px solid white";
    circle.style.border = "";
  } else {
    circle.style.border = "3px solid white";
    cross.style.border = "";
  }
  activeMark = mark;
}

cross.addEventListener("click", () => {
  changeMark("cross");
});

circle.addEventListener("click", () => {
  changeMark("circle");
});

field.addEventListener("click", (event) => {
  if (!activeMark) {
    swal("Выберите игровой знак");
    return;
  }

  if (!event.target.innerHTML && event.target.tagName === "TD") {
    event.target.innerHTML = marks[activeMark];
    emptyCells--;
  }

  if (emptyCells > 0) {
    if (checkWin()) {
      swal(`Опа! Победили ${winner[activeMark]} 🎉`);
      setTimeout(clear, 3000);
    }
  } else {
    swal("Ничья! Победила дружба! 🤝");
    setTimeout(clear, 3000);
  }

  changeMark(activeMark === "cross" ? "circle" : "cross");
});

function clear() {
  for (const item of cells) {
    item.innerHTML = "";
  }
  emptyCells = field.querySelectorAll("td").length;
  circle.style.border = "";
  cross.style.border = "";
  activeMark = "";
}

function checkWin() {
  let arr = [...Array(len).keys()];

  for (let i = 0; i < rows.length; i++) {
    let rowCells = [...rows[i].getElementsByTagName("td")];

    //check rows
    if (
      rowCells.every((cell) => cell.innerHTML) &&
      rowCells.every((cell) => cell.isEqualNode(rowCells[0]))
    ) {
      return true;
    }

    //check columns
    if (
      arr.every((index) => rows[index].children[i].innerHTML) &&
      arr.every((index) =>
        rows[index].children[i].isEqualNode(rows[i].children[i])
      )
    ) {
      return true;
    }
  }

  //check diagonals
  if (
    arr.every((index) => rows[index].children[index].innerHTML) &&
    arr.every((index) =>
      rows[index].children[index].isEqualNode(rows[0].children[0])
    )
  ) {
    return true;
  }

  if (
    arr.every((index) => rows[index].children[len - index - 1].innerHTML) &&
    arr.every((index) =>
      rows[index].children[len - index - 1].isEqualNode(
        rows[0].children[len - 1]
      )
    )
  ) {
    return true;
  }
}
