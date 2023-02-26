import {
  Button,
  ButtonProps,
  Grid,
  GridProps,
  styled,
  Typography,
  TypographyProps,
} from "@mui/material";

export const DetailGrid = styled(Grid)<GridProps>(({ theme }) => ({
  justifyContent: "space-between",
  [theme.breakpoints.between("sm", "md")]: {
    maxWidth: "500px",
    margin: "0 auto",
  },
}));

export const CountryButton = styled(Button)<ButtonProps>(({ theme }) => ({
  boxShadow: theme.shadows[2],
  padding: "2px 18px",
  margin: "0 8px 8px 0",
  [theme.breakpoints.down("sm")]: {
    margin: "14px 9px 0px 0px",
  },
})) as typeof Button;

export const CountryName = styled(Typography)<TypographyProps>(
  ({ theme }) => ({
    fontWeight: 800,
    fontSize: theme.typography.h4.fontSize,
    [theme.breakpoints.down("sm")]: {
      fontSize: theme.typography.h5.fontSize,
    },
  })
) as typeof Typography;

export const CountryDetail = styled(Typography)<TypographyProps>(
  ({ theme }) => ({
    fontSize: theme.typography.body1.fontSize,
    marginBottom: 5,
    b: {
      fontWeight: 600
    },
    [theme.breakpoints.down("sm")]: {
      marginBottom: 10,
    },
  })
) as typeof Typography;
