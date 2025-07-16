import { mockTracks } from "./mockTracks";

export default function Player() {
  const currentTrack = mockTracks[0];
  return (
    <footer className="h-20 bg-secondary text-white flex items-center justify-between px-6 shadow-lg">
      <div className="flex items-center">
        <Waveform />
        <div>
          <span className="text-lg font-bold">{currentTrack.title}</span>
          <span className="text-gray-400 ml-2">{currentTrack.artist}</span>
        </div>
      </div>
      <div className="flex items-center">
        <PlayerButton icon="⏮️" label="Previous" />
        <PlayerButton icon="⏯️" label="Play/Pause" />
        <PlayerButton icon="⏭️" label="Next" />
      </div>
    </footer>
  );
}

// Static SVG waveform (reuse from MainContent)
function Waveform() {
  return (
    <svg width="80" height="24" viewBox="0 0 80 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mx-4">
      <rect x="2" y="8" width="2" height="8" rx="1" fill="#ff5500"/>
      <rect x="6" y="4" width="2" height="16" rx="1" fill="#ff5500"/>
      <rect x="10" y="2" width="2" height="20" rx="1" fill="#ff5500"/>
      <rect x="14" y="10" width="2" height="8" rx="1" fill="#ff5500"/>
      <rect x="18" y="14" width="2" height="4" rx="1" fill="#ff5500"/>
      <rect x="22" y="6" width="2" height="12" rx="1" fill="#ff5500"/>
      <rect x="26" y="8" width="2" height="8" rx="1" fill="#ff5500"/>
      <rect x="30" y="4" width="2" height="16" rx="1" fill="#ff5500"/>
    </svg>
  );
}

// Player button with micro-interaction
import React from "react";
function PlayerButton({ icon, label }: { icon: string; label: string }) {
  return (
    <button
      className="btn mx-2 flex items-center justify-center text-xl focus:outline-none"
      aria-label={label}
      tabIndex={0}
    >
      {icon}
    </button>
  );
}