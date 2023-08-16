document.addEventListener("DOMContentLoaded", function () {
    const greetings = ["","","","","Jacobus", "Hermanus","Marco", "Smit"];
    let currentGreetingIndex = 0;
  
    const greetingElement = document.getElementById("greeting");
    const landingContainer = document.querySelector(".landing-container");
    const loadingContainer = document.querySelector(".loading-container");
    const cvContainer = document.querySelector(".cv-container");
  
    function displayNextGreeting() {
      if (currentGreetingIndex < greetings.length) {
        greetingElement.textContent = greetings[currentGreetingIndex];
        currentGreetingIndex++;
      } else {
        clearInterval(greetingInterval);
        showCV();
      }
    }
  
    function showCV() {
      // Pause the audio
      const loadingAudio = document.getElementById("loadingAudio");
      loadingAudio.pause();
    
      landingContainer.style.display = "none";
      loadingContainer.style.display = "flex";
    
      setTimeout(function () {
        loadingContainer.style.display = "none";
        cvContainer.style.display = "block";
      }, 500);
    }
    
  
    const greetingInterval = setInterval(displayNextGreeting, 1000);
  });
  