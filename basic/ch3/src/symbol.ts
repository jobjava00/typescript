let helloSymbol = Symbol("hello");   // 수정 불가능한 데이터 타입으로 객체 속성의 식별자로 사용
let helloSymbol2 = Symbol("hello");  
console.log(helloSymbol === helloSymbol2)
console.log(helloSymbol, helloSymbol2);
console.log(typeof helloSymbol);