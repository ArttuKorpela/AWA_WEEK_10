import { render, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import MyContainer from "../components/MyContainer";

jest.setTimeout(10000);

test("conditional rendering", async () => {
  let { getAllByRole } = render(<MyContainer />);
  expect(getAllByRole("listitem")[0].style.textDecoration).toBe("");

  //Clicking the first item in the list
  userEvent.click(getAllByRole("listitem")[0]);

  //wrapping the test for timeout, because it might take long to set the right
  //style and re-render it.
  await waitFor(
    () => {
      expect(getAllByRole("listitem")[0].style.textDecoration).toBe(
        "line-through"
      );
    },
    { timeout: 6000 }
  );
});
