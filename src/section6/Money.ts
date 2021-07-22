import { Dollar } from "../section1/Dollar";

export class Money {
  protected amount!: number;
  
  public equals(that: Money): boolean {
    return this.amount === that.amount && this.constructor.name === that.constructor.name;
  }
  static dollar(amount: number): Dollar {
    return new Dollar(amount);
  }
}
