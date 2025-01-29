import Estatistica from "./Estatistica";


export default function Estatisticas() {
  return (
    <div className="
      flex justify-around items-center
      w-4/5 h-24 bg-zinc-700 rounded-lg
    ">
      <Estatistica valor={10} texto="Qtde de Aulas"/>
      <Estatistica valor={5} texto="Aulas Concluídas"/>
      <Estatistica valor="2h 30m" texto="Duração Total"/>
      <Estatistica valor="1h 15m" texto="Duração Concluída"/>
      <Estatistica valor="58%" texto="Perc. Conclusão"/>
    </div>
  )
}