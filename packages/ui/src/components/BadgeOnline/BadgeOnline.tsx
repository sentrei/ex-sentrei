import Badge from "@material-ui/core/Badge";
import {Theme, withStyles, createStyles} from "@material-ui/core/styles";

import {BadgeOnlineColor} from "@sentrei/common/const/color";

const BadgeOnline = withStyles((theme: Theme) =>
  createStyles({
    badge: {
      backgroundColor: BadgeOnlineColor,
      color: BadgeOnlineColor,
      boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
      "&::after": {
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        borderRadius: "50%",
        animation: "$ripple 1.2s infinite ease-in-out",
        border: "1px solid currentColor",
        content: '""',
      },
    },
    "@keyframes ripple": {
      "0%": {
        transform: "scale(.8)",
        opacity: 1,
      },
      "100%": {
        transform: "scale(2.4)",
        opacity: 0,
      },
    },
  }),
)(Badge);

export default BadgeOnline;
