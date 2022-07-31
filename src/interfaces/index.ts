export interface PeopleData {
  id: string;
  name: string;
  default: string;
  pictures: Array<string>;
  characters: Array<{
    name: string;
    default: string;
    pictures: Array<string>;
    favorites: number;
  }>;
}
