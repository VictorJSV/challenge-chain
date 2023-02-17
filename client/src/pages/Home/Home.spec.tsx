import { fireEvent, render, screen } from "@test/test-utils";
import Home from "./Home";
import * as services from "../../services/country.service";
import { countryStateMock } from "@test/mocks/countryMock";
import userEvent from "@testing-library/user-event";

jest.mock("react-router-dom", () => ({
  ...(jest.requireActual("react-router-dom") as any),
  useNavigate: () => jest.fn(),
}));

describe("Home Component", () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("When I load view and it have an error response, then it should show an error message", async () => {
    const mockGetCountries = jest
      .spyOn(services, "getCountries")
      .mockRejectedValue({ error: "Async error message" });
    render(<Home />);

    expect(mockGetCountries).toHaveBeenCalled();
    expect(await screen.findByText("Hubo un error")).toBeInTheDocument();
  });

  it("When I load home view, then it should display data correctly", async () => {
    const mockGetCountries = jest
      .spyOn(services, "getCountries")
      .mockResolvedValue(countryStateMock.data);
    render(<Home />);

    expect(mockGetCountries).toHaveBeenCalled();
    expect(await screen.findAllByRole("listitem")).toHaveLength(2);
    expect(await screen.findByText("Iceland")).toBeInTheDocument();
    expect(await screen.findByText("366,425")).toBeInTheDocument();
    expect(await screen.findByText("Europe")).toBeInTheDocument();
    expect(await screen.findByText("Reykjavik")).toBeInTheDocument();
  });

  it("When I type in textbox filter, then it should display data correctly", async () => {
    jest
      .spyOn(services, "getCountries")
      .mockResolvedValue(countryStateMock.data);
    render(<Home />);

    fireEvent.input(await screen.findByRole("textbox"), {
      target: { value: "so" },
    });

    expect(await screen.findAllByRole("listitem")).toHaveLength(1);
    expect(await screen.findByText("Somalia")).toBeInTheDocument();
    expect(screen.queryByText("Iceland")).not.toBeInTheDocument();
  });

  it("When I select an option in region filter, then it should display data correctly", async () => {
    const user = userEvent.setup();
    jest
      .spyOn(services, "getCountries")
      .mockResolvedValue(countryStateMock.data);
    render(<Home />);

    await user.click(
      await screen.findByRole("button", { name: /Filter by Region/ })
    );
    await user.click(await screen.findByRole("option", { name: /Europe/ }));

    expect(await screen.findAllByRole("listitem")).toHaveLength(1);
    expect(await screen.findByText("Iceland")).toBeInTheDocument();
    expect(screen.queryByText("Somalia")).not.toBeInTheDocument();
  });

  it("When I select an Europe option in region filter and type another country, then it should display no results message", async () => {
    const user = userEvent.setup();
    jest
      .spyOn(services, "getCountries")
      .mockResolvedValue(countryStateMock.data);
    render(<Home />);

    await user.click(
      await screen.findByRole("button", { name: /Filter by Region/ })
    );
    await user.click(await screen.findByRole("option", { name: /Europe/ }));
    fireEvent.input(await screen.findByRole("textbox"), {
      target: { value: "so" },
    });

    expect(await screen.findByText("No results found")).toBeInTheDocument();
  });
});
