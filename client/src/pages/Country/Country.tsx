import { Button, Card, Grid, Typography } from "@mui/material";
import { Country } from "@src/models";
import { Link, Navigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Country = () => {
  const { state } = useLocation();
  const country: Country = state?.country;

  if (!country) {
    return <Navigate to={"/"} replace />;
  }

  return (
    <Grid container spacing={2}>
      <Grid item>
        <Card sx={{ textAlign: "center" }}>
          <img src={country.flags.svg} alt={country.name.common} height={150} />
        </Card>
      </Grid>
      <Grid item sx={{ flexGrow: 1 }}>
        <Card sx={{ p: 2 }}>
          <Typography component="h3" variant="h6" gutterBottom>
            {country.name.common}
          </Typography>
          <Typography variant="body1">
            <b>Population:</b> {country.population}
          </Typography>
          <Typography variant="body1">
            <b>Region</b>: {country.region}
          </Typography>
          <Typography variant="body1">
            <b>Subregion</b>: {country.subregion}
          </Typography>
          <Typography variant="body1">
            <b>Independent</b>: {country.independent ? "Yes" : "No"}
          </Typography>
          <Typography variant="body1">
            <b>Capital</b>: {country.capital}
          </Typography>
          <Typography variant="body1">
            <b>Languages</b>
          </Typography>
          <ul>
            {Object.keys(country.languages).map((x, i) => (
              <li key={i}>{country.languages[x]}</li>
            ))}
          </ul>
          <Button component={Link} to="/">
            Regresar
          </Button>
        </Card>
      </Grid>
    </Grid>
  );
};
export default Country;
