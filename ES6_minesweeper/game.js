const map = document.getElementById("map");
let cells = [];
let maxX = null;
let maxY = null;
let mineNumTotal = null;
let isOver = false;
let cellsLeft = null;

// 칸 셋팅
document.getElementById("play").addEventListener('click', function(){
  resetGame();
  // 정수화하기
  maxX = parseInt(document.getElementById("col").value);
  maxY = parseInt(document.getElementById("row").value);
  mineNumTotal = parseInt(document.getElementById("mine").value);
  document.getElementById("col").value = maxX
  document.getElementById("row").value = maxY
  document.getElementById("mine").value = mineNumTotal
  if (maxX < 1 || maxY < 1 || mineNumTotal < 1) { //입력값이 올바르지 않을 때
    alert('입력값이 올바르지 않습니다.');
  } else if (maxX * maxY <= mineNumTotal) { //지뢰가 칸 개수보다 많거나 같을 때
    alert('지뢰가 너무 많아서 게임이 불가능해요. 지뢰 개수를 줄여주세요.');
  } else if (maxX * maxY > 900) {
    alert('언제 다 하시려고... 30 X 30 미만으로 줄여주세요.');
  } else { //일반적인 경우(게임 가능)
    document.getElementById("cellsLeft").innerText = maxX * maxY;
    for(let i = 0; i < maxY; i++) {
      const cellsX = []; // 하나의 행
      cells.push(cellsX); // 빈 행을 여러 열에 넣음
      const domElementParent = document.createElement('div'); // 한세트 칸 생성
      domElementParent.classList.add('cell-parent');

      map.appendChild(domElementParent); // DOM에 칸 그리기

      for(let j=0; j < maxX; j++) {
        const domElement = document.createElement('div'); // 하나의 칸 생성
        domElementParent.appendChild(domElement); // DOM에 칸 그리기

        // 그 칸의 속성들 설정하기
        domElement.classList.add('cell');
        domElement.classList.add('close');
        domElement.setAttribute('y', i);
        domElement.setAttribute('x', j);
        cellsX[j] = domElement;

        domElement.addEventListener('click', function(e) {
          e.preventDefault();
          !isOver && handleClick(this);
        });

        domElement.addEventListener('contextmenu', function(e) {
          e.preventDefault();
          !isOver && !this.classList.contains('open') && flagCell(this);
        });
      }
    }
  }
  makeMine(); //지뢰깔기
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
  } else if(isMine) {
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
    if (cellsLeft === mineNumTotal) {
      gameWin();
    }
  }
}

const getNeighborCells = function(cell) {
  const x = parseInt(cell.getAttribute('x'));
  const y = parseInt(cell.getAttribute('y'));
  const neighborCoords = [
    [y+1, x+1],
    [y+1, x],
    [y+1, x-1],
    [y, x+1],
    [y, x-1],
    [y-1, x+1],
    [y-1, x],
    [y-1, x-1]
  ]
  const validCoords = neighborCoords.filter(coord => {
    const y = coord[0]
    const x = coord[1]
    return (x >= 0 && x <maxX) && (y >= 0 && y <maxY)
  })
  const neighborCells = validCoords.map(coord => {
    const y = coord[0]
    const x = coord[1]
    return cells[y][x]
  })
  return neighborCells
}

function makeMine() {
  let i, j, k;
  const uniqueNumbers = [...Array(maxY * maxX).keys()];
  for (i = uniqueNumbers.length; i; i -= 1) {
      j = Math.floor(Math.random() * i);
      k = uniqueNumbers[i - 1];
      uniqueNumbers[i - 1] = uniqueNumbers[j];
      uniqueNumbers[j] = k;
  }

  for (let count = 0; count < mineNumTotal; count++) { // 지뢰 다 깔 때까지 반복
      const x = parseInt(uniqueNumbers[0] / maxY);
      const y = uniqueNumbers[0] % maxY;
      console.log(uniqueNumbers[0], cells[y][x])
      uniqueNumbers.shift();
      cells[y][x].setAttribute('isMine', true);
  }
}

function showMine() {
  for(let y = 0; y < maxY; y++) {
    for(let x = 0; x < maxX; x++) {
      if (cells[y][x].getAttribute('isMine') === 'true') {
        cells[y][x].classList.remove('flag')
        cells[y][x].classList.add('mine')
      }
    }
  }
}

function flagCell(cell) { //우클릭시
    cell.classList.add('flag');
}

function showGameOver() {
  document.getElementById("status").innerText = "You Lose!";
  document.getElementById("status").classList.add('lose');
}

function showGameWin() {
  document.getElementById("status").innerText = "You win!";
  document.getElementById("status").classList.add('win');
}

function gameOver() {
  alert('으악! 지뢰를 밟았다!');
  showMine()
  showGameOver()
  isOver = true;
}

function gameWin() {
  alert('승리하였습니다');
  showMine()
  showGameWin()
  isOver = true;
}

function resetValue() {
  document.getElementById("row").value = 10
  document.getElementById("col").value = 10
  document.getElementById("mine").value = 10
}

function resetGame() {
  while (map.hasChildNodes()) {
    map.removeChild(map.firstChild);
  }
  document.getElementById("status").innerText = null;
  document.getElementById("cellsLeft").innerText = null;
  document.getElementById("status").classList.remove('win');
  document.getElementById("status").classList.remove('lose');
  cells = [];
  maxX = null;
  maxY = null;
  mineNumTotal = null;
  isOver = false;
  cellsLeft = null;
}

function reset() {
  resetGame();
  resetValue();
}