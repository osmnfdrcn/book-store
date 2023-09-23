import { render, screen } from "@/utils/test-utils/render";
import Wrapper from ".";

describe("Wrapper", () => {
  test("should render children", () => {
    const children = <div>Test Children</div>;
    render(<Wrapper>{children}</Wrapper>);
    expect(screen.getByText(/test children/i)).toBeInTheDocument();
  });
});
