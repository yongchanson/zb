def solution(n):
    """
    :param n: int
    :return: int
    """

    result = 0

    # n부터 0까지 순회합니다.
    for i in range(n, -1, -1):
        val = n

        # n에서 빼기 1씩 하면서 0이 되면 결과에 1을 추가합니다.
        for j in range(n + 1):
            val -= i - j
            if val <= 0:
                if val == 0:
                    result += 1
                    break

    return result
