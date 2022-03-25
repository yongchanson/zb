def solution(arr, num):
    """
    :param arr: int[][]
    :param num: int
    :return: int
    """

    mergedArr = []
    for eachArr in arr:
        mergedArr += eachArr
    mergedArr.sort()
    return mergedArr[num - 1]
