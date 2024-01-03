// 현재 시간을 표시
let today = new Date();
console.log(today);                 // 표준시 형태로 출력됨

let hour = today.getHours();        // Timezone 적용된 현재 시각
console.log(hour);
console.log(today.getMonth());      // +1 을 해주어야 현재 월의 값이 제대로 나옴

if (hour < 12)
    console.log(`오전 ${hour} 시입니다.`);
if (hour >= 12)
    console.log(`오후 ${hour - 12} 시입니다.`);


// if-else
if (hour < 12)
    console.log(`${hour} 시입니다.`);
else
    console.log(`지금은 ${hour} 시입니다.`); 