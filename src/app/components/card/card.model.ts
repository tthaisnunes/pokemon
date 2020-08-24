import { AttackDetails } from '../attack-details/attack-details.model';

export interface Card {
  id: string;
  name: string;
  imageUrl: string;
  types: string[];
  nationalPokedexNumber: number;
  imageUrlHiRes: string;
  supertype: string;
  subtype: string;
  evolvesFrom: string;
  hp: number;
  number: number;
  artist: string;
  rarity: string;
  series: string;
  set: string;
  setCode: string;
  attacks: AttackDetails[],
  weaknesses: [{
    type: string;
    value: string;
  }];
  resistances: [{
    type: string;
    value: string;
  }];
};