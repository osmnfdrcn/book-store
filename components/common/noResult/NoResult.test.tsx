import { render, screen } from "@/utils/test-utils/render";
import userEvent from "@testing-library/user-event";
import NoResult from ".";

const useRouter = jest.spyOn(require("next/navigation"), "useRouter");
jest.mock("next/navigation", () => ({
  useRouter: jest.fn(),
}));
const pushMock = jest.fn(() => console.log("redirected '/'"));
useRouter.mockReturnValue({
  push: pushMock,
});

describe("NoResult", () => {
  const title = "title";
  const buttonText = "buttonText";

  test("should render with custom title", () => {
    render(<NoResult title={title} buttonText={buttonText} />);
    expect(screen.getByText(title)).toBeInTheDocument();
  });

  test("should render a button elemnt and buttonText", () => {
    render(<NoResult title={title} buttonText={buttonText} />);
    const btn = screen.getByRole("button", { name: buttonText });
    expect(btn).toBeInTheDocument();
  });

  test("should trigger useRouter", async () => {
    const user = userEvent.setup();
    render(<NoResult title={title} buttonText={buttonText} />);
    const btn = screen.getByRole("button", { name: buttonText });
    await user.click(btn);
    expect(pushMock).toHaveBeenCalled();
  });
});
