# import numpy


def solution(arr, l):
    """
    :param arr: int[]
    :param l: int
    :return: int
    """

    arr.sort()

    # dp = numpy.full(shape=(len(arr), l + 1), fill_value=-1)

    # return patientQuantization(arr, 0, l, dp)


INF = 1000000


def patientQuantization(arr, start, divideCnt, dp):
    # 기저사례
    if divideCnt == 1:
        return calcError(arr, start, len(arr) - 1)

    if dp[start][divideCnt] != -1:
        return dp[start][divideCnt]

    result = INF
    for next in range(start + 1, len(arr) - (divideCnt - 1) + 1):
        result = min(result, calcError(arr, start, next - 1) + patientQuantization(arr, next, divideCnt - 1, dp))

    dp[start][divideCnt] = result
    return result


def calcError(arr, start, end):
    cnt = 0
    sum = 0
    for i in range(start, end + 1):
        if arr[i] != 0:
            sum += arr[i]
            cnt += 1

    avg = round(sum / cnt)
    error = 0
    for i in range(start, end + 1):
        if arr[i] != 0:
            error += pow(avg - arr[i], 2)

    return error
