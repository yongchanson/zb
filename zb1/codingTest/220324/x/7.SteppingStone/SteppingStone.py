def solution(n):
    """
    :param n: int
    :return: int
    """

    fibonaccis = []
    fibonaccis.insert(0, 1)
    fibonaccis.insert(1, 2)

    for i in range(2, n):
        fibonaccis.insert(i, fibonaccis[i - 2] + fibonaccis[i - 1])

    return fibonaccis[n - 1]
