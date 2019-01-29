$(document).ready(function() {
  // Initialize Firebase
  const config = {
    apiKey: "AIzaSyCavSUHbCx7Dpc3jEKeOHfROmqh-dpRjnQ",
    authDomain: "chess-board-18176.firebaseapp.com",
    databaseURL: "https://chess-board-18176.firebaseio.com",
    projectId: "chess-board-18176",
    storageBucket: "",
    messagingSenderId: "8808173500"
  };
  firebase.initializeApp(config);
  const database = firebase.database();
  database.ref("/chessboard").on("value", function(snapshot) {
    console.log(snapshot.val());
    Object.keys(snapshot.val()).forEach(letter => {
      console.log(snapshot.val()[letter]);
      for (let y = 0; y < snapshot.val()[letter].length; y++){
        $(`#${letter}${y + 1}`)
          .removeClass("w b piece")
          .attr("data-occupying", "")
          .empty();
        console.log(snapshot.val()[letter][y][0]);
        if (snapshot.val()[letter][y][0] != "e") {
          $(`#${letter}${y + 1}`)
            .addClass(`${snapshot.val()[letter][y][0]} piece`)
            .attr("data-occupying", snapshot.val()[letter][y])
            .append(
              $("<img>").attr("src", PIECES[snapshot.val()[letter][y]].img)
            );
        }
      }
    });
  });
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
      name: "wp1",
      img: "assets/images/wp.png",
      start: "a2",
      type: "pawn",
      hasBeenMoved: false
    },
    wp2: {
      name: "wp2",
      img: "assets/images/wp.png",
      start: "b2",
      type: "pawn",
      hasBeenMoved: false
    },
    wp3: {
      name: "wp3",
      img: "assets/images/wp.png",
      start: "c2",
      type: "pawn",
      hasBeenMoved: false
    },
    wp4: {
      name: "wp4",
      img: "assets/images/wp.png",
      start: "d2",
      type: "pawn",
      hasBeenMoved: false
    },
    wp5: {
      name: "wp5",
      img: "assets/images/wp.png",
      start: "e2",
      type: "pawn",
      hasBeenMoved: false
    },
    wp6: {
      name: "wp6",
      img: "assets/images/wp.png",
      start: "f2",
      type: "pawn",
      hasBeenMoved: false
    },
    wp7: {
      name: "wp7",
      img: "assets/images/wp.png",
      start: "g2",
      type: "pawn",
      hasBeenMoved: false
    },
    wp8: {
      name: "wp8",
      img: "assets/images/wp.png",
      start: "h2",
      type: "pawn",
      hasBeenMoved: false
    },
    bp1: {
      name: "bp1",
      img: "assets/images/bp.png",
      start: "a7",
      type: "pawn",
      hasBeenMoved: false
    },
    bp2: {
      name: "bp2",
      img: "assets/images/bp.png",
      start: "b7",
      type: "pawn",
      hasBeenMoved: false
    },
    bp3: {
      name: "bp3",
      img: "assets/images/bp.png",
      start: "c7",
      type: "pawn",
      hasBeenMoved: false
    },
    bp4: {
      name: "bp4",
      img: "assets/images/bp.png",
      start: "d7",
      type: "pawn",
      hasBeenMoved: false
    },
    bp5: {
      name: "bp5",
      img: "assets/images/bp.png",
      start: "e7",
      type: "pawn",
      hasBeenMoved: false
    },
    bp6: {
      name: "bp6",
      img: "assets/images/bp.png",
      start: "f7",
      type: "pawn",
      hasBeenMoved: false
    },
    bp7: {
      name: "bp7",
      img: "assets/images/bp.png",
      start: "g7",
      type: "pawn",
      hasBeenMoved: false
    },
    bp8: {
      name: "bp8",
      img: "assets/images/bp.png",
      start: "h7",
      type: "pawn",
      hasBeenMoved: false
    },
    wr1: {
      name: "wr1",
      img: "assets/images/wr.png",
      start: "a1",
      type: "rook",
      hasBeenMoved: false
    },
    wr2: {
      name: "wr2",
      img: "assets/images/wr.png",
      start: "h1",
      type: "rook",
      hasBeenMoved: false
    },
    br1: {
      name: "br1",
      img: "assets/images/br.png",
      start: "a8",
      type: "rook",
      hasBeenMoved: false
    },
    br2: {
      name: "br2",
      img: "assets/images/br.png",
      start: "h8",
      type: "rook",
      hasBeenMoved: false
    },
    wk1: {
      name: "wk1",
      img: "assets/images/wk.png",
      start: "b1",
      type: "knight"
    },
    wk2: {
      name: "wk2",
      img: "assets/images/wk.png",
      start: "g1",
      type: "knight"
    },
    bk1: {
      name: "bk1",
      img: "assets/images/bk.png",
      start: "b8",
      type: "knight"
    },
    bk2: {
      name: "bk2",
      img: "assets/images/bk.png",
      start: "g8",
      type: "knight"
    },
    wb1: {
      name: "wb1",
      img: "assets/images/wb.png",
      start: "c1",
      type: "bishop"
    },
    wb2: {
      name: "wb2",
      img: "assets/images/wb.png",
      start: "f1",
      type: "bishop"
    },
    bb1: {
      name: "bb1",
      img: "assets/images/bb.png",
      start: "c8",
      type: "bishop"
    },
    bb2: {
      name: "bb2",
      img: "assets/images/bb.png",
      start: "f8",
      type: "bishop"
    },
    wq: {
      name: "wq",
      img: "assets/images/wq.png",
      start: "d1",
      type: "queen"
    },
    bq: {
      name: "bq",
      img: "assets/images/bq.png",
      start: "e8",
      type: "queen"
    },
    wki: {
      name: "wki",
      img: "assets/images/wki.png",
      start: "e1",
      type: "king",
      hasBeenMoved: false
    },
    bki: {
      name: "bki",
      img: "assets/images/bki.png",
      start: "d8",
      type: "king",
      hasBeenMoved: false
    }
  };
  const MOVEPIECE = (piece, location, destination) => {
    let position = location.split("");
    let goTo = destination.split("");
    $(".hover").removeClass("hover");
    $(".selected").removeClass("selected");
    if (piece.hasBeenMoved === false) {
      PIECES[piece.name].hasBeenMoved = "justMoved";
    } else if (piece.hasBeenMoved === "justMoved") {
      PIECES[piece.name].hasBeenMoved = true;
    }
    chessboard[position[0]][position[1] - 1] = "empty";
    chessboard[goTo[0]][goTo[1] - 1] = piece.name;
    $(`#${location}`)
      .removeClass("w b piece")
      .attr("data-occupying", "")
      .empty();
    $(`#${destination}`)
      .empty()
      .attr("data-occupying", "")
      .removeClass("w b piece")
      .addClass(`${piece.name.charAt(0)} piece`)
      .attr("data-occupying", piece.name)
      .append($("<img>").attr("src", piece.img));
    database.ref("/chessboard").set(chessboard);
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
        if (chessboard[letters[letters.indexOf(x) - 1]][y + 1][0] === "b") {
          moveArr.push([letters[letters.indexOf(x) - 1], y + 1]);
        }
        if (chessboard[letters[letters.indexOf(x) - 1]][y][0] === "b") {
          if (
            PIECES[chessboard[letters[letters.indexOf(x) - 1]][y]]
              .hasBeenMoved === "justMoved"
          ) {
            moveArr.push([letters[letters.indexOf(x) - 1], y + 1]);
          }
        }
      }
      //capture/a passant
      if (x !== "h") {
        if (chessboard[letters[letters.indexOf(x) + 1]][y + 1][0] === "b") {
          moveArr.push([letters[letters.indexOf(x) + 1], y + 1]);
        }
        if (chessboard[letters[letters.indexOf(x) + 1]][y][0] === "b") {
          if (
            PIECES[chessboard[letters[letters.indexOf(x) + 1]][y]]
              .hasBeenMoved === "justMoved"
          ) {
            moveArr.push([letters[letters.indexOf(x) + 1], y + 1]);
          }
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
      let options = [upLeft, downLeft, upRight, downRight];
      options.forEach(arr => {
        for (let x = 0; x < arr.length; x++) {
          let opt = arr[x];
          if (chessboard[letters[opt[0]]][opt[1]] === "empty") {
            moveArr.push([letters[opt[0]], opt[1]]);
          } else if (chessboard[letters[opt[0]]][opt[1]].charAt(0) === "b") {
            moveArr.push([letters[opt[0]], opt[1]]);
            break;
          } else {
            break;
          }
        }
      });
      return moveArr;
    },
    rook: (piece, x, y) => {
      let xIndex = letters.indexOf(x);
      const left = [];
      const right = [];
      const down = [];
      const up = [];
      let moveArr = [];
      for (let i = 0; i < xIndex; i++) {
        left.push([i, y]);
      }
      for (let i = xIndex + 1; i < 8; i++) {
        right.push([i, y]);
      }
      for (let i = 0; i < y; i++) {
        down.push([xIndex, i]);
      }
      for (let i = y + 1; i < 8; i++) {
        up.push([xIndex, i]);
      }
      left.sort((a, b) => b[0] - a[0]);
      right.sort((a, b) => a[0] - b[0]);
      down.sort((a, b) => b[1] - a[1]);
      up.sort((a, b) => a[1] - b[1]);
      const options = [left, right, up, down];
      options.forEach(arr => {
        for (let i = 0; i < arr.length; i++) {
          let opt = arr[i];
          if (chessboard[letters[opt[0]]][opt[1]] === "empty") {
            moveArr.push([letters[opt[0]], opt[1]]);
          } else if (chessboard[letters[opt[0]]][opt[1]].charAt(0) === "b") {
            moveArr.push([letters[opt[0]], opt[1]]);
            break;
          } else {
            break;
          }
        }
      });
      return moveArr;
    },
    queen: (piece, x, y) => {
      let xIndex = letters.indexOf(x);
      const up = [];
      const upRight = [];
      const right = [];
      const downRight = [];
      const down = [];
      const downLeft = [];
      const left = [];
      const upLeft = [];
      let moveArr = [];
      for (let i = y + 1; i < 8; i++) {
        up.push([xIndex, i]);
      }
      for (let i = xIndex + 1; i < 8; i++) {
        right.push([i, y]);
      }
      for (let x = 1; x < 8 - xIndex; x++) {
        if (y + x < 8) {
          upRight.push([xIndex + x, y + x]);
        }
        if (y - x > -1) {
          downRight.push([xIndex + x, y - x]);
        }
      }
      for (let i = 0; i < y; i++) {
        down.push([xIndex, i]);
      }
      for (let i = 0; i < xIndex; i++) {
        left.push([i, y]);
      }
      for (let x = 1; x < xIndex + 1; x++) {
        if (y + x < 8) {
          upLeft.push([xIndex - x, y + x]);
        }
        if (y - x > -1) {
          downLeft.push([xIndex - x, y - x]);
        }
      }
      up.sort((a, b) => a[1] - b[1]);
      upRight.sort((a, b) => a[0] - b[0]);
      right.sort((a, b) => a[0] - b[0]);
      downRight.sort((a, b) => a[0] - b[0]);
      down.sort((a, b) => b[1] - a[1]);
      downLeft.sort((a, b) => b[0] - a[0]);
      left.sort((a, b) => b[0] - a[0]);
      upLeft.sort((a, b) => b[0] - a[0]);
      const options = [
        up,
        upRight,
        right,
        downRight,
        down,
        downLeft,
        left,
        upLeft
      ];
      options.forEach(arr => {
        for (let i = 0; i < arr.length; i++) {
          let opt = arr[i];
          if (chessboard[letters[opt[0]]][opt[1]] === "empty") {
            moveArr.push([letters[opt[0]], opt[1]]);
          } else if (chessboard[letters[opt[0]]][opt[1]].charAt(0) === "b") {
            moveArr.push([letters[opt[0]], opt[1]]);
            break;
          } else {
            break;
          }
        }
      });
      return moveArr;
    }
  };
  const BLACKMOVEMENTOPTIONS = {
    pawn: (piece, x, y) => {
      let moveArr = [];
      if (chessboard[x][y - 1] === "empty") {
        if (y - 1 >= 0) {
          moveArr.push([x, y - 1]);
        }
        if (piece.hasBeenMoved === false && chessboard[x][y - 2] === "empty") {
          moveArr.push([x, y - 2]);
        }
      }
      //capture/a passant
      if (x !== "a") {
        if (chessboard[letters[letters.indexOf(x) - 1]][y - 1][0] === "b") {
          moveArr.push([letters[letters.indexOf(x) - 1], y - 1]);
        }
        if (chessboard[letters[letters.indexOf(x) - 1]][y][0] === "b") {
          if (
            PIECES[chessboard[letters[letters.indexOf(x) - 1]][y]]
              .hasBeenMoved === "justMoved"
          ) {
            moveArr.push([letters[letters.indexOf(x) - 1], y - 1]);
          }
        }
      }
      //capture/a passant
      if (x !== "h") {
        if (chessboard[letters[letters.indexOf(x) + 1]][y - 1][0] === "b") {
          moveArr.push([letters[letters.indexOf(x) + 1], y - 1]);
        }
        if (chessboard[letters[letters.indexOf(x) + 1]][y][0] === "b") {
          if (
            PIECES[chessboard[letters[letters.indexOf(x) + 1]][y]]
              .hasBeenMoved === "justMoved"
          ) {
            moveArr.push([letters[letters.indexOf(x) + 1], y - 1]);
          }
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
      let options = [upLeft, downLeft, upRight, downRight];
      options.forEach(arr => {
        for (let x = 0; x < arr.length; x++) {
          let opt = arr[x];
          if (chessboard[letters[opt[0]]][opt[1]] === "empty") {
            moveArr.push([letters[opt[0]], opt[1]]);
          } else if (chessboard[letters[opt[0]]][opt[1]].charAt(0) === "b") {
            moveArr.push([letters[opt[0]], opt[1]]);
            break;
          } else {
            break;
          }
        }
      });
      return moveArr;
    },
    rook: (piece, x, y) => {
      let xIndex = letters.indexOf(x);
      const left = [];
      const right = [];
      const down = [];
      const up = [];
      let moveArr = [];
      for (let i = 0; i < xIndex; i++) {
        left.push([i, y]);
      }
      for (let i = xIndex + 1; i < 8; i++) {
        right.push([i, y]);
      }
      for (let i = 0; i < y; i++) {
        down.push([xIndex, i]);
      }
      for (let i = y + 1; i < 8; i++) {
        up.push([xIndex, i]);
      }
      left.sort((a, b) => b[0] - a[0]);
      right.sort((a, b) => a[0] - b[0]);
      down.sort((a, b) => b[1] - a[1]);
      up.sort((a, b) => a[1] - b[1]);
      const options = [left, right, up, down];
      options.forEach(arr => {
        for (let i = 0; i < arr.length; i++) {
          let opt = arr[i];
          if (chessboard[letters[opt[0]]][opt[1]] === "empty") {
            moveArr.push([letters[opt[0]], opt[1]]);
          } else if (chessboard[letters[opt[0]]][opt[1]].charAt(0) === "b") {
            moveArr.push([letters[opt[0]], opt[1]]);
            break;
          } else {
            break;
          }
        }
      });
      return moveArr;
    },
    queen: (piece, x, y) => {
      let xIndex = letters.indexOf(x);
      const up = [];
      const upRight = [];
      const right = [];
      const downRight = [];
      const down = [];
      const downLeft = [];
      const left = [];
      const upLeft = [];
      let moveArr = [];
      for (let i = y + 1; i < 8; i++) {
        up.push([xIndex, i]);
      }
      for (let i = xIndex + 1; i < 8; i++) {
        right.push([i, y]);
      }
      for (let x = 1; x < 8 - xIndex; x++) {
        if (y + x < 8) {
          upRight.push([xIndex + x, y + x]);
        }
        if (y - x > -1) {
          downRight.push([xIndex + x, y - x]);
        }
      }
      for (let i = 0; i < y; i++) {
        down.push([xIndex, i]);
      }
      for (let i = 0; i < xIndex; i++) {
        left.push([i, y]);
      }
      for (let x = 1; x < xIndex + 1; x++) {
        if (y + x < 8) {
          upLeft.push([xIndex - x, y + x]);
        }
        if (y - x > -1) {
          downLeft.push([xIndex - x, y - x]);
        }
      }
      up.sort((a, b) => a[1] - b[1]);
      upRight.sort((a, b) => a[0] - b[0]);
      right.sort((a, b) => a[0] - b[0]);
      downRight.sort((a, b) => a[0] - b[0]);
      down.sort((a, b) => b[1] - a[1]);
      downLeft.sort((a, b) => b[0] - a[0]);
      left.sort((a, b) => b[0] - a[0]);
      upLeft.sort((a, b) => b[0] - a[0]);
      const options = [
        up,
        upRight,
        right,
        downRight,
        down,
        downLeft,
        left,
        upLeft
      ];
      options.forEach(arr => {
        for (let i = 0; i < arr.length; i++) {
          let opt = arr[i];
          if (chessboard[letters[opt[0]]][opt[1]] === "empty") {
            moveArr.push([letters[opt[0]], opt[1]]);
          } else if (chessboard[letters[opt[0]]][opt[1]].charAt(0) === "b") {
            moveArr.push([letters[opt[0]], opt[1]]);
            break;
          } else {
            break;
          }
        }
      });
      return moveArr;
    }
  };
  const showMovementOptions = arr => {
    $(".hover").removeClass("hover");
    if (arr) {
      arr.forEach(opt => {
        opt[1]++;
        $(`#${opt.join("")}`).addClass("hover");
      });
    }
  };
  const setUpGame = () => {
    chessboard = JSON.parse(JSON.stringify(chessboardStart));
    database.ref("/chessboard").set(chessboard);
    Object.keys(PIECES).forEach(piece => {
      PIECES[piece].hasBeenMoved = false;
    });
    $(".piece")
      .empty()
      .removeClass("w b piece")
      .attr("data-occupying", "");
    Object.keys(PIECES).forEach(piece => {
      let currentPiece = PIECES[piece];
      $(`#${currentPiece.start}`)
        .attr("data-occupying", piece)
        .addClass(`${piece[0]} piece`);
      const imgFill = $("<img>").attr("src", currentPiece.img);
      $(`#${currentPiece.start}`).html(imgFill);
    });
  };
  const isCheck = () => {
    const king = myColor[0] + "ki";
    const myKingPosition = [];
    for (let x = 0; x < 8; x++) {
      for (let y = 0; y < 8; y++) {
        if (chessboard[letters[x]][y] === king) {
          myKingPosition.push(letters[x], [y]);
          break;
        }
      }
      if (myKingPosition.length > 0) break;
    }
    const opponentPieces = $(`.${opponentColor[0]}`);
    opponentPieces.forEach(piece => {
      const whichPiece = PIECES[piece.attr("data-occupying")];
      const pieceXY = piece.attr("id").split("");
      let pieceOpts = [];
      if (myColor === "white") {
        pieceOpts = BLACKMOVEMENTOPTIONS[whichPiece.type](
          whichPiece,
          pieceXY[0],
          pieceXY[1]
        );
        if (pieceOpts.includes(myKingPosition)) {
          return true;
        }
      }
    });
    return false;
  };
  let myTurn = true;
  let myColor = "white";
  let opponentColor = "black";
  ////////////////////////////////////////////////
  //background shifting!!!!!
  ////////////////////////////////////////////////
  const colorInterval = setInterval(function() {
    $(".white").toggleClass("aqua");
  }, 500);
  if (myTurn === true) {
    $("#whose-turn").text(myColor.toUpperCase());
  } else {
    $("whose-turn").text(opponentColor.toUpperCase());
  }
  $(document).on("click", ".piece", function() {
    if (!$(this).hasClass("hover") && !$(this).hasClass("selected")) {
      let coordinate = $(this).attr("id");
      $(".selected").removeClass("selected");
      $(this).addClass("selected");
      let locArr = coordinate.split("");
      let xPos = locArr[0];
      let yPos = locArr[1] - 1;
      const thisPiece = PIECES[$(this).attr("data-occupying")];
      if (myTurn === true && myColor === "white") {
        if ($(this).hasClass("w")) {
          showMovementOptions(
            WHITEMOVEMENTOPTIONS[thisPiece.type](thisPiece, xPos, yPos)
          );
        }
      } else if (myTurn === true && myColor === "black") {
        if ($(this).hasClass("b")) {
          showMovementOptions(
            BLACKMOVEMENTOPTIONS[thisPiece.type](thisPiece, xPos, yPos)
          );
        }
      }
    } else if ($(this).hasClass("selected")) {
      $(this).removeClass("selected");
      $(".hover").removeClass("hover");
    }
  });
  $(document).on("click", ".hover", function() {
    MOVEPIECE(
      PIECES[$(".selected").attr("data-occupying")],
      $(".selected").attr("id"),
      $(this).attr("id")
    );
  });
  $(document).on("click", "#new-game", function() {
    setUpGame();
  });
});
