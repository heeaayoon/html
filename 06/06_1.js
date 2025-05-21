//오브젝트 생성
let obj1 = {};
let obj2 = new Object();

//오브젝트 초기화
obj1 = {'a':1, 'b':2};

console.log(`a=${obj1['a']}`);

//오브젝트 수정
obj1['a']=10;
console.log(obj1);

//오브젝트 추가 
obj1['c']=20;
console.log(obj1);

//오브젝트 삭제
delete obj1['b'];
console.log(obj1);

//오브젝트 내 데이터 순회
console.log("오브젝트 키 목록 :", Object.keys(obj1)); //키 목록을 배열로 반환함
console.log("오브젝트 값 목록 :", Object.values(obj1)); //값 목록을 배열로 반환함
console.log("오브젝트 키-값 목록 :", Object.entries(obj1));  //키-값 목록을 배열로 반환함
//즉, 배열의 모든 문법을 사용할 수 있음

for (let k of Object.keys(obj1)){
    console.log(obj1[k]);
}

for (let v of Object.values(obj1)){
    console.log(v);
}

for (let [k,v] of Object.entries(obj1)){
    console.log(`키 : ${k}, 값 : ${v}`);
}

//전개연산자 이용해서 복사와 병합하기
//오브젝트 복사
obj2 = {'apple':'🍎','banana':'🍌'};
obj1 = {...obj2, 'orange':'🍊'};
console.log(obj1);
console.log(obj2);
