const check1 = (e) =>{
    //e.preventDefault;
    //console.log("check1");
    //html 문서에서 입력된 값을 가져오는 방법
    //document.getElementById.value
    let txt1 = document.getElementById("txt1").value;
    console.log(txt1);

    //공백을 제거하기
    txt1 = txt1.replaceAll(' ','');
    console.log(txt1);

    //문자열 반복문 + 거꾸로 문자열 출력하기
    // let s = '';
    // for(let i = txt1.length-1;i>=0;i--){
    //     console.log(txt1[i]);
    //     s = s+txt1[i];
    // }
    // console.log(s);

    //spilt을 이용해 문자열을 배열로 쪼갬
    s = txt1.split('').reverse();
    console.log(s);
    s.join("");
    console.log(s);

    //원래 문자열과 거꾸로된 문자열을 비교한 후, 
    //id = "txt2"에 출력하기
    if (s == txt1){
        //.value의 내용을 "회문입니다."/"회문이 아닙니다."변경함 
        document.getElementById("txt2").value="회문입니다.";
    }else{
        document.getElementById("txt2").value="회문이 아닙니다.";
    }
}

const check2 = () =>{
    //console.log("check2");
    let h = 0;
    //html 문서에서 입력된 값을 가져오기
    let txt2 = document.getElementById("txt1").value;
    //for문의 역할과 동일 
    for(let c of txt2){
        if (!isNaN(c)){ //숫다일때만
            h += parseInt(c); //더하기
        }
    }
    document.getElementById("txt2").value=h;
}

const check3 = () =>{
    document.getElementById("txt1").value = "";
    document.getElementById("txt2").value = "";
}