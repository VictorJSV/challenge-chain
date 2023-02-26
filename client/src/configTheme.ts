import { Shadows, PaletteMode, ThemeOptions } from "@mui/material";

export interface ICustomTheme {
  palette: {
    background: {
      default: string;
      paper: string;
      primary: string;
      secondary: string;
    };
  };
}

export const getConfigTheme = (mode: PaletteMode): ThemeOptions => {
  const colors =
    mode === "light"
      ? {
          background: {
            paper: "hsl(0, 0%, 100%)",
            default: "hsl(0, 0%, 100%)",
            primary: "hsl(0, 0%, 98%)",
            secondary: "hsl(0, 0%, 100%)",
          },
          text: {
            primary: "hsl(200, 15%, 8%)",
          },
        }
      : {
          background: {
            paper: "hsl(209, 23%, 22%)",
            default: "hsl(209, 23%, 22%)",
            primary: "hsl(207, 26%, 17%)",
            secondary: "hsl(207, 26%, 17%)",
          },
          text: {
            primary: "hsl(0, 0%, 100%)",
          },
        };

  return {
    palette: {
      mode,
      ...colors,
    },
    typography: {
      htmlFontSize: 18,
      fontFamily: ["'Nunito Sans'", "sans-serif"].join(","),
    },
    shadows: [
      "none",
      "0px 0px 10px rgb(0 0 0 / 8%)",
      `0px 0px 6px ${
        mode === "dark" ? "rgb(22 22 22 / 29%)" : "rgb(186 186 186)"
      }`,
      ...Array(22).fill("none"),
    ] as Shadows,
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            textTransform: "capitalize",
            color: colors.text.primary,
            backgroundColor: colors.background.default,
          },
        },
      },
      MuiCard: {
        styleOverrides: {
          root: {
            backgroundImage: "none",
          },
        },
      },
      MuiAppBar: {
        styleOverrides: {
          root: {
            backgroundImage: "none",
          },
        },
      },
      MuiPopover: {
        styleOverrides: {
          paper: {
            backgroundImage: "none",
          },
        },
      },
    },
  };
};
