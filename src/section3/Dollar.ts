/**
 * @name Dollar
 */
export class Dollar {
  amount;
  
  constructor(amount: number) {
    this.amount = amount;
  }

  public times(multiplier: number): Dollar {
    return new Dollar(this.amount * multiplier);
  }

  public equals(object: Dollar): boolean {
    return this.amount === object.amount;
  }
}
