

function rectangleIntersection(a, b) {
  const leftX = Math.max(a.leftX, b.leftX);
  const bottomY = Math.max(a.bottomY, b.bottomY);
  const aTop = a.bottomY + a.height;
  const bTop = b.bottomY + b.height;
  const height = Math.min(aTop, bTop) - bottomY;
  const aRight = a.leftX + a.width;
  const bRight = b.leftX + b.width;
  const width = Math.min(aRight, bRight) - leftX;
  if (height <= 0 || width <= 0) return 'No intersection ... womp womp';

  return {
    leftX,
    bottomY,
    width,
    height,
  };
}

const aRec = {
  leftX: 1,
  bottomY: 5,
  width: 10,
  height: 4,
};

const bRec = {
  leftX: 8,
  bottomY: 6,
  width: 2,
  height: 1,
};

console.log(rectangleIntersection(aRec, bRec));
