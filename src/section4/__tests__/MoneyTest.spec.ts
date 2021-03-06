import { Dollar } from "../Dollar";

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
})
