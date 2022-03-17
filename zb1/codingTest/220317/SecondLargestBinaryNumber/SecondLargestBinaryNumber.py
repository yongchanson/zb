def solution(n):
    """
    :param n: int
    :return: int
    """

    result = 0
    for i in range(1, n + 1):
        result += getSecondLargestBitNumber(i)
    return result


def getSecondLargestBitNumber(n):
    pivot = 1 << 15
    count = 0

    while pivot > 0:
        if pivot & n:
            count += 1
            if count == 2: return pivot

        pivot >>= 1

    return 0
