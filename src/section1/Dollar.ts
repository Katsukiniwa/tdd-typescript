/**
 * @name Dollar
 */
export class Dollar {
  amount;
  
  constructor(amount: number) {
    this.amount = amount;
  }

  public times(multiplier: number): void {
    this.amount *= multiplier;
  }
}
