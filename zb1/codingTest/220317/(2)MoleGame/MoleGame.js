/**
 * @param state {number[]}
 * @param linkNums {number[][]}
 * @return {number}
 */
function solution(state, linkNums) {
  const linked = generateLinked(linkNums);
  const minClickCount = countMinClickToAllOut(state, linked, 0);

  // 모든 두더지를 나오게 할 수 없으면 -1을 반환한다.
  return minClickCount === INF ? -1 : minClickCount;
}

const INF = 9999;

// 주어진 linkNums를 사용하기 편하게 이중 배열로 가공한다
function generateLinked(linkNums) {
  const MOLE_SIZE = 9;
  const linked = [];

  for (let i = 0; i < linkNums.length; i++) {
    linked[i] = new Array(MOLE_SIZE).fill(0);

    for (let j = 0; j < linkNums[i].length; j++) {
      const linkedMoleIndex = linkNums[i][j];
      linked[i][linkedMoleIndex] = 1;
    }
  }

  return linked;
}

function countMinClickToAllOut(state, linked, switchIndex) {
  // 기저사례 : 모든 스위치를 순회한 경우
  if (switchIndex >= linked.length) return (isAllOut(state) ? 0 : INF);

  // 스위치 누른 횟수를 큰 수로 초기화 한다.
  let clickCount = INF;
  for (let i = 0; i < 2; i++) {
    // 스위치를 누른 횟수가 작은 수를 취한다.
    clickCount = Math.min(clickCount, i + countMinClickToAllOut(state, linked, switchIndex + 1));
    clickSwitch(state, linked, switchIndex);
    // 버튼을 2번 누르면 초기 상태로 돌아간다.
  }

  return clickCount;
}

// 모든 두더지가 나왔는지 확인
function isAllOut(state) {
  return state.reduce((acc, cur) => acc && cur === 1, true);
}

// 스위치 눌렀을 때, 두더지의 상태 변경
function clickSwitch(state, linked, switchIndex) {
  for (let i = 0; i < linked[switchIndex].length; i++) {
    const isLinked = linked[switchIndex][i] === 1;
    if (isLinked) {
      state[i] = (state[i] + 1) % 2;
    }
  }
}

solution
