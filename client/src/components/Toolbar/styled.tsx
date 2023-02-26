import { styled, Typography, TypographyProps } from "@mui/material";

export const TitleTypography = styled(Typography)<TypographyProps>(
  ({ theme }) => ({
    fontWeight: 800,
    fontSize: theme.typography.h5.fontSize,
    [theme.breakpoints.down("sm")]: {
      fontSize: theme.typography.body1.fontSize,
    },
  })
) as typeof Typography;
