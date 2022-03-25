def solution(points):
    """
    :param points: int[]
    :return: int
    """

    x1 = points[0]
    y1 = points[1]
    x2 = points[2]
    y2 = points[3]
    x3 = points[4]
    y3 = points[5]

    a = (x1 * y2) + (x2 * y3) + (x3 * y1)
    b = (x2 * y1) + (x3 * y2) + (x1 * y3)
    return abs(a - b)
