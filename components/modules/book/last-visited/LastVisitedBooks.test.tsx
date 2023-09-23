import { render, screen } from "@/utils/test-utils/render";
import LastVisitedBooks from "./index";

const mockLastVisited = [
  {
    id: "1",
    title: "book-1",
    image: "/book1.jpg",
    slug: "book-1",
  },
  {
    id: "2",
    title: "book-2",
    image: "/book2.jpg",
    slug: "book-2",
  },
];

jest.mock("./useLastVisited", () => ({
  __esModule: true,
  default: jest.fn(() => ({
    lastVisited: mockLastVisited,
  })),
}));

describe("LastVisitedBooks", () => {
  test("should render the items in lastVisited array", () => {
    render(
      <LastVisitedBooks id="4" title="Book 4" image="book4.jpg" slug="book-4" />
    );

    expect(screen.getByTestId("title-wrapper")).toHaveTextContent(
      "SON ZIYARET EDILENLER"
    );
    const visitedBooks = screen.getAllByRole("img");
    expect(visitedBooks).toHaveLength(2);
  });
});
