const maxX = parseInt(document.getElementById("row").value);
const maxY = parseInt(document.getElementById("col").value);
const mineNum = parseInt(document.getElementById("mine").value);

const map = document.getElementById("map");
const cells = [];

// 칸 셋팅
document.getElementById("play").addEventListener('click', function(){
    for(let i = 0; i < maxX; i++) {
        const cellsX = []; // 하나의 행
        cells.push(cellsX); // 빈 행을 여러 열에 넣음
        
        for(let j=0; j < maxY; j++) {
            const domElement = document.createElement('div'); // 하나의 칸 생성
            map.appendChild(domElement); // DOM에 칸 그리기

            // 그 칸의 속성들 설정하기
            domElement.setAttribute('class', 'cell');
            domElement.setAttribute('x', i);
            domElement.setAttribute('y', j);
            domElement.setAttribute('isMine', true);
            domElement.setAttribute('isOpen', false);
            domElement.setAttribute('isFlagged', false);
            cellsX[j] = domElement;

            domElement.addEventListener('click', function(e) {
                e.preventDefault();
                openCell(this);
            });
        }
    }
});

const openCell = function(cell) {
    const x = cell.getAttribute('x');
    const y = cell.getAttribute('y');
    const isMine = cell.getAttribute('isMine');
    const isOpen = cell.getAttribute('isOpen');
    const isFlagged = cell.getAttribute('isFlagged');
    if(isOpen) return; //아무것도 리턴하지 않음
    if(!isOpen && isFlagged) return; //깃발 오픈
    if(!isOpen && isMine) {
        gameOver(); //TODO: gameOver함수 짜야됨
    } else {
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