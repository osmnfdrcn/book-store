import userEvent from "@testing-library/user-event";
import { render, screen } from "@/utils/test-utils/render";
import Counter from "./index";

const book = {
  id: 1,
  title: "Book 1",
  image: "book1.jpg",
  slug: "book-1",
  price: 10,
  stock: 3,
};

describe("Counter", () => {
  test("should increase or decrease quantity when corresponding button's clicked", async () => {
    const user = userEvent.setup();

    render(<Counter book={book as any} />);
    const buttons = screen.getAllByRole("button"); //first button is "-", seecond button is "+"

    //first increease
    await user.click(buttons[1]);
    expect(screen.getByText("2")).toBeInTheDocument();

    //then decreease
    await user.click(buttons[0]);
    expect(screen.getByText("1")).toBeInTheDocument();
  });

  test("decrease button should be disabled  when cart quantity is equal to 1", async () => {
    const user = userEvent.setup();

    render(<Counter book={book as any} />);

    const buttons = screen.getAllByRole("button"); //first button is "-"
    const decreaseBtn = buttons[0];

    expect(decreaseBtn).toBeDisabled();
  });

  test("increase button should be disabled  when cart quantity is equal to stock number", async () => {
    const user = userEvent.setup();

    render(<Counter book={book as any} />);

    const buttons = screen.getAllByRole("button"); //first button is "-"
    const increaseBtn = buttons[1];

    await user.click(increaseBtn); // cart quantity  became 2
    await user.click(increaseBtn); //  cart quantity  became 3 which is stock number

    expect(increaseBtn).toBeDisabled();
  });
});
