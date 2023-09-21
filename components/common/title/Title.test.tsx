import { render, screen } from "@testing-library/react";
import Title from ".";

describe("Title", () => {
  // Renders a div with a p tag containing the text passed as a prop
  it("should render a div with a p tag containing the specified text", () => {
    const props = {
      text: "Hakkimizda",
    };
    render(<Title {...props} />);

    const div = screen.getByTestId("title-wrapper");
    expect(div).toBeInTheDocument();

    const pTag = screen.getByText(props.text);
    expect(pTag).toBeInTheDocument();
    expect(pTag).toHaveClass("text-lg text-slate-500 font-extralight");
  });
});
