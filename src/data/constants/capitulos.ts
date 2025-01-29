import Capitulo from "../models/Capitulo";

const capitulos: Capitulo[] = [
  {
    id: 1007,
    titulo: "Introdução",
    ordem: 1,
    aulas: [
      {ordem: 1, titulo: "Bem vindos", duracao: 60 * 2, videoUrl: "https://www.youtube.com/embed/HJN5rX-3SDM"},
    ]
  },
  {
    id: 1001,
    titulo: "Fundamentos",
    ordem: 2,
    aulas: [
      {ordem: 14, titulo: "Ajustando o ambiente", duracao: 60 * 2, videoUrl: "https://www.youtube.com/embed/HJN5rX-3SDM"},
    ]
  },
  {
    id: 1346,
    titulo: "Desafios",
    ordem: 3,
    aulas: [
      {ordem: 25, titulo: "Desafio 1", duracao: 60 * 2, videoUrl: "https://www.youtube.com/embed/HJN5rX-3SDM"},
    ]
  },
]

export default capitulos;