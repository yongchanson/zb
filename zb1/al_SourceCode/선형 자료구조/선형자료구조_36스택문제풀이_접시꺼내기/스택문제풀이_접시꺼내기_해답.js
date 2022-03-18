/* 접시 꺼내기 */

if (!Array.prototype.peek) {
  Array.prototype.peek = function () {
    return this[this.length - 1];
  };
}

if (!Array.prototype.isEmpty) {
  Array.prototype.isEmpty = function () {
    return this.length == 0;
  };
}

/* user code */
function answer(str) {
  let result = [];

  // 1. 접시의 순서 abc... 문자열

  // 2. 꺼내야 하는 접시, 세척기 안에 있는 알파벳 작을 때 push

  // 3. 최 상단 접시와 비교

  let stack = [];
  let dish = str.split("").sort().join(""); //split->b,a,c,d / sort->a,b,c,d / join-> abcd
  let dish_index = 0;

  for (let i = 0; i < str.length; i++) {
    //TC:bacd -> str:bacd / dish:abcd=stack
    while (stack.isEmpty() || stack.peek() < str[i]) {
      //1.존재x 2.a<b? 3. b<b?:while탈출
      stack.push(dish[dish_index++]); //stack: a,b
      result.push(0); //result:0, 0
    }

    if (stack.isEmpty() || stack.peek() > str[i]) {
      return [];
    } else {
      //statck.peek()==str[i]인 경우 /
      console.log(`stack : ${stack}`);
      console.log(result);
      stack.pop(); //stack: a,b에서 b삭제 -> stack: a
      result.push(1); //result: 0, 0, 1
      console.log(`stack : ${stack}`);
      console.log(result);
    }
  }

  return result;
}

/* main code */
let input = [
  // TC: 1
  "bacd",

  // TC: 2
  "dabc",

  // TC: 3
  "edcfgbijha",
];

for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1} `);
  console.log(answer(input[i]));
}
