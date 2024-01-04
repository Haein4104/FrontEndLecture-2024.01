// 백준도장
// 구구단 


// for (let i = 1; i <= 9; i++) {
//     for (let j =1; j <= 9; j++){
//         console.log(i, `X`, j, '=', i*j)
//     }
// }

// let num = 6;                                    // 6단만
// for (let j =1; j <= 9; j++){
//     console.log(`${num} X ${i} = ${num*1}`);
// }

// 2~9단
for (let i = 2; i<= 9; i++) {
    console.log(`======${i}단======`);
    for (let k = 1; k<= 9; k++)
    console.log(`${i} X ${k} = ${i * k}`)
}