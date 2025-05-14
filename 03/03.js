// function Hello(){
//             alert("안녕하세요. 자바 스크립트입니다.");
//         }

//화살표 함수
const Hello = () => {
     //alert("안녕하세요. 자바 스크립트입니다.");
     //var변수는 선언되기 전에 사용하면 undifined 로 초기화됨
     console.log(name+"님 안녕하세요.");

     var name = "HEE";
     console.log(name+"님 안녕하세요.");
}

const Hello2 = () => {
     //let 변수는 선언되기 전에 사용하면 오류 발생
     //console.log(name+"님 안녕하세요."); 
     
     let name = "HEE";
     //console.log(name+"님 안녕하세요.");
     
     //템플릿 문자열(백틱`)
     console.log(`${name} 님 안녕하세요.`);
}

const Check = () =>{
    let s ='123';
    let x ='10';
    console.log()
    console.log(typeof(s)); //typeof() : 데이터 타입을 출력함
    console.log(isNaN(s));  //isNaN() : 문자열이 숫자로만 이루어지면 false 출력
    console.log(s+x); //문자열 덧셈 12310
    if (!isNaN(s) && ! isNaN(x)){ //isNaN(s)와 isNaN(x)모두 참일 때
        s = parseInt(s); //parseInt()로 문자열을 int형으로 바꿔줌
        x = parseInt(x);
    }
    console.log(s+x); //int형의 덧셈
}

const CheckFor = () => {
    let s = "토마토, 바나나";
    console.log(s[0]);
    console.log(s.charAt(0));
    console.log(s.split(',')); //split() : 매개변수에 따라 나눠진 후, 배열이 생성됨
    console.log(s.indexOf(',')); //indexOf() : 매개변수가 몇번째 인덱스에 있는지
    console.log(s.includes(','));

    for(let i =0;i<s.length;i++){
        console.log(s[i]);
    }

    for(let c of s){
        console.log(c);
    }
}