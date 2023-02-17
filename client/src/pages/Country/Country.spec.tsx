import { render, screen } from "@test/test-utils";
import { MemoryRouter } from "react-router-dom";
import Country from "./Country";
import * as services from "../../services/country.service";

jest.mock("react-router-dom", () => ({
  ...(jest.requireActual("react-router-dom") as any),
  useNavigate: () => jest.fn(),
  useParams: () => ({
    code: "som",
  }),
}));

describe("Country Component", () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("When I load view and it have an error response, then it should show an error message", async () => {
    const mockGetCountry = jest
      .spyOn(services, "getCountry")
      .mockRejectedValue({ error: "Async error message" });
    render(
      <MemoryRouter initialEntries={["/"]}>
        <Country />
      </MemoryRouter>
    );

    expect(mockGetCountry).toHaveBeenCalled();
    expect(await screen.findByText("Hubo un error")).toBeInTheDocument();
  });

  it("When I mockGetCountry country detail view, then it should display data correctly", async () => {
    const mockGetCountry = jest
      .spyOn(services, "getCountry")
      .mockResolvedValue([
        {
          name: {
            common: "Somalia",
          },
          borders: ["DJI", "ETH", "KEN"],
          flags: {
            svg: "",
          },
          population: 15893219,
          region: "Africa",
          subregion: "Eastern Africa",
          independent: true,
          capital: ["Mogadishu"],
          cca3: "SOM",
          languages: {
            ara: "Arabic",
            som: "Somali",
          }
        },
      ]);
    render(
      <MemoryRouter initialEntries={["/"]}>
        <Country />
      </MemoryRouter>
    );

    expect(mockGetCountry).toHaveBeenCalled();
    expect(await screen.findByText("Somalia")).toBeInTheDocument();
    expect(await screen.findByText("15,893,219")).toBeInTheDocument();
    expect(await screen.findByText("Africa")).toBeInTheDocument();
    expect(await screen.findByText("Eastern Africa")).toBeInTheDocument();
    expect(await screen.findByText("Mogadishu")).toBeInTheDocument();
  });
});
