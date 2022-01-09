import { GridSettings } from "./gridSettings";
import { MinesweeperTile } from "./tile";
import { Position } from "./position";

import { makeEmptyArray } from "../../utils/makeEmptyArray";
import { notUndefined } from "../../utils/notUndefined";

const seedrandom = require("seedrandom");

export class MinesweeperGrid {
  rows: MinesweeperTile[][];
  size: GridSettings;

  constructor(rows: MinesweeperTile[][], size: GridSettings) {
    this.rows = rows;
    this.size = size;
  }

  static make(settings: GridSettings, seed?: number): MinesweeperGrid {
    const grid = MinesweeperGrid.init(settings);
    return grid.mine(seed).applyNumbering();
  }

  static init(settings: GridSettings): MinesweeperGrid {
    const rows = makeEmptyArray(settings.rows).map((_, row) =>
      makeEmptyArray(settings.cols).map((_, col) => MinesweeperTile.makeTile(new Position(row + 1, col + 1))));
    return new MinesweeperGrid(rows, settings);
  }

  generateMinePositions(
    seed?: number
  ): Position[] {
    const prng = new seedrandom(seed);
    const positions: Position[] = [];

    for (let i = 0; i < this.size.mines; i++) {
      positions.push(Position.makeRandomUnique(this.size, positions, prng));
    }

    return positions;
  }

  mine(seed?: number): MinesweeperGrid {
    const positions = this.generateMinePositions(seed);
    return this.minePositions(positions);
  }

  minePosition(p: Position): MinesweeperGrid {
    const minedRows: MinesweeperTile[][] = this.rows.map((row) => row.map(tile => {
      if (tile.position.equals(p))
        return tile.mine();
      else return tile.copy();
    }));

    return new MinesweeperGrid(minedRows, this.size);
  }

  minePositions(positions: Position[]): MinesweeperGrid {
    const minedRows: MinesweeperTile[][] = this.rows.map((row) => row.map(tile => {
      if (positions.some(p => p.equals(tile.position)))
        return tile.mine();
      else return tile.copy();
    }));

    return new MinesweeperGrid(minedRows, this.size);
  }

  countNeighboringMines(p: Position): number {
    const neighbors = this.getNeighbors(p);
    const minedNeighbors = neighbors.filter(n => n.flags.mined);
    return minedNeighbors.reduce((count, neighbor) => {
      if (neighbor.flags.mined)
        return count + 1
      else return count;
    }, 0);
  }

  applyNumbering(): MinesweeperGrid {
    const numberedRows = this.rows.map((row) => row.map(tile => {
      if (tile.flags.mined)
        return tile.copy();
      else
        return tile.applyNumber(this.countNeighboringMines(tile.position));
    }));

    return new MinesweeperGrid(numberedRows, this.size);
  }

  getTile(p: Position): MinesweeperTile | undefined {
    if (
      p.row > this.size.rows ||
      p.col > this.size.cols ||
      p.row < 1 ||
      p.col < 1
    )
      return undefined;
    else return this.rows[p.row - 1][p.col - 1].copy();
  }

  getCols(): MinesweeperTile[][] {
    //returns a rotation of this.rows
    return makeEmptyArray(this.size.cols).map((_, col) => this.rows.map(row => row[col]));
  }

  getNeighbors(p: Position): MinesweeperTile[] {
    const neighbors = p.getNeighboringPositions().map(n => this.getTile(n));
    return neighbors.filter(notUndefined);
  }

  copy(): MinesweeperGrid {
    const rows = this.rows.map((row) => row.map(tile => tile.copy()));
    return new MinesweeperGrid(rows, this.size);
  }

  reveal(p: Position): MinesweeperGrid {
    const revealedRows = this.rows.map((row) => row.map(tile => {
      if (tile.position.equals(p))
        return tile.reveal();
      else return tile.copy();
    }));

    return new MinesweeperGrid(revealedRows, this.size);
  }

  toggleFlag(p: Position): MinesweeperGrid {
    const flaggedRows = this.rows.map((row) => row.map(tile => {
      if (tile.position.equals(p))
        return tile.toggleFlag();
      else return tile.copy();
    }));

    return new MinesweeperGrid(flaggedRows, this.size);
  }

  revealAll(): MinesweeperGrid {
    const revealedRows = this.rows.map((row) => row.map(tile => tile.reveal()));
    return new MinesweeperGrid(revealedRows, this.size);
  }
}
