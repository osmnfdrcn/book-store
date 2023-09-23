import { render } from "@/utils/test-utils/render";
import Spinner from ".";

describe("Spinner", () => {
  it("should display the spinner animation", () => {
    const { container } = render(<Spinner />);
    expect(container.querySelector(".book-shelf")).toBeInTheDocument();
  });
});
