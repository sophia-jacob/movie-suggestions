  const movies = {
    action: ["Inception", "Mad Max: Fury Road", "John Wick"],
    comedy: ["The Grand Budapest Hotel", "Superbad", "The Nice Guys"],
    drama: ["The Shawshank Redemption", "Marriage Story", "Moonlight"]
  };

  function chooseRandom() {
    const selectedTopic = document.getElementById("topicSelect").value;
    const list = movies[selectedTopic];

    if (list && list.length > 0) {
      const randomIndex = Math.floor(Math.random() * list.length);
      const choice = list[randomIndex];
      document.getElementById("output").innerHTML = "You got: " + choice;
    } else {
      document.getElementById("output").textContent = "No movies found for that topic.";
    }
  }
