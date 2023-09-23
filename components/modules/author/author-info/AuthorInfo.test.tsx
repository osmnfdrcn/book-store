import { render, screen } from "@/utils/test-utils/render";
import AuthorInfo from ".";
import { author } from "@/utils/test-data";

describe("AuthorInfo", () => {
  test("should render the author's name", () => {
    render(<AuthorInfo author={author as any} />);
    const titleElement = screen.getByText(/cemil meric/i);
    expect(titleElement).toBeInTheDocument();
  });

  test("should render the author's image", () => {
    render(<AuthorInfo author={author as any} />);
    const imageElement = screen.getByAltText(/cemil meric/i);
    expect(imageElement).toBeInTheDocument();
  });

  test("should render the author's bio", () => {
    render(<AuthorInfo author={author as any} />);
    const bioElement = screen.getByText(/bio/i);
    expect(bioElement).toBeInTheDocument();
  });
});
