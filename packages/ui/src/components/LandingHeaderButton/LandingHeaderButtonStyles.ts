import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";

const LandingHeaderStyles = makeStyles((theme: Theme) =>
  createStyles({
    button: {
      "&:hover": {
        color: theme.palette.primary.main,
      },
      margin: theme.spacing(1),
    },
  }),
);

export default LandingHeaderStyles;
