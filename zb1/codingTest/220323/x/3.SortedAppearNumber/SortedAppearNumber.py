def solution(s):
    """
    :param s: str
    :return: str
    """

    countedArr = getCountedArr(s)
    orders = getBiggerOrders(countedArr)
    return ' '.join([str(i) for i in orders])


def getCountedArr(s):
    result = [0] * 10
    for c in s:
        result[int(c)] += 1
    return result


def getBiggerOrders(arr):
    order = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    for high in range(1, len(arr)):
        for low in range(high):
            if arr[low] < arr[high]:
                arr[low], arr[high] = arr[high], arr[low]
                order[low], order[high] = order[high], order[low]
            elif arr[low] == arr[high] and order[low] > order[high]:
                order[low], order[high] = order[high], order[low]
    return order
