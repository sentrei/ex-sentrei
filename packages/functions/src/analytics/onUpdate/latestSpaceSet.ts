import * as admin from "firebase-admin";
import * as functions from "firebase-functions";

import setLatestAnalytics from "@sentrei/functions/helpers/analytics/setLatestAnalytics";

const db = admin.firestore();

/**
 * Set latest spaces on update
 */
const latestSpaceSet = functions.firestore
  .document("spaces/{spaceId}/admin/{adminId}")
  .onUpdate(async (change, context) => {
    const {spaceId, adminId} = context.params;

    const analyticsData = setLatestAnalytics(adminId, "space", change);

    if (!analyticsData) {
      return false;
    }

    return db
      .doc(`spaces/${spaceId}/analytics/latest`)
      .set(analyticsData, {merge: true});
  });

export default latestSpaceSet;
