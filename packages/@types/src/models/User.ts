import Metrics from "@sentrei/types/models/Metrics";
import Profile from "@sentrei/types/models/Profile";

declare namespace User {
  export type Mode = "dark" | "light" | "system";
  export type Language = "en" | "ja" | "zh";
  export type NotificationType = "app" | "email";

  export interface NotificationSettings {
    chat: NotificationType[];
    general: NotificationType[];
    update: NotificationType[];
  }

  export interface Fields extends Metrics.Fields, Profile.Fields {
    email: string | null;
    mode?: Mode;
    language?: Language;
    lastSpaceId?: string;
    notificationCount: FirebaseFirestore.FieldValue | number;
    notificationSettings: NotificationSettings;
    role: "admin" | "moderator" | "viewer";
  }

  export type Response = Fields;

  export interface Get extends Response {
    uid: string;
    record: number;
    duration: number;
    score: number;
  }

  export interface Snapshot extends Get {
    snap: firebase.firestore.DocumentSnapshot;
  }

  export type Update = Partial<Response>;
}

export default User;
