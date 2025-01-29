import Aula from "@/data/models/Aula"
import AulaConclusao from "./AulaConclusao"
import { IconVideo } from "@tabler/icons-react"
import { useContext } from "react"
import CursoContext from "@/context/CursoContext"

interface AulaItemProps {
  aula: Aula
  selecionada: boolean
}

export default function AulaItem({ aula, selecionada }: AulaItemProps) {
  const { selecionarAula, altenarConclusaoAula } = useContext(CursoContext)

  return (
    <div className="flex items-center gap-2 py-1">
      <AulaConclusao concluida={aula.conclusao ?? false} onClick={() => altenarConclusaoAula(aula)}/>
      <div className="flex-1 flex flex-col cursor-pointer" onClick={() => selecionarAula(aula)}>
        <span className={`
          ${selecionada && "text-yellow-400 "}
          `}>
          {aula.ordem}. {aula.titulo}
        </span>
        <span className="-mt-1 text-xs text-zinc-400">Dureção de {Math.floor(aula.duracao / 60)}m</span>
      </div>
      <IconVideo size={20} className="text-zinc-500" />
    </div>
  )
}