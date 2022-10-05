/**
 * Class provides a way to build a gallery wall
 */
export class GalleryBuilder {
  readonly options: GalleryBuilderOptions;
  protected wallHeight: number; // in cells
  protected wall: (Cell | undefined)[][];
  protected largestUsedX = 0;

  get cellWidthInPx(): number {
    return this.options.photoWidthInPx / 3;
  }

  get photoGapHalfInPx(): number {
    return this.options.photoGapInPx / 2;
  }

  constructor(options?: Partial<GalleryBuilderOptions>) {
    this.options = {
      wallHeightInPhotos: 5,
      photoWidthInPx: 100,
      photoGapInPx: 10,
      useSmoothStart: false,
      ...options,
    };

    this.wallHeight = this.options.wallHeightInPhotos * 2;
    this.wall = new Array(this.wallHeight).fill(0).map(() => []);

    if (this.options.useSmoothStart) {
      // Need to occupy all initial cells on the left in the shape of the "<"
      const halfHeight = Math.floor(this.wallHeight / 2);
      for (let y = 0; y < this.wallHeight; y++) {
        const limit = Math.floor(Math.abs(y - halfHeight) * 1.3);
        for (let x = 0; x < limit; x++) {
          this.getCell(x, y).isOccupied = true;
          this.markAsNoSpace(x, y);
        }
      }
    }
  }

  addPhotoToWall(photo: Photo): PhotoOnWall {
    let x = Math.max(0, this.largestUsedX - this.wallHeight); // optimize starting point
    let result: PhotoOnWall | undefined;

    do {
      // Choose Y-moving direction
      let y = Math.floor(this.wallHeight / 2);
      const direction = Math.random() > 0.5 ? 1 : -1;

      // Try to put photo on the wall
      while (y >= 0 && y < this.wallHeight && !result) {
        // Try to put photo to that cell
        result = this.tryToPutPhoto(photo, x, y);

        if (result) {
          break;
        } else {
          y += direction;
        }
      }

      if (result) {
        break;
      }

      x++;
    } while (x < this.largestUsedX + 100);

    if (!result) {
      throw new Error('GalleryBuilder.CANT_ADD_PHOTO_TO_WALL');
    }

    return result;
  }

  protected tryToPutPhoto(photo: Photo, toX: number, toY: number): PhotoOnWall | undefined {
    // Check Y top bounds
    if (toY === 0) {
      this.markAsNoSpace(toX, toY);
    }

    // Check Y bottom bounds
    if (photo.orientation === 'portrait' && toY === this.wallHeight - 1) {
      this.markAsNoSpace(toX, toY, photo.orientation);
    }

    // Check if cell already marked as "there's no space for landscape/portrait photo"
    if (photo.orientation === 'landscape' && this.getCell(toX, toY).noLSpace) {
      return undefined;
    }
    if (photo.orientation === 'portrait' && this.getCell(toX, toY).noPSpace) {
      return undefined;
    }

    // Fill coords for photo
    let cellCoords: Coord[];
    if (photo.orientation === 'landscape') {
      cellCoords = [
        {x: toX, y: toY - 1}, // first coord should be top left one
        {x: toX + 1, y: toY - 1},
        {x: toX + 2, y: toY - 1},
        {x: toX, y: toY},
        {x: toX + 1, y: toY},
        {x: toX + 2, y: toY},
      ];
    } else {
      cellCoords = [
        {x: toX, y: toY - 1}, // first coord should be top left one
        {x: toX, y: toY},
        {x: toX, y: toY + 1},
        {x: toX + 1, y: toY - 1},
        {x: toX + 1, y: toY},
        {x: toX + 1, y: toY + 1},
      ];
    }

    // Check if there's a free space for photo
    const isOccupied = cellCoords.find(coord => this.getCell(coord.x, coord.y).isOccupied);
    if (isOccupied) {
      this.markAsNoSpace(toX, toY, photo.orientation);
      return undefined;
    }

    // Space found. Update cell status as occupied
    cellCoords.forEach(coord => {
      this.markAsNoSpace(coord.x, coord.y);
      this.getCell(coord.x, coord.y).isOccupied = true;
    });

    // Save largest used X
    this.largestUsedX = Math.max(cellCoords[0].x, this.largestUsedX);

    // Calc photo params for rendering
    return this.convertToPhotoOnWall(photo, cellCoords[0]);
  }

  protected markAsNoSpace(x: number, y: number, orientation?: 'landscape' | 'portrait') {
    if (orientation !== 'landscape') {
      this.getCell(x, y).noPSpace = true;
    }

    if (orientation !== 'portrait') {
      this.getCell(x, y).noLSpace = true;
    }
  }

  protected getCell(x: number, y: number): Cell {
    // Check if cell exists
    if (!this.wall[y][x]) {
      this.wall[y][x] = {noLSpace: false, noPSpace: false, isOccupied: false};
    }

    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    return this.wall[y][x]!;
  }

  protected convertToPhotoOnWall(photo: Photo, cellCoords: Coord): PhotoOnWall {
    return {
      ...photo,
      x: Math.floor(cellCoords.x * this.cellWidthInPx + this.photoGapHalfInPx),
      y: Math.floor(cellCoords.y * this.cellWidthInPx + this.photoGapHalfInPx),
      width: Math.floor((photo.orientation === 'landscape' ? 3 : 2) * this.cellWidthInPx - 2 * this.photoGapHalfInPx),
      height: Math.floor((photo.orientation === 'landscape' ? 2 : 3) * this.cellWidthInPx - 2 * this.photoGapHalfInPx),
      random: Math.random(),
    };
  }
}

interface GalleryBuilderOptions {
  wallHeightInPhotos: number;
  photoWidthInPx: number;
  photoGapInPx: number;
  useSmoothStart: boolean;
}

interface Cell {
  noLSpace: boolean;
  noPSpace: boolean;
  isOccupied: boolean;
}

interface Coord {
  x: number;
  y: number;
}

export interface Photo {
  thumbUrl: string;
  url: string;
  orientation: 'landscape' | 'portrait';
}

export interface PhotoOnWall extends Photo {
  x: number;
  y: number;
  width: number;
  height: number;
  random: number;
}
