import {NextPage} from "next";

import dynamic from "next/dynamic";
import {useRouter} from "next/router";
import * as React from "react";

import AuthContext from "@sentrei/common/context/AuthContext";
import {getNamespace} from "@sentrei/common/firebase/namespaces";
import ErrorScreen from "@sentrei/ui/components/ErrorScreen";

import SentreiAppHeader from "@sentrei/web/components/SentreiAppHeader";

const RoomCreate = dynamic(() => import("@sentrei/ui/components/RoomCreate"), {
  ssr: false,
});

const Create: NextPage = () => {
  const {query} = useRouter();

  const {user, profile} = React.useContext(AuthContext);
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

  if (user === undefined || spaceId === undefined) {
    return (
      <>
        <SentreiAppHeader
          skeleton
          profile={profile ?? undefined}
          tabSpaceKey="rooms"
          model="space"
          namespaceId={String(query.namespaceId)}
        />
      </>
    );
  }

  if (!user || !profile || !spaceId) {
    return (
      <>
        <SentreiAppHeader
          skeleton
          tabSpaceKey="rooms"
          model="space"
          namespaceId={String(query.namespaceId)}
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
        userId={user.uid}
        namespaceId={String(query.namespaceId)}
        tabSpaceKey="rooms"
        model="space"
      />
      <RoomCreate
        spaceId={spaceId}
        namespaceId={String(query.namespaceId)}
        profile={profile}
        user={user}
      />
    </>
  );
};

export default Create;
