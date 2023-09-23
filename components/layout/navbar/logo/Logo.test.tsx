import { render, screen } from "@/utils/test-utils/render";
import Logo from ".";

describe("Logo", () => {
  test("should render an image component", () => {
    render(<Logo />);
    const image = screen.getByAltText("logo");
    expect(image).toBeInTheDocument();
  });

  test("should render a link component pointing home page", () => {
    render(<Logo />);
    const link = screen.getByRole("link");
    expect(link).toHaveAttribute("href", expect.stringContaining("/"));
  });
});
