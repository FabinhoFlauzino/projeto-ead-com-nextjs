import Capitulo from "../models/Capitulo";

const capitulos: Capitulo[] = [
  {
    id: 1007,
    titulo: "Introdução",
    ordem: 1,
    aulas: [
      {
        ordem: 1,
        titulo: "Bem-vindos ao Curso de React",
        duracao: 60 * 5,  // 5 minutos
        videoUrl: "https://www.youtube.com/embed/Ke90Tje7VS0"  // Exemplo de vídeo do Cod3r
      },
      {
        ordem: 2,
        titulo: "O que vamos aprender?",
        duracao: 60 * 4,  // 4 minutos
        videoUrl: "https://www.youtube.com/embed/D2pddYyK_4Q"  // Exemplo de vídeo do Cod3r
      }
    ]
  },
  {
    id: 1001,
    titulo: "Fundamentos do React",
    ordem: 2,
    aulas: [
      {
        ordem: 3,
        titulo: "Configurando o ambiente para React",
        duracao: 60 * 6,  // 6 minutos
        videoUrl: "https://www.youtube.com/embed/pPzBdyjeaDg"  // Exemplo de vídeo do Cod3r
      },
      {
        ordem: 4,
        titulo: "Criando seu primeiro projeto React",
        duracao: 60 * 7,  // 7 minutos
        videoUrl: "https://www.youtube.com/embed/dVgC0AgiImk"  // Exemplo de vídeo do Cod3r
      },
      {
        ordem: 5,
        titulo: "Entendendo JSX",
        duracao: 60 * 5,  // 5 minutos
        videoUrl: "https://www.youtube.com/embed/nf7oJBO5Rrw"  // Exemplo de vídeo do Cod3r
      }
    ]
  },
  {
    id: 1346,
    titulo: "Desafios e Projetos",
    ordem: 3,
    aulas: [
      {
        ordem: 6,
        titulo: "Desafio 1 - Primeiros Passos no React",
        duracao: 60 * 10,  // 10 minutos
        videoUrl: "https://www.youtube.com/embed/tszHnFYxu3Q"  // Exemplo de vídeo do Cod3r
      },
      {
        ordem: 7,
        titulo: "Desafio 2 - Criando um To-Do List",
        duracao: 60 * 12,  // 12 minutos
        videoUrl: "https://www.youtube.com/embed/cjMlKoVK8QA"  // Exemplo de vídeo do Cod3r
      },
      {
        ordem: 8,
        titulo: "Desafio 3 - Trabalhando com Hooks",
        duracao: 60 * 11,  // 11 minutos
        videoUrl: "https://www.youtube.com/embed/LZ55zYYcF1k"  // Exemplo de vídeo do Cod3r
      }
    ]
  }
];

export default capitulos;
