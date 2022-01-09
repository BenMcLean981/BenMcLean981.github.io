import { GridSettings } from "./gridSettings";


export class Position {
  row: number;
  col: number;

  constructor(row: number, col: number) {
    this.row = row;
    this.col = col;
  }

  equals(other: Position): boolean {
    return this.row === other.row && this.col === other.col;
  }

  static makeRandom(size: GridSettings, prng: any): Position {
    return new Position(
      Math.ceil(prng() * size.rows),
      Math.ceil(prng() * size.cols),
    )
  }

  static makeRandomUnique(size: GridSettings, usedPositions: Position[], prng: any): Position {
    const randPos = Position.makeRandom(size, prng);
    const valid = usedPositions.every((p) => !p.equals(randPos));
    if (valid) return randPos;
    // if unique, return
    // otherwise try again recursively
    else return Position.makeRandomUnique(size, usedPositions, prng);
  }

  getNeighboringPositions(): Position[] {
    //generates the 8 neighbors around p
    const neighbors: Position[] = [
      new Position(this.row - 1, this.col - 1),
      new Position(this.row - 1, this.col),
      new Position(this.row - 1, this.col + 1),
      new Position(this.row, this.col - 1),
      new Position(this.row, this.col + 1),
      new Position(this.row + 1, this.col - 1),
      new Position(this.row + 1, this.col),
      new Position(this.row + 1, this.col + 1),
    ];

    return neighbors;
  }

  copy(): Position {
    return new Position(this.row, this.col);
  }
}
