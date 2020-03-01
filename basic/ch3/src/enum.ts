enum WeekDay { Mon, Tue, Wed, Thu }
enum WeekDay2 { Mon = 10, Tue, Wed = 10 << 2, Thu = 13 }    // 초기값 지정
enum WeekDay3 { Mon = "Monday", Tue = "Tuesday" }   // 문자열 지정
let day: WeekDay = WeekDay.Mon;

console.log(day);
console.log(WeekDay2.Wed);
console.log(WeekDay3.Mon);