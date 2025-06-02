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

const getPoster=(mvNm)=>{
    console.log("getPoster", mvNm);
    const tmdbApi = "b42483d9af611184a5e87b9980e11075";
    let url = `https://api.themoviedb.org/3/search/movie?api_key=${tmdbApi}&query=${mvNm}`;
    const poster = document.querySelector(".poster");
    const rDay = document.querySelector(".releaseDay");

    fetch(url)
    .then(resp => resp.json())
    .then(data => {
        console.log(data.results[0].poster_path)
        poster.innerHTML = `<img src = "https://image.tmdb.org/t/p/w500${data.results[0].poster_path}"/>`
        rDay.innerHTML = `개봉일자 : ${data.results[0].release_date}` 
    })
    .catch(err => console.log(err));
}



const getMvList=(dt,ul,rVal) => {
    console.log(dt)
    //const au = document.querySelector(".audi");
    const apikey = "d566936dcce384cf137234e5eb3ea70c";
    let url = `https://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=${apikey}&targetDt=${dt}`;

    if (rVal== "N"){
        url = `${url}&multiMovieYn=N`
    }else if(rVal=="Y"){
         url = `${url}&multiMovieYn=Y`
    }

    fetch(url)
    .then(resp => resp.json()) //데이터를 json 형태로 전환 -> 리턴된 값의
    .then(data => {
        const dbox = data.boxOfficeResult.dailyBoxOfficeList //특정 부분만 받아옴
        //console.log(dbox); //배열 안의 오브젝트 형태로 출력됨
        //const mvList = dbox.map((item) => console.log(item.movieNm)) //배열을 map()으로 돈 후, 오브젝트를 받아서 -> 오브젝트의 특정부분만 콘솔에 출력함
        //au.innerHTML = `관객수 : ${data.boxOfficeResult.dailyBoxOfficeList}`
        
        
        const mvList = dbox.map((item) => {
            let sp ; 
            
            if(parseInt(item.rankInten) > 0){
                //console.log(item.rankInten);
                sp = `<span class = "ranku"><i class="fa-solid fa-arrow-up"></i>`+Math.abs(item.rankInten)+`</span>`
            }else if(parseInt(item.rankInten) < 0){
                sp = `<span class = "rankd"><i class="fa-solid fa-arrow-down"></i>`+Math.abs(item.rankInten)+`</span>`
            }else{
                sp = "";
            }
            
            const mv = encodeURIComponent(item.movieNm);
            return `<li onClick=getPoster("${mv}")>
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
    const ul = document.querySelector("main ul");
    const date = document.querySelector("#dt");
    const bt = document.querySelector(".sub");

    //getMvList(dt.value.replaceAll('-',''),ul);
    date.value=yesterday();
    date.setAttribute("max",date.value);
    //console.log(yesterday());

    date.addEventListener("change",()=> {
        getMvList(dt.value.replaceAll('-',''),ul, " ");
    })

    //버튼이 눌러졌을 때
    bt.addEventListener("click",(e)=> {
        e.preventDefault(); //<form>에서 자기 자신을 호출하는 것을 막음
        const rVal = document.querySelector("[type=radio]:checked").value;
        console.log(rVal);
        getMvList(dt.value.replaceAll('-',''),ul,rVal);

        document.querySelector(".poster").innerHTML=""; //포스터 이미지 등 이전 출력화면에서 나온 정보를 모두 삭제
        document.querySelector(".releaseDay").innerHTML="";
    });

});