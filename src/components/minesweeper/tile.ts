import { Position } from "./position";

interface TileFlags {
  hidden: boolean;
  mined: boolean;
  clicked: boolean;
  flagged: boolean;
}

export class MinesweeperTile {
  position: Position;
  flags: TileFlags;
  nAdjMines?: number;

  constructor(position: Position, flags: TileFlags, number?: number) {
    this.position = position;
    this.flags = flags;
    this.nAdjMines = number;
  }

  static makeTile(p: Position): MinesweeperTile {
    const DEFAULT_FLAGS: TileFlags = {
      hidden: true,
      mined: false,
      flagged: false,
      clicked: false,
    };
    return new MinesweeperTile(p, DEFAULT_FLAGS);
  }

  copy(): MinesweeperTile {
    return new MinesweeperTile(
      this.position.copy(),
      { ...this.flags },
      this.nAdjMines
    );
  }

  reveal(): MinesweeperTile {
    const tile = this.copy();
    tile.flags.hidden = false;
    return tile;
  }

  click(): MinesweeperTile {
    const tile = this.copy();
    tile.flags.clicked = true;
    return tile;
  }

  mine(): MinesweeperTile {
    const tile = this.copy();
    tile.flags.mined = true;
    return tile;
  }

  toggleFlag(): MinesweeperTile {
    const tile = this.copy();
    tile.flags.flagged = !tile.flags.flagged;
    return tile;
  }

  applyNumber(n: number): MinesweeperTile {
    const tile = this.copy();
    if (tile.flags.mined === false) tile.nAdjMines = n;
    return tile;
  }
}

export interface TileProps {
  tile: MinesweeperTile;
  gameOver?: boolean;
  handleFlag?: (tile: MinesweeperTile) => void;
  handleReveal?: (tile: MinesweeperTile) => void;
}
