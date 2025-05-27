const init = (cols) =>{
    msg.innerHTML = "";
    for(let col of cols){
        col.innerHTML = "";
    }
}
document.addEventListener('DOMContentLoaded', ()=>{

    const cols = document.querySelectorAll(".col");
    const bt = document.querySelector(".mdiv>button"); 
    const msg = document.querySelector("#msg");
    let arr = [0,0,0,0,0,0,0,0,1];
    let flag = false;
    let count = 0;

    
    for(let [idx,col] of cols.entries()){
        //col.innerHTML = idx+1;
        col.addEventListener("click",()=>{
            if(!flag) {
                msg.innerHTML = "폭탄을 섞어주세요";
                return;
            } 
            if(msg.innerHTML=="실패") return; // 더 이상 버튼이 눌러지지 않음
            if(arr[idx]==0){ //하트이미지
                col.innerHTML = `<img src ="../img/hart.png"/>`;
                count++;
            } else if (arr[idx]==1){ //폭탄이미지
                col.innerHTML = `<img src ="../img/boom.png"/>`;
                msg.innerHTML ="실패";
                bt.innerHTML = "폭탄섞기";
                flag = false;
            }

            if(count==8){
                msg.innerHTML ="성공";
                cols[arr.indexOf(1)].innerHTML = `<img src ="../img/hart.png"/>`;
                flag = false;
                bt.innerHTML = "다시 시작합니다.";
            }

        });
    }
    
    bt.addEventListener("click",()=>{ 
        if(!flag) {
            arr.sort(()=> Math.random()-0.5);
            console.log(arr);
            flag = true;
            bt.innerHTML = "게임 중..";
            init(cols);
            count =0;
        }
    })
});