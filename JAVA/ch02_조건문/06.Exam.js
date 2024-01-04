// let H = Math.ceil(Math.random() * 24);
// let M = Math.ceil(Math.random() * 59);
// console.log(H + " " + M);
let H = 0; 
let M = 0; 
// >, >=, <, <=
// 초과, 이상, 미만, 이하
if(M > 45 ){ // 분(Min)이 44 ~
    // h는 두고 m에서 빼야지..,,,. 우리가 빼려는 수는 45 즉, 음수는 절대로! 나올수가 없음
    M -= 45;
}
else
{ // == if(M <= 45) 
    // 44 ~ 의 수에서 -45 == 무조건 음수가 나온다
    H -= 1; // H--;
    M = M + 60 - 45;
    if(H < 0 ){
        console.log((H+24) + " " + (M+15));
    }
}

// console.log(H + " " + M);