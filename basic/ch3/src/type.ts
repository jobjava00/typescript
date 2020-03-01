type EventType = "keyup" | "mouseover"; // string 타입의 확장으로 정의한 문자열만 할당 받을 수 있음

function typeTest(eventType: EventType) {
    console.log(eventType);
}

typeTest("keyup");