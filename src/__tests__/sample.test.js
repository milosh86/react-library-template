import Foo from "../Foo.js";
import React from 'react';

describe("Sample Test", () => {
  test("some passing test", () => {
    expect(1 + 1).toBe(2);
  });

  test('Foo', () => {
    let c = <Foo />

    expect(c).toBeTruthy()
  })
});
