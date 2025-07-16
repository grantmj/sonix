import React from "react";

export default function Sidebar() {
  return (
    <aside className="w-64 bg-secondary text-white h-full p-4 flex flex-col">
      <nav className="flex-1">
        <ul>
          <SidebarItem>Home</SidebarItem>
          <SidebarItem>Library</SidebarItem>
          <SidebarItem>Playlists</SidebarItem>
        </ul>
      </nav>
    </aside>
  );
}

function SidebarItem({ children }: { children: React.ReactNode }) {
  return (
    <li className="mb-2 px-3 py-2 rounded transition-colors duration-200 cursor-pointer hover:bg-accent/20 active:bg-accent/40">
      {children}
    </li>
  );
}