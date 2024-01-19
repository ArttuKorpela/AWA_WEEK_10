import { render } from "@testing-library/react";
import App from "../App";
import { React } from "react";

test("React is imported", () => {
  expect(React);
});

test("renders 'hello world'", () => {
  let { getByText } = render(<App />);
  const helloText = getByText(/.*Hello World.*/i);
  expect(helloText).toBeInTheDocument();
});
