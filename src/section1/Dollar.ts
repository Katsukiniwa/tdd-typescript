/**
 * @name Dollar
 * @description 多国通貨を表すクラス
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
