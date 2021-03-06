import React from "react";
import ParticipantInfo from "@sentrei/video/components/ParticipantInfo/ParticipantInfo";
import ParticipantTracks from "@sentrei/video/components/ParticipantTracks/ParticipantTracks";
import {Participant as IParticipant} from "twilio-video";

interface ParticipantProps {
  participant: IParticipant;
  disableAudio?: boolean;
  enableScreenShare?: boolean;
  onClick: () => void;
  isSelected: boolean;
}

export default function Participant({
  participant,
  disableAudio,
  enableScreenShare,
  onClick,
  isSelected,
}: ParticipantProps) {
  return (
    <ParticipantInfo
      participant={participant}
      onClick={onClick}
      isSelected={isSelected}
    >
      <ParticipantTracks
        participant={participant}
        disableAudio={disableAudio}
        enableScreenShare={enableScreenShare}
      />
    </ParticipantInfo>
  );
}
