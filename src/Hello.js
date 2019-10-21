// @flow
import React from "react";

type MyType = {
  name: string
};

export default class Hello extends React.Component {
  state = { myState: 123 };
  render() {

    var my: MyType = { name: "Milos" };
    const [a, ...b] = [1, 2, 3, 4, 5, 6];
    const {o1, ...o2} = {o1: 123, a: 3, b: 4};
    return (
      <p>
        <b>Hello there...</b> + {a} + {b.length} {my.name} {this.state.myState} {o1}
      </p>
    );
  }
}
