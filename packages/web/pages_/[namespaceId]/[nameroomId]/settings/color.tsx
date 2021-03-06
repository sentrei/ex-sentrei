import {NextPage} from "next";

import dynamic from "next/dynamic";
import {useRouter} from "next/router";
import * as React from "react";

import AuthContext from "@sentrei/common/context/AuthContext";
import {getNameroom} from "@sentrei/common/firebase/namerooms";
import {getNamespace} from "@sentrei/common/firebase/namespaces";
import ErrorScreen from "@sentrei/ui/components/ErrorScreen";
import SentreiAppHeader from "@sentrei/web/components/SentreiAppHeader";

const RoomColor = dynamic(() => import("@sentrei/ui/components/RoomColor"), {
  ssr: false,
});

const Color: NextPage = () => {
  const {query} = useRouter();

  const {user, profile} = React.useContext(AuthContext);
  const [roomId, setRoomId] = React.useState<string | null | undefined>();
  const [spaceId, setSpaceId] = React.useState<string | null | undefined>();

  React.useEffect(() => {
    async function setSpace(): Promise<void> {
      const namespace = await getNamespace(String(query.namespaceId));
      if (!namespace || namespace.model === "user") {
        return;
      }
      setSpaceId(namespace.uid);
    }
    setSpace();
  }, [query.namespaceId]);

  React.useEffect(() => {
    async function setRoom(): Promise<void> {
      if (!spaceId) {
        return;
      }
      const nameroom = await getNameroom(spaceId, String(query.nameroomId));
      if (!nameroom) {
        return;
      }
      setRoomId(nameroom.uid);
    }
    setRoom();
  }, [query.nameroomId, spaceId]);

  if (user === undefined || spaceId === undefined || roomId === undefined) {
    return (
      <>
        <SentreiAppHeader
          skeleton
          profile={profile ?? undefined}
          tabRoomKey="settings"
          model="room"
          namespaceId={String(query.namespaceId)}
          nameroomId={String(query.nameroomId)}
        />
      </>
    );
  }

  if (!user || !profile || !spaceId || !roomId) {
    return (
      <>
        <SentreiAppHeader
          skeleton
          tabRoomKey="settings"
          model="room"
          namespaceId={String(query.namespaceId)}
          nameroomId={String(query.nameroomId)}
        />
        <ErrorScreen />
      </>
    );
  }

  return (
    <>
      <SentreiAppHeader
        notificationCount={Number(user.notificationCount)}
        profile={profile}
        namespaceId={String(query.namespaceId)}
        nameroomId={String(query.nameroomId)}
        userId={user.uid}
        tabRoomKey="settings"
        model="room"
      />
      <RoomColor
        roomId={roomId}
        namespaceId={String(query.namespaceId)}
        nameroomId={String(query.nameroomId)}
        user={user}
        profile={profile}
        spaceId={spaceId}
      />
    </>
  );
};

export default Color;
