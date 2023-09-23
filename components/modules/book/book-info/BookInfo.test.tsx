import { render, screen } from "@/utils/test-utils/render";
import BookInfo from "./index";
const book = {
  title: "Bu Ulke",
  author: {
    name: "Cemil Meric",
  },
  publisher: {
    name: "iletisim",
  },
  genre: {
    name: "sosyoloji",
  },
  price: 100,
  stock: 5,
  description: "bu-ulke",
  image: "/book-image-url",
};

describe("BookInfo", () => {
  it("should render book information correctly", () => {
    render(<BookInfo book={book as any}>Children</BookInfo>);

    expect(screen.getByText(/Bu Ulke/i)).toBeInTheDocument();
    expect(screen.getByText(/cemil meric/i)).toBeInTheDocument();
    expect(screen.getByText(/iletisim/i)).toBeInTheDocument();
    expect(screen.getByText(/sosyoloji/i)).toBeInTheDocument();
    expect(screen.getByText(/100TL/i)).toBeInTheDocument();
    expect(screen.getByText(/Stok adedi : 5/i)).toBeInTheDocument();
    expect(screen.getByText(/bu-ulke/i)).toBeInTheDocument();
    expect(screen.getByAltText(/Bu Ulke/i)).toBeInTheDocument();
  });
});
