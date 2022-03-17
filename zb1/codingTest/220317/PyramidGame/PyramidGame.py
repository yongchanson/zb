def solution(arr):
    """
    :param arr: int[][]
    :return: int
    """

    n = len(arr)
    dp = [[]] * n
    for i in range(n - 1, -1, -1):
        dp[i] = [[]] * len(arr[i])
        for j in range(i, -1, -1):
            if i == n - 1:
                dp[i][j] = arr[i][j]
                continue

            dp[i][j] = arr[i][j] + max(dp[i + 1][j], dp[i + 1][j + 1])

    return dp[0][0]
