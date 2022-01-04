export type GridSize = {
  rows: number;
  cols: number;
  mines: number;
};

export function validateGridSize(size: GridSize): boolean {
  const numCells = size.rows * size.cols;

  return size.mines < numCells;
}
