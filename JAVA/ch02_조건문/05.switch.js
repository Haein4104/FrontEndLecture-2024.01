// 다중 선택 - Switch

let score = Math.ceil(Math.random() * 60) + 40;         // 41~100 사이의 정수
let grade = '';

switch(parseInt(score / 10)) {            // parseInt : 소수점 자르기
    case 10:
        grade = 'A+'; break               // break : switch문을 벗어남
    case 9:
        grade = 'A'; break;                        
    case 8:
        grade = 'B'; break
    case 7:
        grade = 'C'; break
    case 6:
        grade = 'D'; break
    default:
        grade = 'F'
}
console.log(`점수: ${score}, 학점: ${grade}`);