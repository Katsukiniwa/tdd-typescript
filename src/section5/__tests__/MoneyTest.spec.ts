import { Dollar } from "../Dollar";
import { Franc } from "../Franc";

describe("Moneyのテスト", () => {
  it("testMultiplication", () => {
    const five = new Dollar(5);
    // amountフィールドの露出が消えた
    expect(new Dollar(10)).toStrictEqual(five.times(2));
    expect(new Dollar(15)).toStrictEqual(five.times(3));
  })
  it("testEquality", () => {
    expect(new Dollar(5).equals(new Dollar(5))).toBeTruthy();
    expect(new Dollar(5).equals(new Dollar(6))).toBeFalsy();
  })
  it("testFrancMultiplication", () => {
    const five = new Franc(5);
    expect(new Franc(10)).toStrictEqual(five.times(2));
    expect(new Franc(15)).toStrictEqual(five.times(3));
  })
})
