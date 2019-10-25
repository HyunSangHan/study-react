const map = document.getElementById("map");
const cells = [];
let maxX = null;
let maxY = null;
let mineNumTotal = null;

// 칸 셋팅
document.getElementById("play").addEventListener('click', function(){
    // 정수화하기
    maxX = parseInt(document.getElementById("row").value);
    maxY = parseInt(document.getElementById("col").value);
    mineNumTotal = parseInt(document.getElementById("mine").value);
    document.getElementById("row").value = maxX
    document.getElementById("col").value = maxY
    document.getElementById("mine").value = mineNumTotal
    if (maxX < 1 || maxY < 1 || mineNumTotal < 1) { //입력값이 올바르지 않을 때
        alert('입력값이 올바르지 않습니다.');
    } else if (maxX * maxY <= mineNumTotal) { //지뢰가 칸 개수보다 많거나 같을 때
        alert('지뢰가 너무 많아서 게임이 불가능해요. 지뢰 개수를 줄여주세요.');
    } else { //일반적인 경우(게임 가능)
        // map 중복 방지
        while (map.hasChildNodes()) {
            map.removeChild(map.firstChild);
        }    
        
        for(let i = 0; i < maxX; i++) {
            const cellsX = []; // 하나의 행
            cells.push(cellsX); // 빈 행을 여러 열에 넣음
            const domElementParent = document.createElement('div'); // 한세트 칸 생성
            domElementParent.classList.add('cell-parent');

            map.appendChild(domElementParent); // DOM에 칸 그리기

            for(let j=0; j < maxY; j++) {
                const domElement = document.createElement('div'); // 하나의 칸 생성
                domElementParent.appendChild(domElement); // DOM에 칸 그리기

                // 그 칸의 속성들 설정하기
                domElement.classList.add('cell');
                domElement.setAttribute('x', i);
                domElement.setAttribute('y', j);
                domElement.setAttribute('isMine', false);
                domElement.setAttribute('isOpen', false);
                domElement.setAttribute('isFlag', false);
                cellsX[j] = domElement;

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
    makeMine(); //지뢰깔기
});

const openCell = function(cell) {
    const x = cell.getAttribute('x');
    const y = cell.getAttribute('y');
    console.log(`(${y}, ${x})가 클릭되었어요.`)
    const isMine = (cell.getAttribute('isMine') === 'true');
    const isOpen = (cell.getAttribute('isOpen') === 'true');
    const isFlag = (cell.getAttribute('isFlag') === 'true');
    if(isOpen) {
        return; //아무것도 리턴하지 않음
    } else if(!isOpen && isFlag) {
        return; //진짜 누를 것인지 얼럿창 띄우기(추가스펙)
    } else if(!isOpen && isMine) {
        gameOver(); //TODO: gameOver함수 짜야됨
    } else {
        cell.setAttribute('isOpen', true);
        cell.classList.add('open');

        const neighborCells = getNeighborCells(x, y);
        const mineCount = neighborCells.reduce((pv, cv) => {
            if(cv.getAttribute('isMine') === 'true') pv++;
            return pv;
        } , 0);

        if(mineCount > 0) { //주변 (최대)8칸 중에서 지뢰가 1개라도 있으면
            cell.textContent = mineCount; //그 셀에 주변 지뢰 개수를 적어준다
            cell.setAttribute('isOpen', true);
        } else { // 주변에 지뢰가 없으면 재귀로 주변을 터뜨린다
            neighborCells.forEach(neighborCell => openCell(neighborCell)); //재귀
        }
    }
};

const flagCell = function(cell) { //우클릭시
    if (cell.getAttribute('isOpen') === 'false') {
        cell.classList.add('flag');
    }
}

const getNeighborCells = function(x, y) {
    x = parseInt(x);
    y = parseInt(y);
    const tmpCells = [ cells[y][x] ];

    if (0 < y && y < maxY-1 && 0 < x && x < maxX-1) {
        tmpCells.push(
            cells[y+1][x+1],
            cells[y+1][x],
            cells[y+1][x-1],
            cells[y][x+1],
            cells[y][x-1],
            cells[y-1][x+1],
            cells[y-1][x],
            cells[y-1][x-1]
        )
    } else if (y === 0 && 0 < x && x < maxX-1) {
        tmpCells.push(
            cells[y+1][x+1],
            cells[y+1][x],
            cells[y+1][x-1],
            cells[y][x+1],
            cells[y][x-1]
        )
    } else if (y === 0 && x === maxX-1) {
        tmpCells.push(
            cells[y+1][x],
            cells[y+1][x-1],
            cells[y][x-1],
        )
    } else if (0 < y && y < maxY-1 && x === maxX-1) {
        tmpCells.push(
            cells[y+1][x],
            cells[y+1][x-1],
            cells[y][x-1],
            cells[y-1][x],
            cells[y-1][x-1]
        )
    } else if (y === maxY-1 && 0 < x && x === maxX-1) {
        tmpCells.push(
            cells[y][x-1],
            cells[y-1][x],
            cells[y-1][x-1]
        )
    } else if (y === maxY-1 && 0 < x && x < maxX-1) {
        tmpCells.push(
            cells[y][x+1],
            cells[y][x-1],
            cells[y-1][x+1],
            cells[y-1][x],
            cells[y-1][x-1]
        )
    } else if (y === maxY-1 && x === 0) {
        tmpCells.push(
            cells[y][x+1],
            cells[y-1][x+1],
            cells[y-1][x],
        )
    } else if (0 < y && y < maxY-1 && x === 0) {
        tmpCells.push(
            cells[y+1][x+1],
            cells[y+1][x],
            cells[y][x+1],
            cells[y-1][x+1],
            cells[y-1][x],
        )
    }  else if (y === 0 && x === 0) {
        tmpCells.push(
            cells[y+1][x+1],
            cells[y+1][x],
            cells[y][x+1]
        )
    } else {
        throw new Error("뭔가 잘못되었습니다!")
    }
    //flag가 아니고 open이 아닌 경우만으로 한정
    const neighborCells = tmpCells.filter(
        tmpCell => (tmpCell.getAttribute('isOpen') === 'false')
    )
//map
console.log(neighborCells)

    return neighborCells;// 주변 8칸 리턴하도록
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
        const y = parseInt(uniqueNumbers[0] / maxY);
        const x = uniqueNumbers[0] % maxY;
        uniqueNumbers.shift(); //큐처럼 구현
        cells[y][x].setAttribute('isMine', true);
    }
}
