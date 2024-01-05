// 만 나이 계산하기
    // 생년, 월, 일을 변수로 설정하여 풀어보기

function MyAge(a, b, c){
    let todayYear = new Date().getFullYear();
    let todayMonth = new Date().getMonth()+1;
    let todayDay = new Date().getDay();
    let age = 0;
    if (todayMonth>=b) {
        if (todayDay>c)
            age = todayYear-a;
    }
    else
        age = todayYear-a-1;
    return age;
}
let year = 1989;
let month = 4;
let day = 10;
console.log(`저는 만${MyAge(year, month, day)}세입니다.`);