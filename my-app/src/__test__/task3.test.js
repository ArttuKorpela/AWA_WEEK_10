import { render } from "@testing-library/react";
import MyList from "../components/MyList";

test("List takes props", () => {
  let items = [
    { id: "1", text: "item 1" },
    { id: "2", text: "item 2" },
  ];
  let props = { header: "Jou", items: items };
  let { getByText } = render(<MyList {...props} />);
  expect(getByText(/jou/i)).toBeInTheDocument();
  expect(getByText(/item 1/i)).toBeInTheDocument();
  expect(getByText(/item 2/i)).toBeInTheDocument();
});
