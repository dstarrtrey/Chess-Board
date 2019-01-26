$(document).ready(function() {
  //THIS IS SIDEWAYS
  const chessboard = {
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
    a: ["wr1", "wp1", 3, 4, 5, 6, "bp1", "br1"],
    b: ["wk1", "wp2", 3, 4, 5, 6, "bp2", "bk1"],
    c: ["wb1", "wp3", 3, 4, 5, 6, "bp3", "bb1"],
    d: ["wq", "wp4", 3, 4, 5, 6, "bp4", "bki"],
    e: ["wki", "wp5", 3, 4, 5, 6, "bp5", "bq"],
    f: ["wb2", "wp6", 3, 4, 5, 6, "bp6", "bb2"],
    g: ["wk2", "wp7", 3, 4, 5, 6, "bp7", "bk2"],
    h: ["wr2", "wp8", 3, 4, 5, 6, "bp8", "br2"]
  };
  const letters = ["a", "b", "c", "d", "e", "f", "g", "h"];
  const PIECES = {
    wp1: {
      img: "assets/images/wp.png",
      start: "a2",
      type: "pawn",
      blocked: false,
      hasBeenMoved: false,
      canCapture: false
    },
    wp2: {
      img: "assets/images/wp.png",
      start: "b2",
      type: "pawn",
      blocked: false,
      hasBeenMoved: false,
      canCapture: false
    },
    wp3: {
      img: "assets/images/wp.png",
      start: "c2",
      type: "pawn",
      blocked: false,
      hasBeenMoved: false,
      canCapture: false
    },
    wp4: {
      img: "assets/images/wp.png",
      start: "d2",
      type: "pawn",
      blocked: false,
      hasBeenMoved: false,
      canCapture: false
    },
    wp5: {
      img: "assets/images/wp.png",
      start: "e2",
      type: "pawn",
      blocked: false,
      hasBeenMoved: false,
      canCapture: false
    },
    wp6: {
      img: "assets/images/wp.png",
      start: "f2",
      type: "pawn",
      blocked: false,
      hasBeenMoved: false,
      canCapture: false
    },
    wp7: {
      img: "assets/images/wp.png",
      start: "g2",
      type: "pawn",
      blocked: false,
      hasBeenMoved: false,
      canCapture: false
    },
    wp8: {
      img: "assets/images/wp.png",
      start: "h2",
      type: "pawn",
      blocked: false,
      hasBeenMoved: false,
      canCapture: false
    },
    bp1: {
      img: "assets/images/bp.png",
      start: "a7",
      type: "pawn",
      blocked: false,
      hasBeenMoved: false,
      canCapture: false
    },
    bp2: {
      img: "assets/images/bp.png",
      start: "b7",
      type: "pawn",
      blocked: false,
      hasBeenMoved: false,
      canCapture: false
    },
    bp3: {
      img: "assets/images/bp.png",
      start: "c7",
      type: "pawn",
      blocked: false,
      hasBeenMoved: false,
      canCapture: false
    },
    bp4: {
      img: "assets/images/bp.png",
      start: "d7",
      type: "pawn",
      blocked: false,
      hasBeenMoved: false,
      canCapture: false
    },
    bp5: {
      img: "assets/images/bp.png",
      start: "e7",
      type: "pawn",
      blocked: false,
      hasBeenMoved: false,
      canCapture: false
    },
    bp6: {
      img: "assets/images/bp.png",
      start: "f7",
      type: "pawn",
      blocked: false,
      hasBeenMoved: false,
      canCapture: false
    },
    bp7: {
      img: "assets/images/bp.png",
      start: "g7",
      type: "pawn",
      blocked: false,
      hasBeenMoved: false,
      canCapture: false
    },
    bp8: {
      img: "assets/images/bp.png",
      start: "h7",
      type: "pawn",
      blocked: false,
      hasBeenMoved: false,
      canCapture: false
    },
    wr1: {
      img: "assets/images/wr.png",
      start: "a1",
      type: "rook"
    },
    wr2: {
      img: "assets/images/wr.png",
      start: "h1",
      type: "rook"
    },
    br1: {
      img: "assets/images/br.png",
      start: "a8",
      type: "rook"
    },
    br2: {
      img: "assets/images/br.png",
      start: "h8",
      type: "rook"
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
      type: "king"
    },
    bki: {
      img: "assets/images/bki.png",
      start: "d8",
      type: "king"
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
  const MOVEMENT = {
    pawn: {
      moveOptions: piece => {
        if (piece.canCapture === false) {
          if (piece.blocked === false) {
            if (piece.hasBeenMoved === false) {
              return [[0, 1], [0, 2]];
            } else {
              return [[0, 1]];
            }
          } else {
            return [[1, 1]];
          }
        }
      },
      blocked: false,
      hasBeenMoved: false,
      canCapture: false
    }
  };
  const showMovementOptions = (piece, position) => {
    const optionsArr = MOVEMENT[piece.type].moveOptions(piece);
    for (let x = 0; x < optionsArr.length; x++) {
      let optionX = optionsArr[x][0];
      let optionY = optionsArr[x][1];
      let newXY =
        letters[letters.indexOf(position[0]) + optionX] +
        (parseInt(position[1]) + optionY);
      console.log(newXY);
      $(`#${newXY}`).addClass("hover");
    }
  };
  let myTurn = true;
  let myColor = "white";
  setUpGame();
  $(document).on("click", ".piece", function() {
    let coordinate = $(this).attr("id");
    if (myTurn === true && myColor === "white") {
      if ($(this).hasClass("w")) {
        const thisPiece = PIECES[$(this).attr("data-occupying")];
        showMovementOptions(thisPiece, coordinate);
        console.log(thisPiece);
      }
    } else if (myTurn === true && myColor === "b") {
      if ($(this).hasClass("black")) {
        //
      }
    }
  });
});
