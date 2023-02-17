import { render, screen } from "@test/test-utils";
import Home from "./Home";
import * as services from "../../services/country.service";

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
      .mockResolvedValue([
        {
          name: {
            common: "Iceland",
          },
          flags: {
            svg: "",
          },
          population: 366425,
          region: "Europe",
          capital: ["Reykjavik"],
        },
      ]);
    render(<Home />);

    expect(mockGetCountries).toHaveBeenCalled();
    expect(await screen.findByText("Iceland")).toBeInTheDocument();
    expect(await screen.findByText("366,425")).toBeInTheDocument();
    expect(await screen.findByText("Europe")).toBeInTheDocument();
    expect(await screen.findByText("Reykjavik")).toBeInTheDocument();
  });
});
