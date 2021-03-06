import dynamic from "next/dynamic";
import {useRouter} from "next/router";
import * as React from "react";

import AuthContext from "@sentrei/common/context/AuthContext";
import {getMembers} from "@sentrei/common/firebase/members";
import {getNameroom} from "@sentrei/common/firebase/namerooms";
import {getNamespace} from "@sentrei/common/firebase/namespaces";
import Member from "@sentrei/types/models/Member";
import ErrorScreen from "@sentrei/ui/components/ErrorScreen";
import Loader from "@sentrei/ui/components/Loader";
import AppStateProvider from "@sentrei/video/state";

const VideoApp = dynamic(() => import("@sentrei/video/VideoApp"), {
  ssr: false,
});

const NameroomId = (): JSX.Element => {
  const {query} = useRouter();

  const {user, profile} = React.useContext(AuthContext);
  const [roomId, setRoomId] = React.useState<string | null | undefined>();
  const [spaceId, setSpaceId] = React.useState<string | null | undefined>();
  const [members, setMembers] = React.useState<
    Member.Get[] | null | undefined
  >();

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

  React.useEffect(() => {
    if (spaceId) {
      getMembers({spaceId}).then(setMembers);
    }
  }, [spaceId]);

  if (
    user === undefined ||
    profile === undefined ||
    spaceId === undefined ||
    roomId === undefined ||
    members === undefined
  ) {
    return <Loader />;
  }

  if (!user || !profile || !spaceId || !roomId || !members) {
    return <ErrorScreen />;
  }

  return (
    <AppStateProvider roomId={roomId}>
      <VideoApp />
    </AppStateProvider>
  );
};

export default NameroomId;
