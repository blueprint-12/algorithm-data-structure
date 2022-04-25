//🍕백준문제1330번 두 수 비교하기

/*
✅Q. 두 정수 A와 B가 주어졌을 때, A와 B를 비교하는 프로그램을 작성하시오.
✅입력: 첫째 줄에 A와 B가 주어진다. A와 B는 공백 한 칸으로 구분되어져 있다.
✅출력: 첫째 줄에 다음 세 가지 중 하나를 출력한다.
    A가 B보다 큰 경우에는 '>'를 출력한다.
    A가 B보다 작은 경우에는 '<'를 출력한다.
    A와 B가 같은 경우에는 '=='를 출력한다.

✅예제 입력: 
1 2 // < 
*/
const fs = require('fs');
const data = fs.readFileSync('dev/stdin').toString().split(' ');
const num1 = Number(data[0]);
const num2 = Number(data[1]);
compareTwoNums(1, 4);
function compareTwoNums(A, B) {
  if (A > B) {
    console.log('>');
  } else if (A < B) {
    console.log('<');
  } else if (A == B) {
    console.log('==');
  } else return;
}
compareTwoNums(num1, num2);

//✅급 생각안나서 정리하는 함수 선언 위치 관련 개념 (위의 코드와는 무관하다 보면 됨)

//JS의 함수를 정의하는 방법에는 크게 두 가지가 있는데
//1. 함수 선언식 , 2. 함수 표현식이 있다.
//1번의 경우는 호출하는 곳이 상관없다. 선언보다 앞서도 무관 (호이스팅때문에)
//2번의 경우는 변수에 익명함수를 담아주는 것이기 때문에 호출위치가 선언보다 뒤여야 한다.

// 함수 선언식의 경우는 funciton a () {} 처럼 작성하고
// 함수 표현식의 경우는 const func1 = function (){} 처럼 작성한다.
// 2번 함수 표현식을 쓰면 함수를 변수에 담을 수 있다.
// 1번 함수 선언식의 경우 JS에서 실행될 때 함수를 실행하기 전에 해당 함수를 먼저 확인한다.
// 2번 함수 표현식의 경우 변수에 익명함수가 들어가 있는 것이기 때문에 먼저 변수 선언이 이뤄지고 함수 실행이 일어난다.
//그렇기 때문에 호출하는 곳이 선언보다 앞서있을 때 에러를 발생시킨다.
