def solution(arr, n):
    """
    :param arr: int[]
    :param n: int
    :return: int
    """

    clinic = Clinic(n)
    return clinic.getMinutes(arr)


class Clinic:
    def __init__(self, roomCount):
        self.rooms = []
        for i in range(roomCount):
            self.rooms.append(Room())

    def getMinutes(self, arr):
        result = 0
        while len(arr) != 0 or not self.isDone():
            self.enter(arr)
            self.heal()
            result += 1
        return result

    def isDone(self):
        for room in self.rooms:
            if not room.isDone(): return False
        return True

    def heal(self):
        for room in self.rooms:
            room.heal()

    def enter(self, arr):
        if len(arr) == 0: return

        for room in self.rooms:
            if room.isDone():
                room.enter(arr.pop(0))
                if len(arr) == 0: return


class Room:
    def __init__(self):
        self.num = -1

    def isDone(self):
        return self.num < 0

    def enter(self, num):
        self.num = num

    def heal(self):
        self.num -= 1
