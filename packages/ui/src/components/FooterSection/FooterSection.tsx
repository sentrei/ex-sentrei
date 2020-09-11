/* eslint-disable no-script-url */

import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";
import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";

import useTranslation from "next-translate/useTranslation";
import * as React from "react";
import UseAnimations from "react-useanimations";
import github from "react-useanimations/lib/github";
import linkedin from "react-useanimations/lib/linkedin";
import twitter from "react-useanimations/lib/twitter";

import metomic from "@sentrei/common/services/metomic";
import IntlForm from "@sentrei/ui/components/IntlForm";
import MuiLink from "@sentrei/ui/components/MuiLink";

export default function FooterSection(): JSX.Element {
  const {t} = useTranslation();

  return (
    <Grid container justify="space-evenly">
      <Grid item xs={12} sm={3} md={2}>
        <Typography variant="h6" gutterBottom>
          {t("footer:footer.company")}
        </Typography>
        <MuiLink href="/about">
          <Typography gutterBottom>{t("footer:footer.about")}</Typography>
        </MuiLink>
        <MuiLink href="/support">
          <Typography gutterBottom>{t("footer:footer.support")}</Typography>
        </MuiLink>
      </Grid>
      <Grid item xs={12} sm={3} md={2}>
        <Typography variant="h6" gutterBottom>
          {t("footer:footer.legal")}
        </Typography>
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <Link onClick={(): void => metomic()}>
          <Typography gutterBottom>{t("footer:footer.cookies")}</Typography>
        </Link>
        <MuiLink href="/privacy">
          <Typography gutterBottom>{t("footer:footer.privacy")}</Typography>
        </MuiLink>
        <MuiLink href="/terms">
          <Typography gutterBottom>{t("footer:footer.terms")}</Typography>
        </MuiLink>
      </Grid>
      <Grid item xs={12} sm={3} md={2}>
        <Typography variant="h6" gutterBottom>
          {t("footer:footer.product")}
        </Typography>
        <MuiLink href="/pitch">
          <Typography gutterBottom>{t("footer:footer.pitch")}</Typography>
        </MuiLink>
        <MuiLink href="/pricing">
          <Typography gutterBottom>{t("footer:footer.pricing")}</Typography>
        </MuiLink>
        <Link
          href="https://github.com/sentrei/sentrei/releases"
          target="_blank"
        >
          <Typography gutterBottom>{t("footer:footer.releases")}</Typography>
        </Link>
      </Grid>
      <Grid item xs={12} sm={3} md={2}>
        <Typography variant="h6" gutterBottom>
          {t("footer:footer.preferences")}
        </Typography>
        <IntlForm />
      </Grid>
      <Grid item xs={12} sm={3} md={2}>
        <Typography variant="h6" gutterBottom>
          {t("footer:footer.social")}
        </Typography>
        <Grid container direction="row" spacing={3}>
          <Grid item>
            <Link href="https://github.com/sentrei/sentrei" target="_blank">
              <Avatar aria-label="github" variant="rounded">
                <UseAnimations animation={github} />
              </Avatar>
            </Link>
          </Grid>
          <Grid item>
            <Link href="https://linkedin.com/company/sentrei" target="_blank">
              <Avatar aria-label="linkedin" variant="rounded">
                <UseAnimations animation={linkedin} />
              </Avatar>
            </Link>
          </Grid>
          <Grid item>
            <Link href="https://twitter.com/sentrei_com" target="_blank">
              <Avatar aria-label="twitter" variant="rounded">
                <UseAnimations animation={twitter} />
              </Avatar>
            </Link>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}