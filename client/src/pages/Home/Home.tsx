import { Box, Card, Typography, Grid, Skeleton, Snackbar } from "@mui/material";
import { RequestType } from "@src/const/request";
import { Country } from "@src/models";
import { filterByCountry, filterByRegion } from "@src/redux/states/home";
import { ChangeEvent, useEffect } from "react";
import { FormattedNumber, FormattedNumberParts } from "react-intl";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Search, SelectFilter } from "./components";
import { useGetCountries } from "./hooks/useGetCountries";
import { getRegions } from "../../services/country.service";
import { ImageBox, Image, CardBox, ListBox } from "./styled";

const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const regions = getRegions();
  const { doRequest, status, data: countriesList, error } = useGetCountries();

  useEffect(() => {
    if (!countriesList.length) {
      doRequest();
    }
  }, []);

  const handleInput = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch(filterByCountry(event.target.value));
  };

  const handleChange = (value: string) => {
    dispatch(filterByRegion(value));
  };

  const handleCountryDetail = (country: Country) => {
    navigate("/country/" + country.cca3.toLowerCase());
    dispatch(filterByCountry(""));
    dispatch(filterByRegion(""));
  };

  if (
    status === RequestType.Idle ||
    status === RequestType.Pending ||
    status === RequestType.Rejected
  ) {
    return (
      <>
        <CardBox>
          <Skeleton
            variant="rectangular"
            height={48}
            width={350}
            sx={{ mb: 1 }}
          />
          <Skeleton variant="rectangular" height={48} width={180} sx={{ marginTop: { xs: 5 }}}/>
        </CardBox>
        <ListBox>
          <Grid container spacing={6} py={4}>
            {[1, 2, 3, 4].map((x, i) => (
              <Grid item xs={12} sm={4} md={3} key={i}>
                <Skeleton variant="rectangular" height={252} />
              </Grid>
            ))}
          </Grid>
        </ListBox>
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

  return (
    <>
      <CardBox>
        <Search handleInput={handleInput} />
        <SelectFilter
          handleChange={handleChange}
          items={regions}
          label="Filter by Region"
        />
      </CardBox>
      <ListBox>
        <Grid container spacing={6} py={4} role="list">
          {countriesList.length ? (
            countriesList.map((x, i) => (
              <Grid item xs={12} sm={4} md={3} key={i} role="listitem">
                <Card
                  sx={{ borderRadius: 2, cursor: "pointer", boxShadow: 1 }}
                  onClick={() => handleCountryDetail(x)}
                >
                  <ImageBox>
                    <Image src={x.flags.svg} alt={x.name.common} />
                  </ImageBox>
                  <Box padding="16px 22px 34px">
                    <Typography component="h3" variant="h6" fontWeight={800} gutterBottom>
                      {x.name.common}
                    </Typography>
                    <Typography variant="body1">
                      <b>Population:</b> <FormattedNumber value={x.population}/>
                    </Typography>
                    <Typography variant="body1">
                      <b>Region:</b> {x.region}
                    </Typography>
                    <Typography variant="body1">
                      <b>Capital:</b> {x.capital}
                    </Typography>
                  </Box>
                </Card>
              </Grid>
            ))
          ) : (
            <Grid item>
              <Typography component="span" variant="h6" gutterBottom>
                No results found
              </Typography>
            </Grid>
          )}
        </Grid>
      </ListBox>
    </>
  );
};

export default Home;
