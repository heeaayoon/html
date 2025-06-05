const getimg=(div, loca) => {
    const apikey = "";
    let url = `https://apis.data.go.kr/B551011/PhotoGalleryService1/gallerySearchList1?serviceKey=${apikey}&numOfRows=10&pageNo=1&MobileOS=ETC&MobileApp=AppTest&arrange=A&keyword=${loca}&_type=json`

    fetch(url)
    .then(resp => resp.json()) //데이터를 json 형태로 전환 -> 리턴된 값의
    .then(data => {
        const imgarr = data.response.body.items.item //특정값의 배열을 받아옴
        //console.log(imgarr);
        const imgList = imgarr.map((item) => {      
            //console.log(item.galWebImageUrl);
            return `<div class = "imgsubf">
                    <img src="${item.galWebImageUrl}">
                    <p>${item.galTitle}</p> 
                    <p>${item.galPhotographyLocation}</p>
                    </div>`
        })
        let tags = imgList.join('');
        //console.log(tags);
        div.innerHTML = tags;
    }) 
    .catch(err => 
        div.innerHTML = "잘못된 검색입니다."
    );

}

document.addEventListener("DOMContentLoaded",()=>{
    const input = document.querySelector(".in");
    const div = document.querySelector(".imgf");
    const bt1 = document.querySelector(".bt1");
    const bt2 = document.querySelector(".bt2");

    //확인버튼(검색)이 눌러졌을 때
    bt1.addEventListener("click",(e)=> {
        e.preventDefault(); //<form>에서 자기 자신을 호출하는 것을 막음
        loca = input.value;
        getimg(div, loca);
    });

     //취소버튼이 눌러졌을 때
    bt2.addEventListener("click",(e)=> {
        //e.preventDefault(); //reset 기능을 위해서는 e.preventDefault 사용 X
        div.innerHTML=""; //이미지 등 이전 출력화면에서 나온 정보를 모두 삭제
    });

});
