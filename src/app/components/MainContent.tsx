"use client";

import { mockTracks } from "./mockTracks";
import React, { useState } from "react";

// SVG waveform (static, SoundCloud style)
function Waveform() {
  return (
    <svg width="120" height="32" viewBox="0 0 120 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="mx-4">
      <rect x="2" y="12" width="2" height="8" rx="1" fill="#ff5500"/>
      <rect x="6" y="8" width="2" height="16" rx="1" fill="#ff5500"/>
      <rect x="10" y="4" width="2" height="24" rx="1" fill="#ff5500"/>
      <rect x="14" y="10" width="2" height="12" rx="1" fill="#ff5500"/>
      <rect x="18" y="16" width="2" height="6" rx="1" fill="#ff5500"/>
      <rect x="22" y="8" width="2" height="16" rx="1" fill="#ff5500"/>
      <rect x="26" y="12" width="2" height="8" rx="1" fill="#ff5500"/>
      <rect x="30" y="6" width="2" height="20" rx="1" fill="#ff5500"/>
      <rect x="34" y="14" width="2" height="10" rx="1" fill="#ff5500"/>
      <rect x="38" y="10" width="2" height="12" rx="1" fill="#ff5500"/>
      {/* ...repeat for a stylized look... */}
    </svg>
  );
}

export default function MainContent() {
  // Simulate loading state for skeleton demo
  const isLoading = false;
  return (
    <main className="flex-1 p-6">
      <h2 className="text-xl font-semibold mb-4">Tracks</h2>
      <ul>
        {isLoading ? (
          Array.from({ length: 3 }).map((_, i) => (
            <li key={i} className="track-row flex items-center">
              <div className="skeleton" style={{ width: 120, height: 32, marginRight: 16 }} />
              <div className="flex-1">
                <div className="skeleton mb-2" style={{ width: 120, height: 16 }} />
                <div className="skeleton" style={{ width: 80, height: 12 }} />
              </div>
            </li>
          ))
        ) : (
          mockTracks.map((track) => (
            <li key={track.id} className="track-row flex items-center group transition-colors duration-200">
              <Waveform />
              <div className="flex-1">
                <span className="font-bold text-lg">{track.title}</span>
                <span className="text-gray-400 ml-2">{track.artist}</span>
                <span className="text-gray-500 ml-2">({track.duration})</span>
              </div>
              <LikeButton />
            </li>
          ))
        )}
      </ul>
    </main>
  );
}

// Like button with animation
function LikeButton() {
  const [liked, setLiked] = useState(false);
  return (
    <button
      className="ml-4 transition-colors duration-200 focus:outline-none"
      onClick={() => setLiked((v) => !v)}
      aria-label={liked ? "Unlike" : "Like"}
    >
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill={liked ? "#ff5500" : "none"}
        stroke="#ff5500"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={`transition-all duration-200 ${liked ? "scale-110" : "scale-100"}`}
      >
        {/* More heart-shaped path */}
        <path d="M12 21c-.6 0-1.2-.2-1.7-.6C6.1 17.2 2 13.36 2 9.5 2 6.42 4.42 4 7.5 4c1.74 0 3.41.81 4.5 2.09C13.09 4.81 14.76 4 16.5 4 19.58 4 22 6.42 22 9.5c0 3.86-4.1 7.7-8.3 10.9-.5.4-1.1.6-1.7.6z" />
      </svg>
    </button>
  );
}