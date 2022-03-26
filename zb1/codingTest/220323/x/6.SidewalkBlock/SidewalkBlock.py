import math


def solution(w, h):
    """
    :param w: int
    :param h: int
    :return: int
    """

    return calcSidewalkInstallPrice(w, h) if w < h else calcSidewalkInstallPrice(h, w)


ONE_SIDEWALK_PRICE = 500
HALF_SIDEWALK_PRICE = 300


def calcSidewalkInstallPrice(short, long):
    halfSidewalkCount = math.floor(short / 2) * 2

    return (short * long) * ONE_SIDEWALK_PRICE + (halfSidewalkCount / 2) * (
                2 * HALF_SIDEWALK_PRICE - ONE_SIDEWALK_PRICE)
