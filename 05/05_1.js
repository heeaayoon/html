
//배열 선언 
let arr1 = [];
let arr2 = [1,2,3];
let arr3 = new Array();
let arr4 = new Array(1,2,3)

console.log(arr1);
console.log(arr2);
console.log(arr3);
console.log(arr4);

//배열 지우기
arr4.length=0;
arr4 = [];
console.log(arr4);

//랜덤한 수 만들기 
let n = Math.floor(Math.random()*5)+1; //1~5까지 랜덤 수 만들기
arr4.push(n);
console.log(arr4);

//배열의 순회
//1. 기본 for문
for (let i = 0;i<arr2.length;i++){
    console.log(arr2[i]);
}

//2. let 인덱스번호 in 배열 
for (let i in arr2){
     console.log(arr2[i]);
}

//3. let 해당인덱스의 값 in 배열
for (let c of arr2){
     console.log(c);
}

console.count("of+entries()");
//4. of 배열.entries() : 인덱스와 그 값을 새로운 배열로 출력함
for (let items of arr2.entries()){
     console.log(items);
}

console.count("[인덱스 번호 , 값]of+entries()");
//5. [index, value]of 배열.entries() : 인덱스와 그 값을 출력함
for (let [index, value] of arr2.entries()){
     console.log(`index=${index}, value=${value}`);
}

//거꾸로 출력함 
//6. forEach : 거꾸로 출력됨 
arr2.forEach((v,i) => {
     console.log(`index=${i}, value=${v}`);
})

//7. arr.map() : 
// let arr5 = arr2.map((item) => {
//     return item*2})
// console.log(arr5);

let arr5 = arr2.map(item => item*2)
console.log(arr5);

//8. arr.filter():
// let arr6 = arr2.filter((item)=>{return item %2==0}) //return 뒤의 조건에 맞는 값만 리턴함  : 해당 조건은 짝수만 출력함
// console.log(arr6);

let arr6 = arr2.filter(item=> item %2==0) //return 뒤의 조건에 맞는 값만 리턴함 
console.log(arr6);

// .map()을 for문으로 생성하기
let arr51 =[];
for (let n of arr2){
    arr51.push(n*2);
}
console.log(arr51);

//.filter()을 for문으로 생성하기
let arr61 =[];
for (let n of arr2){
    if(n%2==0){
        arr61.push(n);
    }
}
console.log(arr61);

//전개연산자 사용
let arr7 = [...arr2, ...arr4];
console.log(arr7);
