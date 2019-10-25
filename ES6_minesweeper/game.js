const map = document.getElementById("map");
const cells = [];

// 칸 셋팅
document.getElementById("play").addEventListener('click', function(){

    // map 중복 방지
    while (map.hasChildNodes()) {
        map.removeChild(map.firstChild);
    }

    const maxX = parseInt(document.getElementById("row").value);
    const maxY = parseInt(document.getElementById("col").value);
    const mine = parseInt(document.getElementById("mine").value);

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
            domElement.setAttribute('isFlagged', false);
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
});

const openCell = function(cell) {
    const x = cell.getAttribute('x');
    const y = cell.getAttribute('y');
    console.log(`(${x}, ${y})가 클릭되었어요.`)
    const isMine = (cell.getAttribute('isMine') === 'true');
    const isOpen = (cell.getAttribute('isOpen') === 'true');
    const isFlagged = (cell.getAttribute('isFlagged') === 'true');
    if(isOpen) {
        return; //아무것도 리턴하지 않음
    } else if(!isOpen && isFlagged) {
        return; //진짜 누를 것인지 얼럿창 띄우기(추가스펙)
    } else if(!isOpen && isMine) {
        gameOver(); //TODO: gameOver함수 짜야됨
    } else {
        //임시로 여기에
        cell.setAttribute('isOpen', true);
        cell.classList.add('open');

        const neighborCells = getNeighborCells(x, y); //TODO: getNeighborCells함수는 그 주변 8개 domElement를 담는 Array를 리턴하도록 짜야됨
        const mineCount = neighborCells.reduce((pv, cv) => {
            if(cv.getAttribute('isMine')) pv++;
            return pv;
        } , 0);

        if(mineCount > 0) {
            cell.textContent = mineCount;
            cell.getAttribute('isOpen') = true;
        } else { // mine is zero
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
    return; // 주변 8칸 리턴하도록
}