// CRIAÇÃO DAS CONSTANTES CARDS - SELEÇÃO DOS ELEMENTOS COM O CONTEÚDO DO CARD
const sectionCards = document.querySelector("section.cards");

const card = document.querySelector("div.card");

// DEFINIÇÃO DO ARRAY QUE RECEBERÁ DIFERENTES VALORES PARA A EXIBIÇÃO DO CARD
const videos = [
  {
    title: "DEFINIÇÃO DE HTML - Dicionário do Programador | Código Fonte TV",
    duration: "9 min",
    thumb: "https://i.ytimg.com/vi/4dQtz1PpY9A/hqdefault.jpg",
    video_id: "4dQtz1PpY9A"
  },
  {
    title: "O QUE É CSS? (PROPRIEDADES, SELETORES, ETC) | Rafaella Ballerini",
    duration: "10 min",
    thumb: "https://i.ytimg.com/vi/LWU2OR19ZG4/hqdefault.jpg",
    video_id: "LWU2OR19ZG4"
  },
  {
    title: "O que o JavaScript é capaz de fazer? | Curso em Vídeo",
    duration: "28 min",
    thumb: "https://i.ytimg.com/vi/Ptbk2af68e8/hqdefault.jpg",
    video_id: "Ptbk2af68e8"
  },
  {
    title: "APRENDA PHP EM 10 MINUTOS | Danki Code",
    duration: "15 min",
    thumb: "https://i.ytimg.com/vi/NhUFUfzZowM/hqdefault.jpg",
    video_id: "NhUFUfzZowM"
  },
  {
    title: "O que Estudar p/ Trabalhar com Python | Dev Aprender",
    duration: "14 min",
    thumb: "https://i.ytimg.com/vi/Dp-biEtYiO4/hqdefault.jpg",
    video_id: "Dp-biEtYiO4"
  },
  {
    title: "O que é o Java? (História e Evolução) | Alura Cursos Online",
    duration: "11 min",
    thumb: "https://i.ytimg.com/vi/90NcVNsKGik/hqdefault.jpg",
    video_id: "90NcVNsKGik"
  }
];

// CLONAGEM DO CARD PRINCIPAL E INSERÇÃO DE CARDS COMS OS VALORES PRÉ-DEFINIDOS NA ARRAY
videos.map(video => {
  const cardClone = card.cloneNode(true);
  cardClone.setAttribute("id", video.video_id);
  cardClone.querySelector("img").src = video.thumb;
  cardClone.querySelector(".title").innerHTML = video.title;
  cardClone.querySelector(".info > p.text--medium").innerHTML =
    video.duration;
  sectionCards.appendChild(cardClone);
});

card.remove();


// AÇÕES DO MODAL (CAIXA DE EXIBIÇÃO DOS VÍDEOS)
const modalOverlay = document.querySelector(".modal-overlay");
const modal = document.querySelector(".modal");
const cards = [...document.querySelectorAll(".cards .card")];

// É FEITO A ALTERAÇÃO DOS VÍDEOS POR MEIO DO ID, O QUAL É INCLUSO NO URL DO YOUTUBE
cards.forEach(card => {
  card.addEventListener("click", () => {
    modal.querySelector(
      "iframe"
    ).src = `https://www.youtube.com/embed/${card.getAttribute("id")}`;
    modalOverlay.classList.add("active");
    modal.classList.add("active");
    document.querySelector("body").style.overflow = "hidden";
  });
});

document.querySelector(".close-modal").addEventListener("click", () => {
  modalOverlay.classList.remove("active");
  modal.classList.remove("active");
  modal.querySelector("iframe").src = ``;
  document.querySelector("body").style.overflow = "initial";
});