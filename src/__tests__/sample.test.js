import Foo from "../Foo.js";
import { render } from "@testing-library/react";
import React from "react";

describe("Sample Test", () => {
  test("some passing test", () => {
    expect(1 + 1).toBe(2);
  });

  test("Foo", () => {
    let {queryByText} = render(<Foo bar="BAR" someProp={123} />);

    expect(queryByText("Foo: BAR, Rest Props Size: 1")).toBeTruthy;
  });
});
