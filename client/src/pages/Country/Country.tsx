import { Button, Card, Grid, Typography, Link } from "@mui/material";
import Box from "@mui/material/Box";
import Skeleton from "@mui/material/Skeleton";
import Snackbar from "@mui/material/Snackbar";
import { RequestType } from "@src/const/request";
import { Country } from "@src/models";
import { useEffect } from "react";
import { FormattedNumber } from "react-intl";
import { Link as RouterLink, Navigate, useParams } from "react-router-dom";
import { useGetCountry } from "./hooks/useGetCountry";

const Country = () => {
  const { code } = useParams();
  const { doRequest, status, data, error } = useGetCountry();

  useEffect(() => {
    if (code) {
      doRequest(code);
    }
  }, [code]);

  if (!code) {
    return <Navigate to={"/"} replace />;
  }

  if (
    status === RequestType.Idle ||
    status === RequestType.Pending ||
    status === RequestType.Rejected
  ) {
    return (
      <>
        <Grid container spacing={2}>
          <Grid item>
            <Skeleton variant="rectangular" width={225} height={200} />
          </Grid>
          <Grid item sx={{ flexGrow: 1 }}>
            <Skeleton variant="rectangular" height={200} />
          </Grid>
        </Grid>
        {error && (
          <Snackbar
            open={true}
            autoHideDuration={6000}
            message="Hubo un error"
            anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
          />
        )}
      </>
    );
  }
  return data ? (
    <Grid container spacing={2}>
      <Grid item>
        <Card>
          <Box sx={{ textAlign: "center" }}>
            <img
              src={data.source.flags.svg}
              alt={data.source.name.common}
              height={150}
            />
          </Box>
          {data.borderCountries?.length && (
            <Box p={2}>
              <Typography variant="body1">
                <b>Border Countries:</b>
              </Typography>
              <ul>
                {data.borderCountries.map((x, i) => (
                  <li key={i}>
                    <Link
                      component={RouterLink}
                      underline="hover"
                      to={"/country/" + x.code.toLowerCase()}
                    >
                      {x.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </Box>
          )}
        </Card>
      </Grid>
      <Grid item sx={{ flexGrow: 1 }}>
        <Card sx={{ p: 2 }}>
          <Typography component="h3" variant="h6" gutterBottom>
            {data.source.name.common}
          </Typography>
          <Typography variant="body1">
            <b>Population:</b>{" "}
            <FormattedNumber value={data.source.population} />
          </Typography>
          <Typography variant="body1">
            <b>Region:</b> {data.source.region}
          </Typography>
          <Typography variant="body1">
            <b>Subregion:</b> {data.source.subregion}
          </Typography>
          <Typography variant="body1">
            <b>Independent:</b> {data.source.independent ? "Yes" : "No"}
          </Typography>
          <Typography variant="body1">
            <b>Capital:</b> {data.source.capital}
          </Typography>
          <Typography variant="body1">
            <b>Languages:</b>
          </Typography>
          <ul>
            {Object.keys(data.source.languages).map((x, i) => (
              <li key={i}>{data.source.languages[x]}</li>
            ))}
          </ul>
          <Button component={RouterLink} to="/">
            Regresar
          </Button>
        </Card>
      </Grid>
    </Grid>
  ) : (
    <> No data </>
  );
};
export default Country;
