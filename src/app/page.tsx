import LoginScreen from "./components/LoginScreen";
import Sidebar from "./components/Sidebar";
import MainContent from "./components/MainContent";
import Player from "./components/Player";

export default function Home() {
  return (
    <div className="flex flex-col h-screen">
      {/*<LoginScreen />*/}
      <div className="flex flex-1">
        <Sidebar />
        <MainContent />
      </div>
      <Player />
    </div>
  );
}
