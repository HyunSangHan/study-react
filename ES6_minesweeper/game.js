const { random, take } = require('lodash')
const board = document.getElementById("board");
const cells = [];
let colNumber = null;
let rowNumber = null;
let mine = null;
let isOver = false;
let cellsLeft = null;

// 칸 셋팅
document.getElementById("play").addEventListener('click', function(){
  reset();
  // 정수화하기
  colNumber = parseInt(document.getElementById("col").value);
  rowNumber = parseInt(document.getElementById("row").value);
  mine = parseInt(document.getElementById("mine").value);
  if (colNumber < 1 || rowNumber < 1 || mine < 1) { //입력값이 올바르지 않을 때
    alert('입력값이 올바르지 않습니다.');
  } else if (colNumber * rowNumber <= mine) { //지뢰가 칸 개수보다 많거나 같을 때
    alert('지뢰가 너무 많아서 게임이 불가능해요. 지뢰 개수를 줄여주세요.');
  } else if (colNumber > 30 || rowNumber > 30) {
    alert('언제 다 하시려고... 30 X 30 미만으로 줄여주세요.');
  } else { //일반적인 경우(게임 가능)
    document.getElementById("cellsLeft").innerText = colNumber * rowNumber;
    for(let i = 0; i < rowNumber; i++) {
      const row = []; // 하나의 행
      cells.push(row); // 빈 행을 여러 열에 넣음
      const rowElement = document.createElement('div'); // 한세트 칸 생성
      rowElement.classList.add('row');

      board.appendChild(rowElement); // DOM에 칸 그리기

      for(let j=0; j < colNumber; j++) {
        const cellElement = document.createElement('div'); // 하나의 칸 생성
        rowElement.appendChild(cellElement); // DOM에 칸 그리기

        // 그 칸의 속성들 설정하기
        cellElement.classList.add('cell');
        cellElement.classList.add('close');
        cellElement.setAttribute('y', i);
        cellElement.setAttribute('x', j);
        row[j] = cellElement;

        cellElement.addEventListener('click', function(e) {
          e.preventDefault();
          !isOver && handleClick(this);
        });

        cellElement.addEventListener('contextmenu', function(e) {
          e.preventDefault();
          !isOver && flagCell(this);
        });
      }
    }
  }
  makeMine(cells); //지뢰깔기
});

const handleClick = function(cell) {
  const isMine = (cell.getAttribute('isMine') === 'true');
  const isOpen = cell.classList.contains('open');
  const isFlag = cell.classList.contains('flag');
  if(isOpen) {
    return; //아무것도 리턴하지 않음
  } else if(!isOpen && isMine && isFlag) {
    confirm('진짜 누르시겠어요? 지뢰일 수도 있어요.')
    gameOver();
  } else if(!isOpen && !isMine && isFlag) {
    confirm('진짜 누르시겠어요? 지뢰일 수도 있어요.')
    cell.classList.remove('flag')
    handleClick(cell);
  } else if(!isOpen && isMine) {
    gameOver();
  } else {
    const neighborCells = getNeighborCells(cell);
    const mineCount = neighborCells.reduce((pv, cv) => {
      if(cv.getAttribute('isMine') === 'true') pv++;
      return pv;
    } , 0);

    cell.classList.remove('close');
    cell.classList.add('open');

    if(mineCount > 0) { //주변 8칸 중에서 지뢰가 1개라도 있으면
      cell.textContent = mineCount; //그 셀에 주변 지뢰 개수를 적어준다
    } else { // 주변에 지뢰가 없으면 재귀로 주변을 터뜨린다
      neighborCells.forEach(neighborCell => {
        if(!neighborCell.classList.contains('open')) { //메모이제이션 활용
          handleClick(neighborCell);
        }
      }); //재귀
    }
    cellsLeft = document.getElementsByClassName("close").length
    document.getElementById("cellsLeft").innerText = cellsLeft;
    if (cellsLeft === mine) {
      gameWin();
    }
  }
}

