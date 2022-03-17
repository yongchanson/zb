def solution(n):
    """
    :param n: int
    :return: int
    """

    MOD = 1_000_000_007
    result = 1
    for i in range(1, n + 1):
        result *= 2
        result %= MOD

    return result - 1
