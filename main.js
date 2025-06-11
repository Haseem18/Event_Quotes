const authors = [
  {
    name: "Albert Einstein",
    quote: "Life is like riding a bicycle. To keep your balance, you must keep moving.",
    image: "img/author-1.jpg"
  },
  {
    name: "Maya Angelou",
    quote: "If you don't like something, change it. If you can't change it, change your attitude.",
    image: "img/author-2.jpg"
  },
  {
    name: "Oscar Wilde",
    quote: "Be yourself; everyone else is already taken.",
    image: "img/author-3.jpg"
  },
  {
    name: "Steve Jobs",
    quote: "Innovation distinguishes between a leader and a follower.",
    image: "img/author-4.jpg"
  },
  {
    name: "Marie Curie",
    quote: "Nothing in life is to be feared, it is only to be understood.",
    image: "img/author-5.jpg"
  },
  {
    name: "Mark Twain",
    quote: "The secret of getting ahead is getting started.",
    image: "img/author-6.jpg"
  },
  {
    name: "Nelson Mandela",
    quote: "It always seems impossible until it's done.",
    image: "img/author-7.jpg"
  },
  {
    name: "Jane Austen",
    quote: "There is no charm equal to tenderness of heart.",
    image: "img/author-8.jpg"
  },
  {
    name: "Leonardo da Vinci",
    quote: "Learning never exhausts the mind.",
    image: "img/author-9.jpg"
  },
  {
    name: "Helen Keller",
    quote: "The only thing worse than being blind is having sight but no vision.",
    image: "img/author-10.webp"
  }
];

const authorPicElement = document.querySelector(".author_pic");
const authorNameElement = document.querySelector(".author_name");
const authorQuoteElement = document.querySelector(".author_quote");
const previousElement = document.querySelector(".previous");
const nextElement = document.querySelector(".next");
const popUpElement = document.querySelector("#pop_up_modal");
const popUpContainer = document.querySelector(".pop_up_container")
const warnMsgElement = document.querySelector(".warn_msg");

let authorIndex = 0;

const generateAuthor = () => {
  const { name, quote, image } = authors[authorIndex];

  authorPicElement.src = image;
  authorNameElement.innerHTML = name;
  authorQuoteElement.innerHTML = quote;
}

generateAuthor();

const showModal = (msg) => {
  popUpElement.classList.add("active");
  warnMsgElement.innerHTML = msg;
}

const generatePrevAuthor = () => {
  if (authorIndex === 0) {
    showModal("This is Your First Quote");
    return;
  }
  authorIndex--;
  generateAuthor();
}

const generateNextAuthor = () => {
  if (authorIndex === authors.length - 1) {
    showModal("This is Your Last Quote")
    return;
  }
  authorIndex++;
  generateAuthor();
}

const handleArrowtKey = (event) => {
  if (event.key === "ArrowRight") {
    generateNextAuthor();
  } else if (event.key === "ArrowLeft") {
    generatePrevAuthor();
  }
}

const hidePopUp = (event) => {
  if (event.target.id === "pop_up_modal" || event.target.innerHTML === "X") {
    popUpElement.classList.remove("active");
  }
} 

previousElement.addEventListener("click", generatePrevAuthor);
nextElement.addEventListener("click", generateNextAuthor);
document.body.addEventListener("keyup", handleArrowtKey);
popUpElement.addEventListener("click", hidePopUp);