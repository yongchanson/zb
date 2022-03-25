/**
 * @param w {number}
 * @param h {number}
 * @returns {number}
 */

function solution(w, h) {
  if (w % 2 == 0) {
    a = (w / 2) * h * 500;
    b = (w / 2) * ((h - 1) * 500 + 300 * 2);
  } else {
    //처음에는 ww에 +1을 하였으나
    //이번에는 계산 후 + 500*h을 하였음
    ww = Math.floor(w / 2);
    a = ww * h * 500;
    b = ww * ((h - 1) * 500 + 300 * 2) + 500 * h;
  }

  return a + b;
}

function solution(w, h) {
  return w < h
    ? calcSidewalkInstallPrice(w, h)
    : calcSidewalkInstallPrice(h, w);
}

const ONE_SIDEWALK_PRICE = 500;
const HALF_SIDEWALK_PRICE = 300;

function calcSidewalkInstallPrice(short, long) {
  const halfSidewalkCount = Math.floor(short / 2) * 2;

  return (
    short * long * ONE_SIDEWALK_PRICE +
    (halfSidewalkCount / 2) * (2 * HALF_SIDEWALK_PRICE - ONE_SIDEWALK_PRICE)
  );
}

solution;
