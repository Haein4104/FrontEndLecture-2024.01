// 배열(Array)

let person = ['James', 27, '남자', '프로그래머', 175.3];
console.log(person);
console.log(typeof person);                             // object, array는 object의 한 형태
console.log(person.length);                             // length : object의 갯수
console.log(person[0], person[1], person[person.length-1]);     // person[person.length-1] : 모든 object 중 마지막

// 배열을 효율적으로 사용하려면.. --> 반복문을 사용!
// while 반복문 - 횟수가 정해지지 않은 경우에 사용
// for 반복문 - 횟수가 정해진 경우에 사용

for(let i=0; i < person.length; i++) {   // 시작값; 조건(i < person.length)이 참인 동안 반복; 다음 반복시 변화시킬 값
    console.log(person[i]);
}
for(let i=person.length-1; i >= 0; i--) {
    console.log(person[i]);
}

// Enhanced for-loop : 위 방법에 비해 더 간결하고 바람직하다.
console.log('Enhanced for-loop');
for (let item of person)
    console.log(item);

