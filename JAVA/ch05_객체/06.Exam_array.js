// 배열(Array)를 매개변수로 받아서, 합의 제곱과 제곱의 합의 차이를 구하는 함수를 만들고
// [24, 67, 45, 97, 43]의 결과를 출력하세요.

function sumArray(arr) {
    let sum1 = 0;
    let sum2 = 0;
    for (let i = 0; i < arr.length; i++){
        sum1 += arr[i];
    }
    sum1 = sum1 * sum1;

    for (let i = 0; i < arr.length; i++){
    sum2 += arr[i] * arr[i];
    }
    return sum1 - sum2;
}
let sampleArray = [24, 67, 45, 97, 43]

console.log(sumArray(sampleArray));
