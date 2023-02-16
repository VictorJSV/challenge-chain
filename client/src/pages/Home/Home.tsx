import {
  Container,
  Box,
  Card,
  Typography,
  Grid,
  Skeleton,
  Snackbar,
} from "@mui/material";
import { RequestType } from "@src/const/request";
import { filterByCountry, filterByRegion } from "@src/redux/states/home";
import { ChangeEvent, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Search, SelectFilter } from "./components";
import { useGetCountries } from "./hooks/useGetCountries";
import { getRegions } from "./services/country.service";
import { ImageBox, Image, CardBox } from "./styled";

const Home = () => {
  const dispatch = useDispatch();
  const regions = getRegions();
  const { doRequest, status, data: countriesList, error } = useGetCountries();

  useEffect(() => {
    doRequest();
  }, []);

  const handleInput = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch(filterByCountry(event.target.value));
  };

  const handleChange = (value: string) => {
    dispatch(filterByRegion(value));
  };

  if (
    status === RequestType.Idle ||
    status === RequestType.Pending ||
    status === RequestType.Rejected
  ) {
    return (
      <Container maxWidth="lg">
        <CardBox>
          <Skeleton variant="rectangular" height={48} width={400} />
          <Skeleton variant="rectangular" height={48} width={180} />
        </CardBox>
        <Grid container spacing={6} py={4}>
          {[1, 2, 3, 4].map((x, i) => (
            <Grid item xs={3} md={3} key={i}>
              <Skeleton variant="rectangular" height={252} />
            </Grid>
          ))}
        </Grid>
        {error && (
          <Snackbar
            open={true}
            autoHideDuration={6000}
            message="Hubo un error"
            anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
          />
        )}
      </Container>
    );
  }

  return (
    <Container maxWidth="lg">
      <CardBox>
        <Search handleInput={handleInput} />
        <SelectFilter
          handleChange={handleChange}
          items={regions}
          label="Filter by Region"
        />
      </CardBox>
      <Grid container spacing={6} py={4}>
        {countriesList.length ? (
          countriesList.map((x, i) => (
            <Grid item xs={3} md={3} key={i}>
              <Card variant="outlined" sx={{ borderRadius: 2 }}>
                <ImageBox>
                  <Image src={x.flags.svg} alt={x.name.common} />
                </ImageBox>
                <Box p={2}>
                  <Typography component="h3" variant="h6" gutterBottom>
                    {x.name.common}
                  </Typography>
                  <Typography variant="body1">
                    <b>Population:</b> {x.population}
                  </Typography>
                  <Typography variant="body1">
                    <b>Region</b>: {x.region}
                  </Typography>
                  <Typography variant="body1">
                    <b>Capital</b>: {x.capital}
                  </Typography>
                </Box>
              </Card>
            </Grid>
          ))
        ) : (
          <Grid item>
            <Typography component="span" variant="h6" gutterBottom>
              No se encontró resultados
            </Typography>
          </Grid>
        )}
      </Grid>
    </Container>
  );
};

export default Home;
