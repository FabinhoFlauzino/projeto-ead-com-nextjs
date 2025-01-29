import Estatisticas from "./Estatisticas";
import Player from "./Player";

export default function Sala() {
  return (
    <div className="flex">
      <div className="bg-zinc-800 w-96 h-screen overflow-auto">

      </div>
      <div className="flex flex-col justify-center items-center gap-4 flex-1">
        <Estatisticas />
        <Player />
      </div>
    </div>
  );
}