type Circles = {
  cols: number;
  rows: number;
  spacingX: number;
  spacingY: number;
  amount: number;
};

export function generateCircles({
  cols,
  rows,
  spacingX,
  spacingY,
  amount,
}: Circles) {
  const circles = [];

  for (let row = 0; row < rows || circles.length < amount; row++) {
    const colsInCurrentRow = row % 2 === 0 ? cols : cols - 1;
    const totalWidth = (colsInCurrentRow - 1) * spacingX;
    const rowStartX = -totalWidth / 2;
    const y = row * spacingY;

    for (let col = 0; col < colsInCurrentRow; col++) {
      const x = rowStartX + col * spacingX;
      circles.push({ x, y });
    }
  }

  if (circles.length === 0) return circles;

  let minX = circles[0].x;
  let maxX = circles[0].x;
  let minY = circles[0].y;
  let maxY = circles[0].y;

  for (const c of circles) {
    if (c.x < minX) minX = c.x;
    if (c.x > maxX) maxX = c.x;
    if (c.y < minY) minY = c.y;
    if (c.y > maxY) maxY = c.y;
  }

  const offsetX = -(minX + maxX) / 2;
  const offsetY = -(minY + maxY) / 2;

  return circles.map(({ x, y }) => ({ x: x + offsetX, y: y + offsetY }));
}
