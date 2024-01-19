import { render, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import MyContainer from "../components/MyContainer";

//This mock here is just to make sure that the MyList contains just the list, not the textarea nor the button.
jest.mock("../components/MyList", () => {
  return {
    __esModule: true,
    default: ({ items, header }) => {
      return (
        <div>
          <h1>{header}</h1>
          <ul data-testid="list">
            {items.map((item) => (
              <li key={item.id}> {item.text}</li>
            ))}
          </ul>
        </div>
      );
    },
  };
});

test("MyContainer updates the item list", async () => {
  const { getByRole, getByText } = render(<MyContainer />);
  const text = "Some random text to write";
  userEvent.type(getByRole("textbox"), text);
  userEvent.click(getByRole("button"));
  userEvent.clear(getByRole("textbox"));

  //wrapping the test for timeout, because it might take long to set the right
  //style and re-render it.
  await waitFor(
    () => {
      expect(getByText(text).tagName).toBe("LI");
    },
    { timeout: 6000 }
  );
});
