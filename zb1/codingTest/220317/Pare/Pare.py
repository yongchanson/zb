from functools import reduce


def solution(arr):
    """
    :param arr: int[]
    :return: int
    """

    if (len(arr) % 2) == 0:
        return 0

    return reduce(lambda x, y: x ^ y, arr, 0)
