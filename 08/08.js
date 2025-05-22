   //<selector> 박스가 변경되는 함수를 만들어서 호출
   const selectorChange =(s1, s2, l1, l2, t1, t2) =>{
        //selsctor의 값이 변경
        if(s1.value == "℃"){
            s2.value = "℉";
        }else{
             s2.value = "℃";
        }
        //label의 값을 변경
        l1.innerHTML = s1.value;
        l2.innerHTML = s2.value;

        //input 값도 초기화 
        t1.value = "";
        t2.value = "";
        t1.focus();
    }


//DOM이 생성이 된 후 -> 6개의 요소를 받아옴
document.addEventListener('DOMContentLoaded', ()=>{
    //1. DOM 요소 가져오기 
    //<select> 가져오기
    const sel1 = document.querySelector("#sel1");
    //console.log(sel1);
    const sel2 = document.getElementById("sel2");
    //<input> 가져오기
    const txt1 = document.querySelector("input"); //querySelector(input)는 처음 만나는 <input>을 가져옴
    const txt2 = document.querySelector("[readonly]");
    //<label> 가져오기 
    const lab1 = document.querySelector("[for = txt1]");
    const lab2 = document.querySelector("[for = txt2]");

    //2. select1의 값이 변경될때
    sel1.addEventListener('change',()=>{
        selectorChange (sel1, sel2, lab1, lab2, txt1, txt2);
         console.log(sel1.value); 
         console.log(sel2.value);

        // //console.log(cell1.value); //cell1의 value가 변경됨
        // //cell2의 값이 변경
        // if(cell1.value == "℃"){
        //     cell2.value = "℉";
        // }else{
        //      cell2.value = "℃";
        // }
        // //label의 값을 변경
        // label1.innerHTML = cell1.value;
        // label2.innerHTML = cell2.value;

        // //input 값도 초기화 
        // txt1.value = "";
        // txt2.value = "";
    })

    //select2의 값이 변경될때
    sel2.addEventListener('change',()=>{
        selectorChange (sel2, sel1, lab2, lab1, txt1, txt2);

        // //cell1의 값이 변경
        // if(cell2.value == "℃"){
        //     cell1.value = "℉";
        // }else{
        //      cell1.value = "℃";
        // }
        // //label의 값을 변경
        // label1.innerHTML = cell1.value;
        // label2.innerHTML = cell2.value;

        // //input 값도 초기화 
        // txt1.value = "";
        // txt2.value = "";
    })

    //3.<input>에 값을 입력시, 화씨->섭씨 or 섭씨->화씨 계산
    txt1.addEventListener('input',()=>{ //섭씨->화씨 계산
        if(sel1.value == "℃"){ 
            txt2.value = parseFloat((txt1.value* (9/5)) + 32).toFixed(4); //소수점 4자리까지 출력하고 싶음 : toFixed(4)
        }else{ //화씨->섭씨 계산
            txt2.value = parseFloat((txt1.value-32) * (5/9)).toFixed(5);

        }

    })


    
});