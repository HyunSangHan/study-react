class Blog {
    constructor() {
        this.setInitVariables(); // 변수를 정의해주는 것임. 정확히는, blog-list라는 class의 section 하위 ul은 두번 이상 쓰이므로 재활용할 수 있도록 이걸 첫 load 시에 변수로 set해주려는 것임.
        this.registerEvents(); // 클릭이벤트들을 정의해주는 것임.
        this.keptSet = new Set(); // Keep이 눌린 블로그를 모아둘 곳임. 중복을 불허하기 위해 Set 자료형을 사용.
    }

    setInitVariables() {
        this.blogList = document.querySelector(".blog-list > ul"); // blog-list라는 class의 section 하위 ul을 선택해줌.
    }
    registerEvents() {
        const startBtn = document.querySelector(".load-btn"); // load 버튼을 선택해줌.
        const dataURL = "/data/data.json"; // 원래는 외부API의 response를 받아오는 걸로 강의에는 나오지만, API URL이 바뀌어 이와 같이 local의 data를 가져오는 걸로 코드가 추후 변경되었음
    
        startBtn.addEventListener("click", () => {
            this.setInitData(dataURL); // dataURL에 있는 data를 가져오는 것
        });

        this.blogList.addEventListener("click", ({target}) => { // 여기서 Destructuring이 쓰였다. (event객체를 받아도 됐었지만, 다 받는 것은 불필요하므로 {target}만 받은 것.)
            const targetClassName = target.className; 
            if(targetClassName !== "keep" && targetClassName !=="unkeep") return; // 사실 논리상 안써줘도 그만인 코드지만, 이를 써주지 않으면 '킵해두기'보다 상위 노드를 클릭한 경우에도 EventListener가 작동하는 불편한 점이 있을 수 있음
    
            const postTitle = target.previousElementSibling.textContent; // 참고로 textContent 대신 innerText라고 써줘도 무방
    
            if(targetClassName === "unkeep") { // 킵취소를 누르는 경우
                target.className = "keep";
                target.innerText = "킵해두기";
                this.keptSet.delete(postTitle);
            } else { // 킵해두기를 누르는 경우
                target.className = "unkeep";
                target.innerText = "킵취소";
                this.keptSet.add(postTitle);
            }
    
            this.updateKeptList(); //내 Keep 목록 뷰에 추가.
            //dispatcher.emit("CHANGE_LIKE_LIST", {'title' : this.keptSet}) // <= 만약 이렇게 redux스럽게 코드를 작성한다면 윗줄 대비 의존성이 줄어들기 때문에 더 좋은 코드가 될 여지가 있다는 설명의 예시 코드
        });
    }

    updateKeptList() {
        const ul = document.querySelector(".keep-list > ul");
        let KeptTotal = ""; // Keep리스트를 모아둘 곳

        this.keptSet.forEach ( (contentTitle) => {
            KeptTotal += `<li> ${contentTitle} </li>`;
            console.log(KeptTotal)
        })

        ul.innerHTML = KeptTotal; // forEach를 통해 차곡차곡 모아둔 Keep 리스트를 한번에 innerHTML에 넣음
    }

    setInitData(dataURL) {
        this.getData(dataURL, this.insertPosts.bind(this)); // bind(this)를 써주지 않으면 this가 다르게 인식됨
    }

    getData(dataURL, fn) { // load했을 때 data를 가져오는 것
        const oReq = new XMLHttpRequest();
        oReq.addEventListener("load", () => {
            const list = JSON.parse(oReq.responseText).body;
            fn(list); // 여기서 fn은 사실 insertPosts였던 것.
        });
        oReq.open('GET', dataURL);
        oReq.send();
    }

    insertPosts(list) { // load하여 가져온 data를 .blog-list > ul 내에 그려주는 것
        list.forEach((content) => {
            this.blogList.innerHTML += `
                <li>
                    <a href=${content.link}> ${content.title} </a>
                    <div class="keep">킵해두기</div>
                </li>
            `;
        })
    }
}

export default Blog;