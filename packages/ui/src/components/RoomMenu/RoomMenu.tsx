import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Menu from "@material-ui/core/Menu";
import DeleteIcon from "@material-ui/icons/Delete";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import SettingsIcon from "@material-ui/icons/Settings";
import useTranslation from "next-translate/useTranslation";
import * as React from "react";

import MuiMenuItem from "@sentrei/ui/components/MuiMenuItem";

export interface Props {
  anchorEl?: Element | ((element: Element) => Element) | null | undefined;
  open: boolean;
  onClose?:
    | ((event: {}, reason: "backdropClick" | "escapeKeyDown") => void)
    | undefined;
  roomId: string;
  namespaceId: string;
}

export default function RoomMenu({
  anchorEl,
  open,
  onClose,
  namespaceId,
  roomId,
}: Props): JSX.Element {
  const {t} = useTranslation();

  return (
    <Menu
      getContentAnchorEl={null}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "left",
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "left",
      }}
      id="room-menu"
      keepMounted
      anchorEl={anchorEl}
      open={open}
      onClose={onClose}
    >
      <MuiMenuItem
        href="/[namespaceId]/[roomId]/settings"
        as={`/${namespaceId}/${roomId}/settings`}
      >
        <ListItemIcon>
          <SettingsIcon fontSize="small" />
        </ListItemIcon>
        <ListItemText primary={t("room:room.settings")} />
      </MuiMenuItem>
      <MuiMenuItem
        href="/[namespaceId]/[roomId]/settings/quit"
        as={`/${namespaceId}/${roomId}/settings/quit`}
      >
        <ListItemIcon>
          <ExitToAppIcon fontSize="small" />
        </ListItemIcon>
        <ListItemText primary={t("room:room.quitRoom")} />
      </MuiMenuItem>
      <MuiMenuItem
        href="/[namespaceId]/[roomId]/settings/delete"
        as={`/${namespaceId}/${roomId}/settings/delete`}
      >
        <ListItemIcon>
          <DeleteIcon fontSize="small" />
        </ListItemIcon>
        <ListItemText primary={t("room:room.deleteRoom")} />
      </MuiMenuItem>
    </Menu>
  );
}
