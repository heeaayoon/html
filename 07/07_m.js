document.addEventListener('DOMContentLoaded', ()=>{
    const imgCom = document.querySelector(".mdiv1 img");
    const imgUser = document.querySelector(".mdi2 img");
    const bt1 = document.querySelector("#bt1");
    const bt2 = document.querySelector("#bt2");
    const bt3 = document.querySelector("#bt3");
    const bt4 = document.querySelector("#bt4");
    const bt5 = document.querySelector("#bt5");
    const bt6 = document.querySelector("#bt6");
    
    // //1.1~6까지 랜덤 수를 생성
    // let n = Math.floor(Math.random()*6)+1;

    bt1.addEventListener('click', ()=>{
        imgUser.setAttribute('src', `../img/1.png`);
        imgUser.setAttribute('alt',`1번 주사위`)
    });

    bt2.addEventListener('click', ()=>{
        imgUser.setAttribute('src', `../img/2.png`);
        imgUser.setAttribute('alt',`2번 주사위`)
    });

    bt3.addEventListener('click', ()=>{
        imgUser.setAttribute('src', `../img/3.png`);
        imgUser.setAttribute('alt',`3번 주사위`)
    });

    bt4.addEventListener('click', ()=>{
        imgUser.setAttribute('src', `../img/4.png`);
        imgUser.setAttribute('alt',`4번 주사위`)
    });

    bt5.addEventListener('click', ()=>{
        imgUser.setAttribute('src', `../img/5.png`);
        imgUser.setAttribute('alt',`5번 주사위`)
    });
});