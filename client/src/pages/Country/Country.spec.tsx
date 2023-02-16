import { render, screen } from "@test/test-utils";
import { MemoryRouter } from "react-router-dom";
import Country from "./Country";

jest.mock("react-router-dom", () => ({
  ...(jest.requireActual("react-router-dom") as any),
  useNavigate: () => jest.fn(),
  useLocation: () => ({
    state: {
      country: {
        name: {
          common: "Iceland",
        },
        flags: {
          svg: "",
        },
        population: 366425,
        region: "Europe",
        subregion: "Northern Europe",
        independent: true,
        capital: ["Reykjavik"],
        languages: { isl: "Icelandic" },
      },
    },
  }),
}));

describe("Country Component", () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("When I load country detail view, then it should display data correctly", async () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <Country />
      </MemoryRouter>
    );

    expect(await screen.findByText("Iceland")).toBeInTheDocument();
    expect(await screen.findByText("366,425")).toBeInTheDocument();
    expect(await screen.findByText("Europe")).toBeInTheDocument();
    expect(await screen.findByText("Northern Europe")).toBeInTheDocument();
    expect(await screen.findByText("Reykjavik")).toBeInTheDocument();
  });
});
