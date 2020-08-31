import {NextPage} from "next";
import Router from "next-translate/Router";
import {useRouter} from "next/router";
import * as React from "react";

import AuthContext from "@sentrei/common/context/AuthContext";
import {analytics} from "@sentrei/common/utils/firebase";
import SkeletonForm from "@sentrei/ui/components/SkeletonForm";
import SpaceActivity from "@sentrei/ui/components/SpaceActivity";
import SentreiAppHeader from "@sentrei/web/components/SentreiAppHeader";

const ActivityPage: NextPage = () => {
  const {query} = useRouter();

  const {user, profile} = React.useContext(AuthContext);

  React.useEffect(() => {
    analytics().setCurrentScreen("spaceActivity");
  }, []);

  if (user === undefined || !profile) {
    return (
      <>
        <SentreiAppHeader skeleton tabSpaceKey="activity" type="space" />
        <SkeletonForm />
      </>
    );
  }

  if (!user) {
    Router.pushI18n("/");
  }

  return (
    <>
      {user && (
        <SentreiAppHeader
          notificationCount={Number(user.notificationCount)}
          profile={profile}
          userId={user.uid}
          namespaceId={String(query.namespaceId)}
          tabSpaceKey="activity"
          type="space"
        />
      )}
      <SpaceActivity namespaceId={String(query.namespaceId)} />
    </>
  );
};

export default ActivityPage;