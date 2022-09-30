export type GridSettings = {
  rows: number;
  cols: number;
  mines: number;
};

export function validateGridSettings(size: GridSettings): boolean {
  const numCells = size.rows * size.cols;

  return size.mines < numCells;
}
