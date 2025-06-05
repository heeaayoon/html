//데이터를 가져오는 함수
const getData = (input, content) =>{
    const apiKey = "";
    const baseUrl = "https://apis.data.go.kr/B551011/PhotoGalleryService1/gallerySearchList1?";
    let url = `${baseUrl}serviceKey=${apiKey}&numOfRows=10&pageNo=1&MobileOS=ETC&MobileApp=AppTest&arrange=A`;
    url = `${url}&_type=json&keyword=${input.value}`;
    
    console.log(url); //url을 잘 받았는지 확인

    fetch(url) //fetch함수로 url 보내고
        .then(resp => resp.json()) //.then으로 json 형태의 데이터만 받아오기
        .then(data => { //json 형태의 데이터에서 원하는 데이터만 고르기 
            const items = data.response.body.items.item;
            console.log(items); //배열 안의 오브젝트 형태로 값을 받아옴

            let tags = items.map(item =>{ //map으로 새로운 배열 생성
                return `<div class = "card">
                    <div class = "cardimg">
                        <img src = "${item.galWebImageUrl}"/>
                    </div>
                    <div class = "cardDiv">
                        <span class = "sp1">${item.galTitle}</span>
                        <span class = "sp2">${item.galPhotographyLocation}</span>
                    </div>
                </div>`
            })
            let tag = tags.join(""); //문자열로 합치기
            //console.log(tag);
            content.innerHTML = tag;
        }) 
        .catch(err => console.log(err));
}

//DOM이 모두 만들어진 후에 실행됨
document.addEventListener("DOMContentLoaded",() => { 
    const input = document.querySelector("#txt1");
    const bt1 = document.querySelector(".formDiv>button")//formDiv 아래의 <button> 중에 처음 버튼을 가져옴
    const bt2 = document.querySelector(".formDiv>[type=reset]");//formDiv 아래 요소 중에 type=reset 속성을 가지는 요소를 가져옴
    const content = document.querySelector(".content");

    //취소버튼(bt2)을 누르면 content 안의 내용 모두 삭제
    bt2.addEventListener("click",()=>{
        content.innerHTML = "";
    });

    //확인버튼(bt1)을 누르면, 데이터를 가져와서 뿌리기
    bt1.addEventListener("click", (e)=>{
        e.preventDefault();

        if(input.value == ""){ //키워드를 입력하지 않은 경우,
            alert("키워드를 입력하세요");
            input.focus();
            return;
        }

        //키워드에 입력이 된 경우
        getData(input, content);

    });

});
