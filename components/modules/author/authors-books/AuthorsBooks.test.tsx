import { render, screen } from "@/utils/test-utils/render";
import { books } from "@/utils/test-data";
import AuthorsBooks from ".";

describe("AuthorsBooks", () => {
  test("should render an Image component for each book", () => {
    render(<AuthorsBooks books={books as any} />);
    const imageComponents = screen.getAllByRole("img");
    expect(imageComponents).toHaveLength(books.length);
  });

  test("should render a Link component for each book", () => {
    render(<AuthorsBooks books={books as any} />);
    const linkComponents = screen.getAllByRole("link");
    expect(linkComponents).toHaveLength(books.length);
  });
});
