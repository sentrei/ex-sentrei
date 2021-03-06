import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";

import {
  GradientTop,
  GradientMiddle,
  GradientBottom,
} from "@sentrei/common/const/color";

const LandingBannerGradientStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      position: "relative",
    },
    typography: {
      color: theme.palette.grey[800],
      position: "relative",
      fontFamily: "-apple-system, system-ui, BlinkMacSystemFont, Roboto",
      fontSize: 126,
      fontWeight: 900,
      margin: 0,
      lineHeight: "1.1em",
      letterSpacing: -3,
    },
    gradient: {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      opacity: 1,
      backgroundClip: "text",
      WebkitTextFillColor: "transparent",
      WebkitBackgroundClip: "text",
    },
    top: {
      animation: `$top 8s infinite`,
      backgroundImage: `linear-gradient(90deg, ${GradientTop}, ${GradientMiddle})`,
    },
    "@keyframes top": {
      "0%, 16.667%, 100%": {
        opacity: 1,
      },
      "33.333%, 83.333%": {
        opacity: 0,
      },
    },
    center: {
      animation: `$center 8s infinite`,
      backgroundImage: `linear-gradient(90deg, ${GradientMiddle}, ${GradientBottom})`,
    },
    "@keyframes center": {
      "0%, 16.667%, 66.667%, 100%": {
        opacity: 0,
      },
      "33.333%, 50%": {
        opacity: 1,
      },
    },
    bottom: {
      animation: `$bottom 8s infinite`,
      backgroundImage: `linear-gradient(90deg, ${GradientBottom}, ${GradientTop})`,
    },
    "@keyframes bottom": {
      "0%, 50%, 100%": {
        opacity: 0,
      },
      "66.667%, 83.333%": {
        opacity: 1,
      },
    },
  }),
);

export default LandingBannerGradientStyles;
