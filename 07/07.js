document.addEventListener('DOMContentLoaded', ()=>{
    const imgs = document.querySelectorAll(".mdiv img");
    const bts = document.querySelectorAll(".mdiv button");
    const msg = document.querySelector("#msg");

    console.log(imgs);
    console.log(bts);

    for (let [idx,bt] of bts.entries()){  //인덱스-값을 쌍으로 받아옴
        //console.log(bt); //반복문을 돌면서 버튼을 하나씩 출력함
        
        bt.addEventListener('click',(e)=>{ 
            console.log(bt.innerHTML); //버튼들 중에 하나를 클릭시 아래의 이벤트들이 발생함
            //0. 버튼 이벤트 방지
            e.preventDefault();

            //1. 컴퓨터 랜덤 수 생성 -> 컴퓨터 이미지 변경
            let n = Math.floor(Math.random()*6)+1;
            imgs[0].setAttribute('src', `../img/${n}.png`) //imgs[0]이 컴퓨터 이미지

            //2. 유저 숫자버튼 선택시 -> 유저 이미지 변경
            let usern = idx+1; //인덱스+1 
            imgs[1].setAttribute('src', `../img/${usern}.png`);

            //3. 컴퓨터의 랜덤 수와 유저의 수가 동일한지 비교
            if(n == usern){
                msg.innerHTML = "맞음"
            }else{
                 msg.innerHTML = "다름"
            }
        })
    }
    
});