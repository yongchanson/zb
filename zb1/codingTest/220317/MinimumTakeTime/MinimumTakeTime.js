/**
 * @param arr {number[]}
 * @param n {number}
 * @returns {number}
 */
function solution(arr, n) {
  const clinic = new Clinic(n)
  return clinic.getMinutes(arr)
}

class Clinic {
  constructor(roomCount) {
    this.rooms = []
    for (let i = 0; i < roomCount; i++) {
      this.rooms.push(new Room())
    }
  }

  getMinutes(arr) {
    let result = 0
    while (arr.length || !this.isDone()) {
      this.enter(arr)
      this.heal()
      result++
    }
    return result
  }

  heal() {
    for (const room of this.rooms) {
      room.heal()
    }
  }

  isDone() {
    for (const room of this.rooms) {
      if (!room.isDone()) return false
    }
    return true
  }

  enter(arr) {
    if (!arr.length) return

    for (const room of this.rooms) {
      if (room.isDone()) {
        room.enter(arr.shift())
        if (!arr.length) return
      }
    }
  }
}

class Room {
  constructor() {
    this.num = -1
  }

  isDone() {
    return this.num < 0
  }

  enter(num) {
    this.num = num
  }

  heal() {
    this.num--
  }
}

solution