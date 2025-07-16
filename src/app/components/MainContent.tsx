import { mockTracks } from "./mockTracks";

export default function MainContent() {
  return (
    <main className="flex-1 p-6">
      <h2 className="text-xl font-semibold mb-4">Tracks</h2>
      <ul>
        {mockTracks.map((track) => (
          <li key={track.id} className="mb-2">
            <span className="font-bold">{track.title}</span> — {track.artist} <span className="text-gray-400">({track.duration})</span>
          </li>
        ))}
      </ul>
    </main>
  );
}