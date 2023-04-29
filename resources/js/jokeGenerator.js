function tellAJoke() {
  const randJoke = Math.floor(Math.random() * 3);
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
  }
}


const jokeButton = document.getElementById('joke-button');
const jokeContainer = document.getElementById('joke-container');
const jokeText = document.getElementById('joke-text');
const closeButton = document.getElementById('close-joke');

function showJoke() {
  
  jokeContainer.style.display = 'flex';
  jokeText.innerHTML = tellAJoke();
}

function closeJoke() {
  jokeContainer.style.display = 'none';
}

jokeButton.addEventListener('click',showJoke);
jokeButton.addEventListener('touch',showJoke);

closeButton.addEventListener('click',closeJoke);
closeButton.addEventListener('click',closeJoke);

//close joke on esc keydown
document.addEventListener('keydown',(e) => {
  if (e.key == "Escape") {
    closeJoke();
  }
});