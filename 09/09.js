//DOM이 생성이 된 후 -> 요소를 받아옴
document.addEventListener('DOMContentLoaded', ()=>{
    //<input> 가져오기
    const num = document.querySelector(".cdiv1>input");
    //<button> 가져오기
    const bt = document.querySelector(".cdiv1>button");
    //<img> 가져오기
    const img = document.querySelector(".mdiv>img");
    
    btBefore.style.display="none"; //지우기

    btAfter.style.display="block"; //해당부분을 화면에 나타나지 않게함  //수정하기
    const bt2 = document.querySelector(".cdiv2>button");
    const countNum = document.querySelector(".cdiv2>input");

    //flag 변수
    let flag = false; 
    //랜덤수 생성관련 변수
    let n;
    //버튼 변경을 위한 태그 변수
    //let tags = "<button>게임을 다시 시작합니다</button>";

    //카운트를 위한 변수
    let count = 0;

    //확인 버튼을 누르면,
    bt.addEventListener('click',()=>{
        //1.<확인button>을 누르면 random한 수가 생성됨
        if (flag == false){
            n = Math.floor(Math.random()*100)+1;
            console.log(n);
            flag = true; //버튼이 한번 눌리면 다시는 새로운 랜덤수가 만들어지지 않음
        }

        //<input>에 숫자를 입력하지 않은 경우
        if(!num.value){
            alert("숫자를 입력하세요");
            num.focus();
            return;
        }
        //<input>에 1~100 사이가 아닌 숫자를 입력한 경우 
        if(num.value>100 || num.value<1){
            alert("1~100사이의 숫자를 입력하세요");
            num.focus();
            return;
        }

        //2.<input>에 입력되는 값과 랜덤수를 비교해서 그림을 변경함
        if(num.value>n){ //2-1. 입력수가 랜덤수보다 크면 down 이미지
            //img.src = "../img/down.png";
            img.setAttribute("src" , "../img/down.png");
        }else if(num.value<n){ //2-2. 입력수가 랜덤수보다 작으면 up 이미지
            img.setAttribute("src" , "../img/up.png");
        }else{ //2-3. 입력수가 랜덤수와 같으면 good 이미지
            img.setAttribute("src" , "../img/good.png");
            btBefore.style.display="none";
            btAfter.style.display="block";
            flag = false;
            countNum.value = `${count+1}번 만에 정답을 찾았습니다.`;
            }
        count++;
        console.log(count);
    })

    //다시하기 버튼을 누르면,
    bt2.addEventListener('click',()=>{
        btBefore.style.display="block";
        btAfter.style.display="none";
        img.src = "../img/what.png";
        //<input>박스를 빈 칸으로 초기화 , 랜덤수도 초기화
        num.value = "";
        num.focus;
        n = 0;
        count = 0;
    })
})