export interface EndgameState {
  one: {
    park: EndgameParkState;
    // 0 - 3
    drone: number;
  };
  two: {
    park: EndgameParkState;
    // 0 - 3
    drone: number;
  };
}

export interface PenaltiesState {
  major: number;
  minor: number;
}

export enum EndgameParkState {
  NONE,
  PARK,
  HANG,
}
