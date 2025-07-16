import React from "react";

export default function Sidebar() {
  return (
    <aside className="w-64 bg-gray-900 text-white h-full p-4">
      <nav>
        <ul>
          <li className="mb-2">Home</li>
          <li className="mb-2">Library</li>
          <li className="mb-2">Playlists</li>
        </ul>
      </nav>
    </aside>
  );
}