const game = () => {
    let pScore = 0;
    let cScore = 0;
  
    //Zaczynam gre
    const startGame = () => {
      const playBtn = document.querySelector(".intro button");
      const introScreen = document.querySelector(".intro");
      const match = document.querySelector(".match");
  
      playBtn.addEventListener("click", () => {
        introScreen.classList.add("fadeOut");
        match.classList.add("fadeIn");
      });
    };
    //Rozgrywka
    const playMatch = () => {
      const options = document.querySelectorAll(".options button");
      const playerHand = document.querySelector(".player-hand");
      const computerHand = document.querySelector(".computer-hand");
      const hands = document.querySelectorAll(".hands img");
  
      hands.forEach(hand => {
        hand.addEventListener("animationend", function() {
          this.style.animation = "";
        });
      });
      //Opcje przeglądarki 
      const computerOptions = ["Kamień", "Papier", "Nożyce"];
  
      options.forEach(option => {
        option.addEventListener("click", function() {
          //Wybór przeglądarki
          const computerNumber = Math.floor(Math.random() * 3);
          const computerChoice = computerOptions[computerNumber];
  
          setTimeout(() => {
            //Porównanie ruchów
            compareHands(this.textContent, computerChoice);
            //Update zdjęć
            playerHand.src = `./obrazy/${this.textContent}.png`;
            computerHand.src = `./obrazy/${computerChoice}.png`;
          }, 1000);
          //Animacja
          playerHand.style.animation = "shakePlayer 2s ease";
          computerHand.style.animation = "shakeComputer 2s ease";
        });
      });
    };
  
    const updateScore = () => {
      const playerScore = document.querySelector(".player-score p");
      const computerScore = document.querySelector(".computer-score p");
      playerScore.textContent = pScore;
      computerScore.textContent = cScore;
    };
  
    const compareHands = (playerChoice, computerChoice) => {
      //Update napisu
      const winner = document.querySelector(".winner");
      //Sprawdznie czy remis
      if (playerChoice === computerChoice) {
        winner.textContent = "Remis";
        return;
      }
      //Sprawdzania czy kamień
      if (playerChoice === "Kamień") {
        if (computerChoice === "Nożyce") {
          winner.textContent = "Gracz wygrywa";
          pScore++;
          updateScore();
          return;
        } else {
          winner.textContent = "Przeglądarka wygrywa";
          cScore++;
          updateScore();
          return;
        }
      }
      //Sprawdzanie czy papir
      if (playerChoice === "Papier") {
        if (computerChoice === "Nożyce") {
          winner.textContent = "Przeglądarka wygrywa";
          cScore++;
          updateScore();
          return;
        } else {
          winner.textContent = "Gracz wygrywa";
          pScore++;
          updateScore();
          return;
        }
      }
      //Sprawdzanie czy nożyce
      if (playerChoice === "Nożyce") {
        if (computerChoice === "Kamień") {
          winner.textContent = "Przeglądarka wygrywa";
          cScore++;
          updateScore();
          return;
        } else {
          winner.textContent = "Gracz wygrywa";
          pScore++;
          updateScore();
          return;
        }
      }
    };
  
    //wywolanie funkcji
    startGame();
    playMatch();
  };
  
  //rozpoczecie gry
  game();