function tellAJoke() {
  const randJoke = Math.floor(Math.random() * 20);
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
      break;
    case 4:
      return "Database Admins walked into a NoSQL bar. A little later, they walked out because they couldn’t find a table.";
      break;
    case 5:
      return "Why did the geek add body { padding-top: 1000px; } to his Facebook profile? He wanted to keep a low profile.";
      break;
    case 6:
      return "Programmer’s girlfriend: “Are you going to sit and type in front of that thing all day or are you going out with me? Programmer: Yes.";
      break;
    case 7:
      return "If someone from the 1950s suddenly appeared, what would be the most difficult thing to explain about life today? One answer: I possess a device in my pocket that is capable of accessing the entirety of information known to man. I use it to look at pictures of cats and get into arguments with strangers.";
      break;
    case 8:
      return "What is the biggest lie in the entire universe? I have read and agree to the Terms & Conditions.";
      break;
    case 9:
      return "I was setting a voice recognition password for my new phone and a nearby dog barked and ran away. Now I am still looking for the dog to unlock my phone.";
      break;
    case 10:
      return "I Renamed my iPod The Titanic, so when I plug it in, it says, “The Titanic is syncing.”";
      break;
    case 11:
      return "Where is the best place to hide something? Page two of Google Search.";
      break;
    case 12:
      return "Password looks at itself in the mirror: Don't listen to Google. You are a strong, confident password.";
      break;
    case 13:
      return "Autocorrect has become my worst enema.";
      break;
    case 14:
      return "Set your wifi password to 2444666668888888. So when someone asks for it, tell them it's 12345678.";
      break;
    case 15:
      return "The cool part about naming your kid is you don’t have to add six numbers to make sure the name is available.";
      break;
    case 16:
      return "How many programmers does it take to change a light bulb? None, because it is a hardware problem.";
      break;
    case 17:
      return "How many types of people are there in the world? There are 10 types of people in the world: those who understand binary and those who do not.";
      break;
    case 18:
      return "Entered what I ate today into my new fitness app and it just sent an ambulance to my house.";
      break;
    case 19:
      return "An SEO expert walks into a bar, bars, pub, tavern, public house, Irish pub, drinks, beer, alcohol";
      break;
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
