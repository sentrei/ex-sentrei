import * as admin from "firebase-admin";
import * as functions from "firebase-functions";

import Metrics from "@sentrei/types/models/Metrics";

const db = admin.firestore();

/**
 * Reset Space Metrics for Day
 */
const daySpaceReset = functions.pubsub.schedule("0 0 * * *").onRun(() => {
  const metricsData = <Metrics.Update>{period: {day: 0}};
  db.collection("spaces")
    .get()
    .then(snapshot => {
      snapshot.forEach(doc => {
        try {
          db.doc(`spaces/${doc.id}/admin/metrics`).update(metricsData);
        } catch (err) {
          console.error(err.message);
        }
      });
    });
  return;
});

export default daySpaceReset;
