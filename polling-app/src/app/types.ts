// types.ts
export interface Option {
  id: string;
  text: string;
  votes: number;
}

export interface Poll {
  id: string;
  question: string;
  options: Option[]; // This should be Option[] if each poll has options as objects
}
