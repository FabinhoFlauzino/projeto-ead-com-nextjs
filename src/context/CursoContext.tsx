import Capitulo from "@/data/models/Capitulo"
import { createContext, useState } from "react"
import capitulosFake from "@/data/constants/capitulos"
import Aula from "@/data/models/Aula"
import CursoEstatistica from "@/data/models/CursoEstatisticas"

interface CursoContextProps {
  capitulos: Capitulo[]
  aulaAtual: Aula
  qtdeDeAulas: number
  aulasConcluidas: number
  duracaoTotal: string
  duracaoConcluida: string
  percentualConclusao: number
  selecionarAula: (aula: Aula) => void
  altenarConclusaoAula: (aula: Aula) => void
}

const CursoContext = createContext<CursoContextProps>({} as any)

export function CursoProvider(props: any) {
  const [capitulos, setCapitulos] = useState(capitulosFake)
  const [aulaAtual, setAulaAtual] = useState(capitulosFake[0].aulas[0])

  const cursoEstatisticas = new CursoEstatistica(capitulos)

  function selecionarAula(aula: Aula) {
    setAulaAtual(aula)
  }

  function altenarConclusaoAula(aulaSelecionada: Aula) {
    
    const novosCapitulos = capitulos.map((capitulo) => {
      const novasAulas = capitulo.aulas.map((aula) => {
        return aula.ordem === aulaSelecionada.ordem
          ? { ...aula, conclusao: !(aula.conclusao ?? false) }
          : aula
      })
      return { ...capitulo, aulas: novasAulas }
    })

    setCapitulos(novosCapitulos)
  }

  return (
    <CursoContext.Provider value={{
      capitulos,
      aulaAtual,
      selecionarAula,
      altenarConclusaoAula,
      get qtdeDeAulas() {
        return cursoEstatisticas.qtdeDeAula()
      },
      get aulasConcluidas() {
        return cursoEstatisticas.aulasConcluidas()
      },
      get duracaoTotal() {
        return cursoEstatisticas.duracaoTotal()
      },
      get duracaoConcluida() {
        return cursoEstatisticas.duracaoConcluida()
      },
      get percentualConclusao() {
        return cursoEstatisticas.percentualConclusao()
      }
    }}>
      {props.children}
    </CursoContext.Provider>
  )
}

export default CursoContext
