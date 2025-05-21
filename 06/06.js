document.addEventListener('DOMContentLoaded', ()=>{
    const img = document.querySelector(".mdiv>img");
    const bt = document.querySelector(".mdiv>button");

    bt.addEventListener('click', ()=>{
       //1.1~6까지 랜덤 수를 생성
       let n = Math.floor(Math.random()*6)+1;
       //2.랜덤수에 해당하는 이미지를 변경함
       img.setAttribute('src', `../img/${n}.png`);
       img.setAttribute('alt',`${n}번 주사위`)
    });
});