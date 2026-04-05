/**
 * Slide data. You can replace this with your own data or fetch it from an API.
 */
const slides = [
  {
    title: "Incididunt elit",
    text: "Et nostrud irure minim laboris adipisicing adipisicing sunt sint anim cupidatat aliquip incididunt.",
    image: "src/img/feature-1.png",
  },
  {
    title: "Consectetur adipisicing",
    text: "Magna enim do aute ut consequat culpa officia. In do excepteur exercitation est.",
    image: "src/img/feature-2.png",
  },
  {
    title: "Irure mollit",
    text: "Exercitation dolore eiusmod esse aliquip veniam. Officia duis ut adipisicing eiusmod ullamco dolor minim.",
    image: "src/img/feature-3.png",
  },
  {
    title: "Cillum dolor est",
    text: "Reprehenderit qui eiusmod commodo aliquip dolore nisi in ea veniam ut sunt. Cillum irure nostrud adipisicing ullamco magna excepteur.",
    image: "src/img/feature-4.png",
  },
];

/**
 * Initializes the carousel by rendering the slides and setting up event listeners for navigation buttons.
 */
function init() {
  const imagesContainer = document.getElementById("images-container");
  const textsContainer = document.getElementById("texts-container");

  const angles = ["rotate-180", "rotate-90", "-rotate-90", ""];
  slides.forEach((slide, index) => {
    imagesContainer.insertAdjacentHTML("beforeend", "<div></div>");

    imagesContainer.insertAdjacentHTML(
      "beforeend",
      `
        <div>
          <img class="w-full h-full ${angles[index]}" src="${slide.image}" alt="${slide.title}" />
        </div>
      `
    );

    textsContainer.insertAdjacentHTML(
      "beforeend",
      `
        <div class="px-6">
          <h3 class="text-xl font-bold text-white mb-3">${slide.title}</h3>
          <p class="text-gray-200">${slide.text}</p>
        </div>
      `
    );
  });
  imagesContainer.append(document.createElement("div"));
}

/**
 * Current slide index. It keeps track of which slide is currently being displayed in the carousel.
 */
let current = 0;

/**
 * Navigation controls for the carousel. It updates the current slide index and calls the update function to reflect changes in the UI.
 */
const backButton = document.getElementById("back-button");
const nextButton = document.getElementById("next-button");

backButton.addEventListener("click", () => {
  if (current !== 0) {
    current -= 1;
    update();
  }
});

nextButton.addEventListener("click", () => {
  if (current !== slides.length - 1) {
    current += 1;
    update();
  }
});


/**
 * Updates the carousel's current slide and manages the disabled state of navigation buttons based on the current slide index.
*/
function update() {
  const carouselContainer = document.querySelector(".carousel-container");
  carouselContainer.style.setProperty("--current", current);

  if (current === 0) {
    backButton.setAttribute("disabled", "true");
  } else {
    backButton.removeAttribute("disabled");
  }

  if (current === slides.length - 1) {
    nextButton.setAttribute("disabled", "true");
  } else {
    nextButton.removeAttribute("disabled");
  }
}

init();