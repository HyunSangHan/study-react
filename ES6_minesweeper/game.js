const board = document.getElementById("board");
const cells = [];
let col = null;
let row = null;
let mine = null;
let isOver = false;
let cellsLeft = null;

// 칸 셋팅
document.getElementById("play").addEventListener('click', function(){
    replay();
    // 정수화하기
    col = parseInt(document.getElementById("col").value);
    row = parseInt(document.getElementById("row").value);
    mine = parseInt(document.getElementById("mine").value);
    document.getElementById("col").value = col
    document.getElementById("row").value = row
    document.getElementById("mine").value = mine
    if (col < 1 || row < 1 || mine < 1) { //입력값이 올바르지 않을 때
        alert('입력값이 올바르지 않습니다.');
    } else if (col * row <= mine) { //지뢰가 칸 개수보다 많거나 같을 때
        alert('지뢰가 너무 많아서 게임이 불가능해요. 지뢰 개수를 줄여주세요.');
    } else if (col > 30 || row > 30) {
        alert('언제 다 하시려고... 30 X 30 미만으로 줄여주세요.');
    } else { //일반적인 경우(게임 가능)
        // board 중복 방지
        while (board.hasChildNodes()) {
            board.removeChild(board.firstChild);
        }
        document.getElementById("cellsLeft").innerText = col * row;
        for(let i = 0; i < row; i++) {
            const row = []; // 하나의 행
            cells.push(row); // 빈 행을 여러 열에 넣음
            const domElementParent = document.createElement('div'); // 한세트 칸 생성
            domElementParent.classList.add('cellParent');

            board.appendChild(domElementParent); // DOM에 칸 그리기

            for(let j=0; j < col; j++) {
                const domElement = document.createElement('div'); // 하나의 칸 생성
                domElementParent.appendChild(domElement); // DOM에 칸 그리기

                // 그 칸의 속성들 설정하기
                domElement.classList.add('cell');
                domElement.classList.add('close');
                domElement.setAttribute('y', i);
                domElement.setAttribute('x', j);
                row[j] = domElement;

                domElement.addEventListener('click', function(e) {
                    e.preventDefault();
                    openCell(this);
                });

                domElement.addEventListener('contextmenu', function(e) {
                    e.preventDefault();
                    flagCell(this);
                });
            }
        }
    }
    makeMine(cells); //지뢰깔기
});

const openCell = function(cell) {
    const isMine = (cell.getAttribute('isMine') === 'true');
    const isOpen = cell.classList.contains('open');
    const isFlag = cell.classList.contains('flag');
    if(isOpen || isOver) {
        return; //아무것도 리턴하지 않음
    } else if(!isOpen && isMine && isFlag) {
        confirm('진짜 누르시겠어요? 지뢰일 수도 있어요.')
        gameOver();
    } else if(!isOpen && !isMine && isFlag) {
        confirm('진짜 누르시겠어요? 지뢰일 수도 있어요.')
        cell.classList.remove('flag')
        openCell(cell);
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
                if(!neighborCell.isOpen) { //메모이제이션 활용
                    openCell(neighborCell);
                }
            }); //재귀
        }
        cellsLeft = document.getElementsByClassName("close").length
        document.getElementById("cellsLeft").innerText = cellsLeft;
        if (cellsLeft === mine) {
            gameWin();
        }
    }
};

const flagCell = function(cell) { //우클릭시
    if (!cell.classList.contains('open') && !isOver) {
        cell.classList.add('flag');
    }
}

const getNeighborCells = function(cell) {
    const x = parseInt(cell.getAttribute('x'));
    const y = parseInt(cell.getAttribute('y'));
    const neighborCells = [ cells[y][x] ];

    if (0 < y && y < row-1 && 0 < x && x < col-1) {
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
    } else if (y === 0 && 0 < x && x < col-1) {
        neighborCells.push(
            cells[y+1][x+1],
            cells[y+1][x],
            cells[y+1][x-1],
            cells[y][x+1],
            cells[y][x-1]
        )
    } else if (y === 0 && x === col-1) {
        neighborCells.push(
            cells[y+1][x],
            cells[y+1][x-1],
            cells[y][x-1],
        )
    } else if (0 < y && y < row-1 && x === col-1) {
        neighborCells.push(
            cells[y+1][x],
            cells[y+1][x-1],
            cells[y][x-1],
            cells[y-1][x],
            cells[y-1][x-1]
        )
    } else if (y === row-1 && 0 < x && x === col-1) {
        neighborCells.push(
            cells[y][x-1],
            cells[y-1][x],
            cells[y-1][x-1]
        )
    } else if (y === row-1 && 0 < x && x < col-1) {
        neighborCells.push(
            cells[y][x+1],
            cells[y][x-1],
            cells[y-1][x+1],
            cells[y-1][x],
            cells[y-1][x-1]
        )
    } else if (y === row-1 && x === 0) {
        neighborCells.push(
            cells[y][x+1],
            cells[y-1][x+1],
            cells[y-1][x],
        )
    } else if (0 < y && y < row-1 && x === 0) {
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
    let i, j, k;
    const uniqueNumbers = [...Array(row * col).keys()];
    for (i = uniqueNumbers.length; i; i -= 1) {
        j = Math.floor(Math.random() * i);
        k = uniqueNumbers[i - 1];
        uniqueNumbers[i - 1] = uniqueNumbers[j];
        uniqueNumbers[j] = k;
    }

    for (let count = 0; count < mine; count++) { // 지뢰 다 깔 때까지 반복
        const x = parseInt(uniqueNumbers[0] / row);
        const y = uniqueNumbers[0] % row;
        console.log(uniqueNumbers[0], cells[y][x])
        uniqueNumbers.shift();
        cells[y][x].setAttribute('isMine', true);
    }
}

function gameOver() {
    alert('으악! 지뢰를 밟았다!');
    for(let y = 0; y < row; y++) {
        for(let x = 0; x < col; x++) {
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
    document.getElementById("row").value = 10
    document.getElementById("col").value = 10
    document.getElementById("mine").value = 10
    document.getElementById("status").innerText = null;
    document.getElementById("status").classList.remove('win');
    document.getElementById("status").classList.remove('lose');
    replay();
}

function replay() {
    while (board.hasChildNodes()) {
        board.removeChild(board.firstChild);
    }
    cells.splice(0, cells.length);
    col = null;
    row = null;
    mine = null;
    isOver = false;
    cellsLeft = null;
}
