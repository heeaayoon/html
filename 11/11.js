const yesterday =() =>{
    let yd = new Date();
    yd.setDate(yd.getDate()-1); //어제 날짜
    return yd.toISOString().slice(0,10);

    // let y = yd.getFullYear(); //4자리년도
    // let m = yd.getMonth()+1; //월
    // m<10 ? '0' + m : m;
    // let d = yd.getDate(); //일
    // d<10 ? '0' + d : d;

    // return y+m+d;
}


const getMvList=(dt,ul) => {
    console.log(dt)
    const url = "https://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=d566936dcce384cf137234e5eb3ea70c&targetDt="+dt
    // date.addEventListener("change",()=>{
    //     const cday = document.querySelector("#dt").value;
    //     console.log(cday);
    //     cday.replace
    // })

    fetch(url)
    .then(resp => resp.json()) //데이터를 json 형태로 전환 -> 리턴된 값의
    .then(data => {
        const dbox = data.boxOfficeResult.dailyBoxOfficeList //특정 부분만 받아옴
        //console.log(dbox); //배열 안의 오브젝트 형태로 출력됨
        //const mvList = dbox.map((item) => console.log(item.movieNm)) //배열을 map()으로 돈 후, 오브젝트를 받아서 -> 오브젝트의 특정부분만 콘솔에 출력함

        
        const mvList = dbox.map((item) => {
            let sp ; 
            if(parseInt(item.rankInten) > 0){
                //console.log(item.rankInten);
                sp = `<span class = "rankI"><i class="fa-solid fa-arrow-up"></i>`+Math.abs(item.rankInten)+`</span>`
                }else if(parseInt(item.rankInten) < 0){
                   sp = `<span class = "rankI"><i class="fa-solid fa-arrow-down"></i>`+Math.abs(item.rankInten)+`</span>`
                }else{
                    sp = "";
                }
            return `<li>
                <span class ="rank">${item.rank}</span>
                <span class = "name">${item.movieNm}</span>
                ${sp}
            </li>`
            }
        );    
        let tags = mvList.join('');
        console.log(tags);
        ul.innerHTML = tags;
    }) 
    .catch(err => console.log(err));

}

document.addEventListener("DOMContentLoaded",()=>{
    const ul = document.querySelector("main>ul");
    const date = document.querySelector("#dt");

    getMvList(dt.value.replaceAll('-',''),ul);
    dt.value=yesterday();
    console.log(yesterday());

    date.addEventListener("change",()=> {
        getMvList(dt.value.replaceAll('-',''),ul);
    })

});