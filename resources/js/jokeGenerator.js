function tellAJoke() {
  const randJoke = Math.floor(Math.random() * 7);
  switch (randJoke) {
    case 0:
      return "Don't use \"beef stew\" as a computer password. It's not stroganoff.";
      break;
    case 1:
      return "Have you heard of that new band \"1023 Megabytes\"? They're pretty good, but they don't have a gig just yet.";
      break;
    case 2:
      return "Whoever said that the definition of insanity is doing the same thing over and over again and expecting different results has obviously never had to reboot a computer. —William Petersen";
      break;
    case 3:
      return "Where did the software developer go? He probably ransomware!";
    case 4:
      return "Database Admins walked into a NoSQL bar. A little later, they walked out because they couldn’t find a table.";

    case 5:
      return "Why did the geek add body { padding-top: 1000px; } to his Facebook profile? He wanted to keep a low profile.";
    case 6:
      return "Programmer’s girlfriend: “Are you going to sit and type in front of that thing all day or are you going out with me? Programmer: Yes.";
  }
}

const jokeButton = document.getElementById("joke-button");
const jokeContainer = document.getElementById("joke-container");
const jokeText = document.getElementById("joke-text");
const closeButton = document.getElementById("close-joke");

function showJoke() {
  jokeContainer.style.display = "flex";
  jokeText.innerHTML = tellAJoke();
}

function closeJoke() {
  jokeContainer.style.display = "none";
}

jokeButton.addEventListener("click", showJoke);
jokeButton.addEventListener("touch", showJoke);

closeButton.addEventListener("click", closeJoke);
closeButton.addEventListener("touch", closeJoke);

//close joke on esc keydown
document.addEventListener("keydown", (e) => {
  if (e.key == "Escape") {
    closeJoke();
  }
});
