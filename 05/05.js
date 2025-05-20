const lotto = () =>{
    //id = "nlist"인 부분의 값을 가져와서 -> HTML내부 내용을 전부 지우기 
    document.getElementById("nlist").innerHTML="=";

    //새로운 배열 만들기 -> 배열의 길이는 아직 알 수 없음
    let arr = [];
    //중복되지 않게 6개의 숫자를 생성
    while(arr.length<6){
        let n = Math.floor(Math.random()*45)+1; //1~45 까지 랜덤한 수를 생성함
        
        //랜덤수가 생성된 경우에도, 다시 while 문을 실행함 
        if(arr.includes(n)) continue;

        //랜덤수를 배열에 추가
        arr.push(n);
    } //6개의 배열이 다 차게 되면, while문을 종료함

    //배열을 완성시킨 후 , 배열을 오름차순 정렬
    arr.sort((a,b)=>a-b);
    console.log(arr);

    //보너스 번호 생성 ->  앞에서 생성한 6개 숫자 배열과 중복되면 안됨
    let bonus = [];
    while(bonus.length<1){
        let n = Math.floor(Math.random()*45)+1;

        //랜덤수가 이미 생성된 경우에도, 다시 while 문을 실행함 
        if(arr.includes(n)) continue;
        bonus.push(n);
    } //배열에 1개의 값이 들어가게 되면, while문을 종료함

    //전개연산자를 이용해 전체 배열 만들기 (6개배열 + 보너스배열)
    arr = [...arr, ...bonus];
    console.log(arr)

    //태그 배열 -> for문 대신 .map메소드를 이용해 원래 배열의 갯수와 동일한 새로운 배열을 만들어냄
    let tags = arr.map(item => `<span class ="sp${Math.floor(item/10)}">${item}</span>`);
    tags.splice(6,0, "<span id = 'spPlus'> + </span>");
    tags= tags.join(""); //배열 합치기
    console.log(tags)

    //id = "nlist"인 부분에 -> HTML내부에 배열을 넣기 -> 화면에 출력됨 
    document.getElementById("nlist").innerHTML=tags;
}