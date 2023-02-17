import { render, screen } from "@test/test-utils";
import { MemoryRouter } from "react-router-dom";
import Country from "./Country";
import * as services from "../../services/country.service";
import { countryStateMock } from "@test/mocks/countryMock";

jest.mock("react-router-dom", () => ({
  ...(jest.requireActual("react-router-dom") as any),
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
      </MemoryRouter>,
      {
        preloadedState: {
          home: countryStateMock,
        },
      }
    );

    expect(mockGetCountry).toHaveBeenCalled();
    expect(await screen.findByText("Hubo un error")).toBeInTheDocument();
  });

  it("When I mockGetCountry country detail view, then it should display data correctly", async () => {
    const mockGetCountry = jest
      .spyOn(services, "getCountry")
      .mockResolvedValue([countryStateMock.data[0]]);
    render(
      <MemoryRouter initialEntries={["/"]}>
        <Country />
      </MemoryRouter>,
      {
        preloadedState: {
          home: countryStateMock,
        },
      }
    );

    expect(mockGetCountry).toHaveBeenCalled();
    expect(await screen.findByText("Somalia")).toBeInTheDocument();
    expect(await screen.findByText("15,893,219")).toBeInTheDocument();
    expect(await screen.findByText("Africa")).toBeInTheDocument();
    expect(await screen.findByText("Eastern Africa")).toBeInTheDocument();
    expect(await screen.findByText("Mogadishu")).toBeInTheDocument();
    expect(await screen.findByText("DJI")).toBeInTheDocument();
    expect(await screen.findByText("ETH")).toBeInTheDocument();
    expect(await screen.findByText("KEN")).toBeInTheDocument();
  });
});
