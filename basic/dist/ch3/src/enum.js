"use strict";
var WeekDay;
(function (WeekDay) {
    WeekDay[WeekDay["Mon"] = 0] = "Mon";
    WeekDay[WeekDay["Tue"] = 1] = "Tue";
    WeekDay[WeekDay["Wed"] = 2] = "Wed";
    WeekDay[WeekDay["Thu"] = 3] = "Thu";
})(WeekDay || (WeekDay = {}));
var WeekDay2;
(function (WeekDay2) {
    WeekDay2[WeekDay2["Mon"] = 10] = "Mon";
    WeekDay2[WeekDay2["Tue"] = 11] = "Tue";
    WeekDay2[WeekDay2["Wed"] = 40] = "Wed";
    WeekDay2[WeekDay2["Thu"] = 13] = "Thu";
})(WeekDay2 || (WeekDay2 = {})); // 초기값 지정
var WeekDay3;
(function (WeekDay3) {
    WeekDay3["Mon"] = "Monday";
    WeekDay3["Tue"] = "Tuesday";
})(WeekDay3 || (WeekDay3 = {})); // 문자열 지정
let day = WeekDay.Mon;
console.log(day);
console.log(WeekDay2.Wed);
console.log(WeekDay3.Mon);
//# sourceMappingURL=enum.js.map