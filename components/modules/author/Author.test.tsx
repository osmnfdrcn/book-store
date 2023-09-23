import { render, screen } from "@/utils/test-utils/render";
import Author from ".";
import { author } from "@/utils/test-data";

describe("Author", () => {
  it("should render the Author component with the correct props", () => {
    render(<Author author={author as any} />);

    expect(screen.getByText(author.name)).toBeInTheDocument();
    expect(screen.getByAltText(author.name)).toBeInTheDocument();
    expect(screen.getByText(author.bio)).toBeInTheDocument();
    expect(
      screen.getByText(/YAZARIN MAGAZAMIZDAKI KITAPLARI/i)
    ).toBeInTheDocument();
    expect(screen.getByAltText(author.books[0].title)).toBeInTheDocument();
    expect(screen.getByText(author.books[0].title)).toBeInTheDocument();
  });
});
