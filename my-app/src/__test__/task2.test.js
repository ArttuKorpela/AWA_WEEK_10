import { render, screen, mount } from "@testing-library/react";
import MyContainer from "../components/MyContainer";
import MyList from "../components/MyList";
import App from "../App";

jest.mock("../components/MyContainer.js", () => () => <div data-testid="mc" />);
test("Right components created", () => {
  expect(MyContainer).toBeDefined();
  expect(MyList).toBeDefined();
});

test("App.js has Week.js component", () => {
  let { getByTestId } = render(<App />);
  expect(getByTestId(/mc/)).toBeInTheDocument();
});
