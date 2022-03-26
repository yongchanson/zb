import math


def solution(num):
    """
    :param num: int
    :return: int
    """

    MAX_NUM = 100_000

    isNegative = num < 0
    if isNegative: num *= -1

    i = num
    result = 0
    while i > 0:
        result = (result * 10) + (i % 10)
        i = math.trunc(i / 10)

    if MAX_NUM < result: return 0

    return -result if isNegative else result
