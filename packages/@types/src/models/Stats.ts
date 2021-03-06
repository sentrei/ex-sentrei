export type RootCollection =
  | "activity"
  | "analytics"
  | "feedback"
  | "namespaces"
  | "notifications"
  | "profiles"
  | "rooms"
  | "sessions"
  | "spaces"
  | "users";

export const rootCollection: RootCollection[] = [
  "activity",
  "analytics",
  "feedback",
  "namespaces",
  "notifications",
  "profiles",
  "rooms",
  "sessions",
  "spaces",
  "users",
];

export type RoomCollection =
  | "activity"
  | "analytics"
  | "participants"
  | "sessions";

export const roomCollection: RoomCollection[] = [
  "activity",
  "analytics",
  "participants",
  "sessions",
];

export type SpaceCollection =
  | "activity"
  | "analytics"
  | "invites"
  | "members"
  | "namerooms"
  | "rooms"
  | "sessions";

export const spaceCollection: SpaceCollection[] = [
  "activity",
  "analytics",
  "invites",
  "members",
  "namerooms",
  "rooms",
  "sessions",
];

export type RoomSpaceCollection = RoomCollection | SpaceCollection;

export const roomSpaceCollection: RoomSpaceCollection[] = [
  ...roomCollection,
  ...spaceCollection,
];

export type Collection = RootCollection | RoomSpaceCollection;

export const collection: Collection[] = [
  ...rootCollection,
  ...roomSpaceCollection,
];

declare namespace Stats {
  export type Room = {
    [x in RoomCollection]?: FirebaseFirestore.FieldValue | number;
  };

  export type RoomSpace = {
    [x in RoomSpaceCollection]?: FirebaseFirestore.FieldValue | number;
  };

  export type Root = {
    [x in RootCollection]?: FirebaseFirestore.FieldValue | number;
  };

  export type Space = {
    [x in SpaceCollection]?: FirebaseFirestore.FieldValue | number;
  };

  export type Fields = {
    [x in Collection]?: FirebaseFirestore.FieldValue | number;
  };

  export type NumberFields = {
    [x in Collection]?: number;
  };

  export type Response = Fields;

  export type NumberResponse = NumberFields;

  export type Update = Partial<Response>;

  export interface Get extends NumberResponse {
    id: string;
  }
}

export default Stats;
