const funcB = () =>{
    console.log("B");
}


const funcA = () =>{
    console.log("A");
    setTimeout(()=>console.log("B"),1000); //1초 뒤에 콘솔을 찍음 -> A.c 가 먼저 나오고 1초 뒤에 B가 찍힘
    console.log("C");
}

const funcC = () =>{
    console.log("A");
    setTimeout(()=>{
        console.log("B")
        setTimeout(()=>{
            console.log("c")
        },500)
    },1000); 
}

document.addEventListener("DOMContentLoaded",()=>{
    //funcA();
    funcC();
});