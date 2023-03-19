export interface ICharacterResult {
  characters: {
    results: ICharacter[];
  };
}
export interface ICharacter {
  id: string;
  name: string;
  species: string;
  status: string;
  image: string;
}

export interface IGameFinished {
  shifts: number;
  hits: number;
}
export interface IMatchingCharacter extends ICharacter {
  positions: {
    first: number;
    second: number;
  };
  cardsMatched: boolean;
}
