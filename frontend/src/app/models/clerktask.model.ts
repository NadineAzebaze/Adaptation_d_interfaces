
export default class ClerkTask {

    constructor(
      public name: string,
  public qte: number,
  public recipe: string,
  public state: "pending"|"began") {}
}