const flagCell = function(cell) { //우클릭시
  if (!cell.classList.contains('open') && !isOver) {
    cell.classList.add('flag');
  }
}

const getNeighborCells = function(cell) {
  const x = parseInt(cell.getAttribute('x'));
  const y = parseInt(cell.getAttribute('y'));
  const neighborCells = [ cells[y][x] ];

  if (0 < y && y < rowNumber-1 && 0 < x && x < colNumber-1) {
    neighborCells.push(
      cells[y+1][x+1],
      cells[y+1][x],
      cells[y+1][x-1],
      cells[y][x+1],
      cells[y][x-1],
      cells[y-1][x+1],
      cells[y-1][x],
      cells[y-1][x-1]
    )
  } else if (y === 0 && 0 < x && x < colNumber-1) {
    neighborCells.push(
      cells[y+1][x+1],
      cells[y+1][x],
      cells[y+1][x-1],
      cells[y][x+1],
      cells[y][x-1]
    )
  } else if (y === 0 && x === colNumber-1) {
    neighborCells.push(
      cells[y+1][x],
      cells[y+1][x-1],
      cells[y][x-1],
    )
  } else if (0 < y && y < rowNumber-1 && x === colNumber-1) {
    neighborCells.push(
      cells[y+1][x],
      cells[y+1][x-1],
      cells[y][x-1],
      cells[y-1][x],
      cells[y-1][x-1]
    )
  } else if (y === rowNumber-1 && 0 < x && x === colNumber-1) {
    neighborCells.push(
      cells[y][x-1],
      cells[y-1][x],
      cells[y-1][x-1]
    )
  } else if (y === rowNumber-1 && 0 < x && x < colNumber-1) {
    neighborCells.push(
      cells[y][x+1],
      cells[y][x-1],
      cells[y-1][x+1],
      cells[y-1][x],
      cells[y-1][x-1]
    )
  } else if (y === rowNumber-1 && x === 0) {
    neighborCells.push(
      cells[y][x+1],
      cells[y-1][x+1],
      cells[y-1][x],
    )
  } else if (0 < y && y < rowNumber-1 && x === 0) {
    neighborCells.push(
      cells[y+1][x+1],
      cells[y+1][x],
      cells[y][x+1],
      cells[y-1][x+1],
      cells[y-1][x],
    )
  }  else if (y === 0 && x === 0) {
    neighborCells.push(
      cells[y+1][x+1],
      cells[y+1][x],
      cells[y][x+1]
    )
  } else {
    alert("뭔가 잘못되었습니다!")
    throw new Error("알 수 없는 경우의 수")
  }
  return neighborCells;// 주변 8칸 리턴하도록
}

function makeMine() {
  for (let count = 0; count < mine; count++) { // 지뢰 다 깔 때까지 반복
    const i = random(colNumber-1)
    const j = random(rowNumber-1)
    cells[i][j].setAttribute('isMine', true);
  }
}

function gameOver() {
  alert('으악! 지뢰를 밟았다!');
  for(let y = 0; y < rowNumber; y++) {
    for(let x = 0; x < colNumber; x++) {
      if (cells[y][x].getAttribute('isMine') === 'true') {
        cells[y][x].classList.remove('flag')
        cells[y][x].classList.add('mine')
      }
    }
  }
  document.getElementById("status").innerText = "You Lose!";
  document.getElementById("status").classList.add('lose');
  isOver = true;
}

function gameWin() {
  document.getElementById("status").innerText = "You win!";
  document.getElementById("status").classList.add('win');
  isOver = true;
}

function reset() {
  while (board.hasChildNodes()) {
    board.removeChild(board.firstChild);
  }
  cells.splice(0, cells.length);
  colNumber = null;
  rowNumber = null;
  mine = null;
  isOver = false;
  cellsLeft = null;
}
