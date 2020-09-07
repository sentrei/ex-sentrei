import firebase, {functions} from "@sentrei/common/utils/firebase";

const invokeMemberSpace = async (
  spaceId: string,
  inviteId: string,
): Promise<firebase.functions.HttpsCallableResult> => {
  const service = functions.httpsCallable("v1-twilio-issueRoomToken");
  return service({spaceId, inviteId});
};

export default invokeMemberSpace;
