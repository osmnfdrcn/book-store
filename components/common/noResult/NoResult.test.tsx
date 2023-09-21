import { render, screen } from "@testing-library/react";
import NoResult from ".";

describe("NoResult", () => {
  it("should render with custom title and buttonText", () => {
    const title = "title";
    const buttonText = "buttonText";

    render(<NoResult title={title} buttonText={buttonText} />);
    expect(screen.getByText(title)).toBeInTheDocument();
    expect(screen.getByText(buttonText)).toBeInTheDocument();
  });
});
