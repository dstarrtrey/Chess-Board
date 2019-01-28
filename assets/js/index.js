$(document).ready(function() {
  //THIS IS SIDEWAYS
  const chessboardTemplate = {
    a: [1, 2, 3, 4, 5, 6, 7, 8],
    b: [1, 2, 3, 4, 5, 6, 7, 8],
    c: [1, 2, 3, 4, 5, 6, 7, 8],
    d: [1, 2, 3, 4, 5, 6, 7, 8],
    e: [1, 2, 3, 4, 5, 6, 7, 8],
    f: [1, 2, 3, 4, 5, 6, 7, 8],
    g: [1, 2, 3, 4, 5, 6, 7, 8],
    h: [1, 2, 3, 4, 5, 6, 7, 8]
  };
  const chessboardStart = {
    a: ["wr1", "wp1", "empty", "empty", "empty", "empty", "bp1", "br1"],
    b: ["wk1", "wp2", "empty", "empty", "empty", "empty", "bp2", "bk1"],
    c: ["wb1", "wp3", "empty", "empty", "empty", "empty", "bp3", "bb1"],
    d: ["wq", "wp4", "empty", "empty", "empty", "empty", "bp4", "bki"],
    e: ["wki", "wp5", "empty", "empty", "empty", "empty", "bp5", "bq"],
    f: ["wb2", "wp6", "empty", "empty", "empty", "empty", "bp6", "bb2"],
    g: ["wk2", "wp7", "empty", "empty", "empty", "empty", "bp7", "bk2"],
    h: ["wr2", "wp8", "empty", "empty", "empty", "empty", "bp8", "br2"]
  };
  let chessboard = JSON.parse(JSON.stringify(chessboardStart));
  const letters = ["a", "b", "c", "d", "e", "f", "g", "h"];
  const PIECES = {
    wp1: {
      img: "assets/images/wp.png",
      start: "a2",
      type: "pawn",
      hasBeenMoved: false
    },
    wp2: {
      img: "assets/images/wp.png",
      start: "b2",
      type: "pawn",
      hasBeenMoved: false
    },
    wp3: {
      img: "assets/images/wp.png",
      start: "c2",
      type: "pawn",
      hasBeenMoved: false
    },
    wp4: {
      img: "assets/images/wp.png",
      start: "d2",
      type: "pawn",
      hasBeenMoved: false
    },
    wp5: {
      img: "assets/images/wp.png",
      start: "e2",
      type: "pawn",
      hasBeenMoved: false
    },
    wp6: {
      img: "assets/images/wp.png",
      start: "f2",
      type: "pawn",
      hasBeenMoved: false
    },
    wp7: {
      img: "assets/images/wp.png",
      start: "g2",
      type: "pawn",
      hasBeenMoved: false
    },
    wp8: {
      img: "assets/images/wp.png",
      start: "h2",
      type: "pawn",
      hasBeenMoved: false
    },
    bp1: {
      img: "assets/images/bp.png",
      start: "a7",
      type: "pawn",
      hasBeenMoved: false
    },
    bp2: {
      img: "assets/images/bp.png",
      start: "b7",
      type: "pawn",
      hasBeenMoved: false
    },
    bp3: {
      img: "assets/images/bp.png",
      start: "c7",
      type: "pawn",
      hasBeenMoved: false
    },
    bp4: {
      img: "assets/images/bp.png",
      start: "d7",
      type: "pawn",
      hasBeenMoved: false
    },
    bp5: {
      img: "assets/images/bp.png",
      start: "e7",
      type: "pawn",
      hasBeenMoved: false
    },
    bp6: {
      img: "assets/images/bp.png",
      start: "f7",
      type: "pawn",
      hasBeenMoved: false
    },
    bp7: {
      img: "assets/images/bp.png",
      start: "g7",
      type: "pawn",
      hasBeenMoved: false
    },
    bp8: {
      img: "assets/images/bp.png",
      start: "h7",
      type: "pawn",
      hasBeenMoved: false
    },
    wr1: {
      img: "assets/images/wr.png",
      start: "a1",
      type: "rook",
      hasBeenMoved: false
    },
    wr2: {
      img: "assets/images/wr.png",
      start: "h1",
      type: "rook",
      hasBeenMoved: false
    },
    br1: {
      img: "assets/images/br.png",
      start: "a8",
      type: "rook",
      hasBeenMoved: false
    },
    br2: {
      img: "assets/images/br.png",
      start: "h8",
      type: "rook",
      hasBeenMoved: false
    },
    wk1: {
      img: "assets/images/wk.png",
      start: "b1",
      type: "knight"
    },
    wk2: {
      img: "assets/images/wk.png",
      start: "g1",
      type: "knight"
    },
    bk1: {
      img: "assets/images/bk.png",
      start: "b8",
      type: "knight"
    },
    bk2: {
      img: "assets/images/bk.png",
      start: "g8",
      type: "knight"
    },
    wb1: {
      img: "assets/images/wb.png",
      start: "c1",
      type: "bishop"
    },
    wb2: {
      img: "assets/images/wb.png",
      start: "f1",
      type: "bishop"
    },
    bb1: {
      img: "assets/images/bb.png",
      start: "c8",
      type: "bishop"
    },
    bb2: {
      img: "assets/images/bb.png",
      start: "f8",
      type: "bishop"
    },
    wq: {
      img: "assets/images/wq.png",
      start: "d1",
      type: "queen"
    },
    bq: {
      img: "assets/images/bq.png",
      start: "e8",
      type: "queen"
    },
    wki: {
      img: "assets/images/wki.png",
      start: "e1",
      type: "king",
      hasBeenMoved: false
    },
    bki: {
      img: "assets/images/bki.png",
      start: "d8",
      type: "king",
      hasBeenMoved: false
    }
  };
  const WHITEMOVEMENTOPTIONS = {
    pawn: (piece, x, y) => {
      let moveArr = [];
      if (chessboard[x][y + 1] === "empty") {
        if (y + 1 < 8) {
          moveArr.push([x, y + 1]);
        }
        if (piece.hasBeenMoved === false && chessboard[x][y + 2] === "empty") {
          moveArr.push([x, y + 2]);
        }
      }
      //capture/a passant
      if (x !== "a") {
        if (
          chessboard[letters[letters.indexOf(x) - 1]][y + 1].charAt(0) ===
            "b" ||
          PIECES[chessboard[letters[letters.indexOf(x) - 1]][y]]
            .hasBeenMoved === "justMoved"
        ) {
          moveArr.push([letters[letters.indexOf(x) - 1], y + 1]);
        }
      }
      //capture/a passant
      if (x !== "h") {
        if (
          chessboard[letters[letters.indexOf(x) + 1]][y + 1][0] === "b" ||
          PIECES[chessboard[letters[letters.indexOf(x) + 1]][y]]
            .hasBeenMoved === "justMoved"
        ) {
          moveArr.push([letters[letters.indexOf(x) + 1], y + 1]);
        }
      }
      return moveArr;
    },
    knight: (piece, x, y) => {
      const allOptions = [];
      for (let x = -2; x <= 2; x++) {
        if (x !== 0) {
          for (let y = -2; y <= 2; y++) {
            if (Math.abs(y) !== Math.abs(x) && y !== 0) {
              allOptions.push([x, y]);
            }
          }
        }
      }
      let moveArr = [];
      allOptions.forEach(option => {
        let optionX = letters[letters.indexOf(x) + option[0]];
        let optionY = y + option[1];
        if (optionX && optionY < 8 && optionY >= 0) {
          if (
            chessboard[optionX][optionY] &&
            chessboard[optionX][optionY].charAt(0) !== "w"
          ) {
            moveArr.push([optionX, optionY]);
          }
        }
      });
      return moveArr;
    },
    bishop: (piece, x, y) => {
      let xIndex = letters.indexOf(x);
      const upLeft = [];
      const downLeft = [];
      const upRight = [];
      const downRight = [];
      let moveArr = [];
      for (let x = 1; x < xIndex + 1; x++) {
        if (y + x < 8) {
          upLeft.push([xIndex - x, y + x]);
        }
        if (y - x > -1) {
          downLeft.push([xIndex - x, y - x]);
        }
      }
      for (let x = 1; x < 8 - xIndex; x++) {
        if (y + x < 8) {
          upRight.push([xIndex + x, y + x]);
        }
        if (y - x > -1) {
          downRight.push([xIndex + x, y - x]);
        }
      }
      upLeft.sort((a, b) => b[0] - a[0]);
      downLeft.sort((a, b) => b[0] - a[0]);
      upRight.sort((a, b) => a[0] - b[0]);
      downRight.sort((a, b) => a[0] - b[0]);
      for (let x = 0; x < upLeft.length; x++) {
        let opt = upLeft[x];
        if (chessboard[letters[opt[0]]][opt[1]] === "empty") {
          moveArr.push(chessboard[letters[opt[0]]][opt[1]]);
        } else if (chessboard[letters[opt[0]]][opt[1]].charAt(0) === "b") {
          moveArr.push(chessboard[letters[opt[0]]][opt[1]]);
          break;
        } else {
          break;
        }
      }
      for (let x = 0; x < upRight.length; x++) {
        let opt = upRight[x];
        if (chessboard[letters[opt[0]]][opt[1]] === "empty") {
          moveArr.push(chessboard[letters[opt[0]]][opt[1]]);
        } else if (chessboard[letters[opt[0]]][opt[1]].charAt(0) === "b") {
          moveArr.push(chessboard[letters[opt[0]]][opt[1]]);
          break;
        } else {
          break;
        }
      }
      for (let x = 0; x < downLeft.length; x++) {
        let opt = downLeft[x];
        if (chessboard[letters[opt[0]]][opt[1]] === "empty") {
          moveArr.push(chessboard[letters[opt[0]]][opt[1]]);
        } else if (chessboard[letters[opt[0]]][opt[1]].charAt(0) === "b") {
          moveArr.push(chessboard[letters[opt[0]]][opt[1]]);
          break;
        } else {
          break;
        }
      }
      for (let x = 0; x < downRight.length; x++) {
        let opt = downRight[x];
        if (chessboard[letters[opt[0]]][opt[1]] === "empty") {
          moveArr.push(chessboard[letters[opt[0]]][opt[1]]);
        } else if (chessboard[letters[opt[0]]][opt[1]].charAt(0) === "b") {
          moveArr.push(chessboard[letters[opt[0]]][opt[1]]);
          break;
        } else {
          break;
        }
      }
      return moveArr;
    }
  };
  const showMovementOptions = arr => {
    $(".hover").removeClass("hover");
    if (arr) {
      console.log("moves array: ", arr);
      arr.forEach(opt => {
        opt[1]++;
        $(`#${opt.join("")}`).addClass("hover");
      });
    }
  };
  const setUpGame = () => {
    Object.keys(PIECES).forEach(piece => {
      let currentPiece = PIECES[piece];
      $(`#${currentPiece.start}`)
        .attr("data-occupying", piece)
        .addClass(`${piece[0]} piece`);
      const imgFill = $("<img>").attr("src", currentPiece.img);
      $(`#${currentPiece.start}`).html(imgFill);
    });
  };
  let myTurn = true;
  let myColor = "white";
  setUpGame();
  $(document).on("click", ".piece", function() {
    let coordinate = $(this).attr("id");
    let locArr = coordinate.split("");
    let xPos = locArr[0];
    let yPos = locArr[1] - 1;
    if (myTurn === true && myColor === "white") {
      if ($(this).hasClass("w")) {
        const thisPiece = PIECES[$(this).attr("data-occupying")];
        showMovementOptions(
          WHITEMOVEMENTOPTIONS[thisPiece.type](thisPiece, xPos, yPos)
        );
      }
    } else if (myTurn === true && myColor === "black") {
      if ($(this).hasClass("b")) {
        //
      }
    }
  });
});
