import {NextPage} from "next";
import dynamic from "next/dynamic";
import * as React from "react";

import AuthContext from "@sentrei/common/context/AuthContext";
import ErrorScreen from "@sentrei/ui/components/ErrorScreen";
import SkeletonScreen from "@sentrei/ui/components/SkeletonScreen";
import SentreiAppHeader from "@sentrei/web/components/SentreiAppHeader";

const SpaceDashboard = dynamic(
  () => {
    return import("@sentrei/ui/components/SpaceDashboard");
  },
  {ssr: false},
);

const Dashboard: NextPage = () => {
  const {user, profile} = React.useContext(AuthContext);

  if (user === undefined) {
    return (
      <>
        <SentreiAppHeader
          skeleton
          profile={profile ?? undefined}
          tabUserKey="dashboard"
          model="user"
        />
        <SkeletonScreen />
      </>
    );
  }

  if (!user || !profile) {
    return (
      <>
        <SentreiAppHeader skeleton tabUserKey="dashboard" model="user" />
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
        tabUserKey="dashboard"
        model="user"
      />
      <SpaceDashboard userId={user.uid} />
    </>
  );
};

export default Dashboard;
