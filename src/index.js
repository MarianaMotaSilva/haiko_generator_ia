function generateHaiku(event) {
  event.preventDefault();

  new Typewriter("#haiku", {
    strings: "The earth shakes, just enough, to remind us.",
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

let haikuFormElement = document.querySelector("#haiku-generator-form");
haikuFormElement.addEventListener("submit", generateHaiku);
