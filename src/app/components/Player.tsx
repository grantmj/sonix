import { mockTracks } from "./mockTracks";

export default function Player() {
  const currentTrack = mockTracks[0];
  return (
    <footer className="h-20 bg-gray-800 text-white flex items-center justify-between px-6">
      <div>
        Now Playing: <span className="font-bold">{currentTrack.title}</span> — {currentTrack.artist}
      </div>
      <div>
        <button className="mx-2">⏮️</button>
        <button className="mx-2">⏯️</button>
        <button className="mx-2">⏭️</button>
      </div>
    </footer>
  );
}