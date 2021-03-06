import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";

const LandingFooterLogoStyles = makeStyles((theme: Theme) =>
  createStyles({
    logo: {
      maxWidth: "180px",
      maxHeight: "180px",
      minWidth: "60px",
      minHeight: "60px",
      [theme.breakpoints.down("md")]: {
        maxWidth: "120px",
        maxHeight: "120px",
        minWidth: "60px",
        minHeight: "60px",
      },
    },
  }),
);

export default LandingFooterLogoStyles;
