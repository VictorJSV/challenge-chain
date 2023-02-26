import { Button, Grid, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Skeleton from "@mui/material/Skeleton";
import Snackbar from "@mui/material/Snackbar";
import { RequestType } from "@src/const/request";
import { Country } from "@src/models";
import { useAppSelector } from "@src/redux/hooks";
import { RootState } from "@src/redux/store";
import { useEffect } from "react";
import { FormattedNumber } from "react-intl";
import { Link as RouterLink, Navigate, useParams } from "react-router-dom";
import { useGetCountry } from "./hooks/useGetCountry";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons/faArrowLeft";
import {
  CountryButton,
  CountryDetail,
  CountryName,
  DetailGrid,
} from "./styled";

const Country = () => {
  const { code } = useParams();
  const countriesList = useAppSelector((state: RootState) => state.home.data);
  const { doRequest, status, data, error } = useGetCountry(countriesList);

  useEffect(() => {
    if (code) {
      doRequest(code);
    }
  }, [code]);

  if (!countriesList.length) {
    return <Navigate to={"/"} replace />;
  }

  if (
    status === RequestType.Idle ||
    status === RequestType.Pending ||
    status === RequestType.Rejected ||
    !data
  ) {
    return (
      <>
        <DetailGrid container spacing={2} mt={6}>
          <Grid item md={6}>
            <Skeleton variant="rectangular" width="100%" height={200} />
          </Grid>
          <Grid item md={5} sx={{ flexGrow: 1 }}>
            <Skeleton variant="rectangular" height={200} />
          </Grid>
        </DetailGrid>
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
      <Button component={RouterLink} sx={{ boxShadow: 2, px: 3 }} to="/">
        <FontAwesomeIcon icon={faArrowLeft} />{" "}
        <Typography variant="body1" ml={1}>
          Back
        </Typography>
      </Button>
      <DetailGrid container spacing={2} mt={6}>
        <Grid item md={6}>
          <img
            src={data.source.flags.svg}
            alt={data.source.name.common}
            width="100%"
          />
        </Grid>
        <Grid item md={5} sx={{ flexGrow: 1 }}>
          <CountryName component="h3" mb={2}>
            {data.source.name.common}
          </CountryName>
          <Grid container spacing={2}>
            <Grid item sm={6} xs={12}>
              <CountryDetail>
                <b>Native Name:</b> {data.nativeName}
              </CountryDetail>
              <CountryDetail>
                <b>Population:</b>{" "}
                <FormattedNumber value={data.source.population} />
              </CountryDetail>
              <CountryDetail>
                <b>Region:</b> {data.source.region}
              </CountryDetail>
              <CountryDetail>
                <b>Subregion:</b> {data.source.subregion}
              </CountryDetail>
              <CountryDetail>
                <b>Capital:</b> {data.source.capital}
              </CountryDetail>
            </Grid>
            <Grid item sm={6} xs={12}>
              <CountryDetail>
                <b>Top level Domain:</b> {data.source.tld[0]}
              </CountryDetail>
              <CountryDetail>
                <b>Currencies:</b> {data.currencies}
              </CountryDetail>
              <CountryDetail>
                <b>Languages:</b> {data.languages}
              </CountryDetail>
            </Grid>
          </Grid>
          {data.borderCountries?.length && (
            <Box
              sx={{ display: { sm: "flex" }, mt: { sm: "70px", xs: "25px" } }}
            >
              <Typography variant="body1" fontWeight={800} mr={1}>
                Border Countries:
              </Typography>
              <Box sx={{ flex: 1 }}>
                {data.borderCountries.map((x, i) => (
                  <CountryButton
                    key={i}
                    component={RouterLink}
                    to={"/country/" + x.code.toLowerCase()}
                  >
                    {x.name}
                  </CountryButton>
                ))}
              </Box>
            </Box>
          )}
        </Grid>
      </DetailGrid>
    </>
  );
};
export default Country;
