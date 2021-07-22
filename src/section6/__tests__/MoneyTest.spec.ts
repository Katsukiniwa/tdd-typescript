import { Dollar } from "../Dollar";
import { Franc } from "../Franc";
import { Money } from "../Money";

describe("Moneyのテスト", () => {
  it("testMultiplication", () => {
    const five = Money.dollar(5);
    expect(new Dollar(10)).toEqual(five.times(2));
    expect(new Dollar(15)).toEqual(five.times(3));
  })
  it("testEquality", () => {
    expect(new Dollar(5).equals(new Dollar(5))).toBeTruthy();
    expect(new Dollar(5).equals(new Dollar(6))).toBeFalsy();
    expect(new Franc(5).equals(new Franc(5))).toBeTruthy();
    expect(new Franc(5).equals(new Franc(6))).toBeFalsy();
    expect(new Franc(5).equals(new Dollar(5))).toBeFalsy();
  })
  it("testFrancMultiplication", () => {
    const five = new Franc(5);
    expect(new Franc(10)).toStrictEqual(five.times(2));
    expect(new Franc(15)).toStrictEqual(five.times(3));
  })
})
