// 사물을 '속성:속성값'으로 객체화(objectification)
//      - 동작 : method (객체 안에서 사용되는 함수)

let obj = {
    // 속성(attribute)
    name: 'apple',
    price: '5,000',

    // 메소드(method)
    print: function() {
        console.log(`${this.name}의 가격은 ${this.price} won`)     // *this : 속성값
    }
}
console.log(obj.name, obj.price);
obj.print();