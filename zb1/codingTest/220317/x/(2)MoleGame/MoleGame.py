from functools import reduce


def solution(state, linkNums):
    """
    :param state: int[]
    :param linkNums: int[][]
    :return: int
    """

    linked = generateLinked(linkNums)
    minClickCount = countMinClickToAllOut(state, linked, 0)

    # 모든 두더지를 나오게 할 수 없으면 -1을 반환한다.
    return -1 if minClickCount == INF else minClickCount


INF = 9999


# 주어진 linkNums를 사용하기 편하게 이중 배열로 가공한다
def generateLinked(linkNums):
    MOLE_SIZE = 9;
    linked = [];

    for i in range(len(linkNums)):
        linked.insert(i, [0] * MOLE_SIZE)

        for j in range(len(linkNums[i])):
            linkedMoleIndex = linkNums[i][j]
            linked[i][linkedMoleIndex] = 1

    return linked


def countMinClickToAllOut(state, linked, switchIndex):
    # 기저사례 : 모든 스위치를 순회한 경우
    if switchIndex >= len(linked):
        return 0 if isAllOut(state) else INF

    # 스위치 누른 횟수를 큰 수로 초기화 한다.
    clickCount = INF
    for i in range(2):
        # 스위치를 누른 횟수가 작은 수를 취한다.
        clickCount = min(clickCount, i + countMinClickToAllOut(state, linked, switchIndex + 1))
        clickSwitch(state, linked, switchIndex)
        # 버튼을 2번 누르면 초기 상태로 돌아간다.

    return clickCount


# 모든 두더지가 나왔는지 확인
def isAllOut(state):
    return reduce(lambda acc, cur: acc and cur == 1, state, True)


# 스위치 눌렀을 때, 두더지의 상태 변경
def clickSwitch(state, linked, switchIndex):
    for i in range(len(linked[switchIndex])):
        isLinked = linked[switchIndex][i] == 1
        if isLinked:
            state[i] = (state[i] + 1) % 2
