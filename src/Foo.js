import React from "react";

export default function Foo({ bar, ...restProps }) {
  return (
    <div>
      Foo: {props.bar}, Rest Props Size: {Object.keys.restProps.length}
    </div>
  );
}
