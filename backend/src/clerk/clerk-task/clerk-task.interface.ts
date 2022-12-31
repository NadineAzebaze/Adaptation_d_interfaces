export interface ClerkTask {
  name: string;
  qte: number;
  recipe: string;
  state: "pending"|"began"
}
