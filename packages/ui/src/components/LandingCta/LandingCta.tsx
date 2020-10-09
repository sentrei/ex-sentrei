import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import clsx from "clsx";
import useTranslation from "next-translate/useTranslation";
import * as React from "react";

import MuiButton from "@sentrei/ui/components/MuiButton";

import LandingCtaStyles from "./LandingCtaStyles";

export default function LandingCta(): JSX.Element {
  const {t} = useTranslation();
  const classes = LandingCtaStyles();

  return (
    <>
      <Container maxWidth="md">
        <Typography component="h3" variant="h3" align="center">
          <div className={classes.container}>
            <Typography className={classes.typography}>
              {t("index:cta.title")}
            </Typography>
            <div
              className={clsx(
                classes.typography,
                classes.gradient,
                classes.bottom,
              )}
            >
              {t("index:cta.title")}
            </div>
          </div>
        </Typography>
        <Typography
          component="h6"
          variant="h6"
          align="center"
          color="textSecondary"
        >
          {t("index:cta.subtitle")}
        </Typography>
      </Container>
      <Box py={2} />
      <Container maxWidth="sm" component="main">
        <Grid container justify="center" direction="row" spacing={3}>
          <Grid item xs={12} md={6}>
            <MuiButton
              className={classes.button}
              color="primary"
              variant="contained"
              href="/signup"
            >
              <Typography noWrap>{t("index:cta.startText")}</Typography>
            </MuiButton>
          </Grid>
          <Grid item xs={12} md={6}>
            <MuiButton
              className={classes.button}
              color="primary"
              variant="outlined"
              href="/support"
            >
              <Typography noWrap>{t("index:cta.salesText")}</Typography>
            </MuiButton>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
