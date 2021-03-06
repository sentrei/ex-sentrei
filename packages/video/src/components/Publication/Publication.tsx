import React from "react";
import useTrack from "@sentrei/video/hooks/useTrack/useTrack";
import AudioTrack from "@sentrei/video/components/AudioTrack/AudioTrack";
import VideoTrack from "@sentrei/video/components/VideoTrack/VideoTrack";

import {IVideoTrack} from "@sentrei/video/types";
import {
  AudioTrack as IAudioTrack,
  LocalTrackPublication,
  Participant,
  RemoteTrackPublication,
  Track,
} from "twilio-video";

interface PublicationProps {
  publication: LocalTrackPublication | RemoteTrackPublication;
  participant: Participant;
  isLocal: boolean;
  disableAudio?: boolean;
  videoPriority?: Track.Priority | null;
}

export default function Publication({
  publication,
  isLocal,
  disableAudio,
  videoPriority,
}: PublicationProps) {
  const track = useTrack(publication);

  if (!track) return null;

  switch (track.kind) {
    case "video":
      return (
        <VideoTrack
          track={track as IVideoTrack}
          priority={videoPriority}
          isLocal={track.name.includes("camera") && isLocal}
        />
      );
    case "audio":
      return disableAudio ? null : <AudioTrack track={track as IAudioTrack} />;
    default:
      return null;
  }
}
