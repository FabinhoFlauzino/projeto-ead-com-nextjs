import { IconCheck } from "@tabler/icons-react"

interface AulaConclusaoProps {
  concluida: boolean
  onClick?: () => void
}

export default function AulaConclusao({ concluida, onClick }: AulaConclusaoProps) {
  return (
    <button className={`
      flex justify-center items-center
      w-6 h-6 rounded-full border border-zinc-400
      ${concluida && 'bg-green-500'}
    `}
      onClick={onClick}
    >
      {concluida && <IconCheck size={18} stroke={3} />}
    </button>
  )
}