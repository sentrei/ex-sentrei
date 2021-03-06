import {LocalAudioTrack} from "twilio-video";
import {useCallback} from "react";
import useIsTrackEnabled from "@sentrei/video/hooks/useIsTrackEnabled/useIsTrackEnabled";
import useVideoContext from "@sentrei/video/hooks/useVideoContext/useVideoContext";

export default function useLocalAudioToggle() {
  const {localTracks} = useVideoContext();
  const audioTrack = localTracks.find(
    track => track.kind === "audio",
  ) as LocalAudioTrack;
  const isEnabled = useIsTrackEnabled(audioTrack);

  const toggleAudioEnabled = useCallback(() => {
    if (audioTrack) {
      audioTrack.isEnabled ? audioTrack.disable() : audioTrack.enable();
    }
  }, [audioTrack]);

  return [isEnabled, toggleAudioEnabled] as const;
}
