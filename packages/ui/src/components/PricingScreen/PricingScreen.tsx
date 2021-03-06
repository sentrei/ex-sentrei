import Box from "@material-ui/core/Box";

import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import {useTheme} from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import useTranslation from "next-translate/useTranslation";
import * as React from "react";

import PricingBanner from "@sentrei/ui/components/PricingBanner";
import PricingCard from "@sentrei/ui/components/PricingCard";

export default function PricingScreen(): JSX.Element {
  const {t} = useTranslation();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("sm"));

  return (
    <>
      <PricingBanner />
      <Box p={1} />
      <Container maxWidth="lg" component="main">
        <Box p={matches ? 3 : 0}>
          <Grid container spacing={2} alignItems="flex-end">
            <Grid item xs={12} sm={12} md={4}>
              <PricingCard
                buttonVariant="outlined"
                buttonText={t("pricing:card.free.buttonText")}
                center={!matches}
                description1={t("pricing:card.free.description1")}
                description2={t("pricing:card.free.description2")}
                description3={t("pricing:card.free.description3")}
                description4={t("pricing:card.free.description4")}
                description5={t("pricing:card.free.description5")}
                description6={t("pricing:card.free.description6")}
                href="/signup"
                perUser={t("pricing:card.perUser")}
                price={t("pricing:card.free.price")}
                priceMonth={t("pricing:card.priceMonth")}
                title={t("pricing:card.free.title")}
              />
            </Grid>
            <Grid item xs={12} sm={12} md={4}>
              <PricingCard
                buttonVariant="contained"
                buttonText={t("pricing:card.pro.buttonText")}
                center={!matches}
                description1={t("pricing:card.pro.description1")}
                description2={t("pricing:card.pro.description2")}
                description3={t("pricing:card.pro.description3")}
                description4={t("pricing:card.pro.description4")}
                description5={t("pricing:card.pro.description5")}
                description6={t("pricing:card.pro.description6")}
                href="/signup"
                perUser={t("pricing:card.perUser")}
                price={t("pricing:card.pro.price")}
                priceMonth={t("pricing:card.priceMonth")}
                title={t("pricing:card.pro.title")}
              />
            </Grid>
            <Grid item xs={12} sm={12} md={4}>
              <PricingCard
                buttonVariant="outlined"
                buttonText={t("pricing:card.enterprise.buttonText")}
                center={!matches}
                description1={t("pricing:card.enterprise.description1")}
                description2={t("pricing:card.enterprise.description2")}
                description3={t("pricing:card.enterprise.description3")}
                description4={t("pricing:card.enterprise.description4")}
                description5={t("pricing:card.enterprise.description5")}
                description6={t("pricing:card.enterprise.description6")}
                href="/support"
                perUser=""
                price={t("pricing:card.enterprise.price")}
                priceMonth=""
                title={t("pricing:card.enterprise.title")}
              />
            </Grid>
          </Grid>
        </Box>
      </Container>
      <Box p={3} />
    </>
  );
}
