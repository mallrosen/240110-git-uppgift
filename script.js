// Get  to DOM elements
const gameContainer = document.querySelector('.container');
const userResult = document.querySelector('.user_result img');
const cpuResult = document.querySelector('.cpu_result img');
const result = document.querySelector('.result');
const optionImages = document.querySelectorAll('.option_image');

let languageIsSwedish = false;

// Loop through each option image element
optionImages.forEach((image, index) => {
  image.addEventListener('click', (e) => {
    image.classList.add('active');

    userResult.src = 'img/rock.png';
    cpuResult.src = 'img/rock.png';
    result.textContent = 'Wait...';
    if (languageIsSwedish) {
      result.textContent = 'Vänta snällaaaa...';
    }

    // Loop through each option image again
    optionImages.forEach((image2, index2) => {
      // If the current index doesn't match the clicked index
      // Remove the "active" class from the other option images
      if (index !== index2) {
        image2.classList.remove('active');
      }
    });

    gameContainer.classList.add('start');

    // Set a timeout to delay the result calculation
    const time = setTimeout(() => {
      gameContainer.classList.remove('start');

      // Get the source of the clicked option image
      const imageSrc = e.target.querySelector('img').src;
      // Set the user image to the clicked option image
      userResult.src = imageSrc;

      // Generate a random number between 0 and 2
      const randomNumber = Math.floor(Math.random() * 3);
      // Create an array of CPU image options
      const cpuImages = ['img/rock.png', 'img/paper.png', 'img/scissors.png'];
      // Set the CPU image to a random option from the array
      cpuResult.src = cpuImages[randomNumber];

      // Assign a letter value to the CPU option (R for rock, P for paper, S for scissors)
      const cpuValue = ['R', 'P', 'S'][randomNumber];
      // Assign a letter value to the clicked option (based on index)
      const userValue = ['R', 'P', 'S'][index];

      // Create an object with all possible outcomes
      let outcomes = {
        RR: 'Draw',
        RP: 'Cpu',
        RS: 'User',
        PP: 'Draw',
        PR: 'User',
        PS: 'Cpu',
        SS: 'Draw',
        SR: 'Cpu',
        SP: 'User',
      };
      if (languageIsSwedish) {
        outcomes = {
          RR: 'Oavgjort',
          RP: 'Datorn',
          RS: 'Du',
          PP: 'Oavgjort',
          PR: 'Du',
          PS: 'Datorn',
          SS: 'Oavgjort',
          SR: 'Datorn',
          SP: 'Du',
        };
      }
      // Look up the outcome value based on user and CPU options
      const outComeValue = outcomes[userValue + cpuValue];

      // Display the result
      result.textContent = userValue === cpuValue ? 'Match Draw' : `${outComeValue} Won!!`;
      if (languageIsSwedish) {
        result.textContent = userValue === cpuValue ? 'Oavgjort' : `${outComeValue} Vann!!`;
      }
    }, 2500);
    time();
  });
});

const langRock = document.getElementById('rock');
const langPaper = document.getElementById('paper');
const langScissors = document.getElementById('scissors');
const svFlag = document.getElementById('swedish');
const engFlag = document.getElementById('english');
const funH2 = document.getElementById('funH2');
const playTitle = document.getElementById('playTitle');

engFlag.addEventListener('click', () => {
  languageIsSwedish = false;
  langPaper.innerHTML = 'Paper';
  langRock.innerHTML = 'Rock';
  langScissors.innerHTML = 'Scissors';
  result.innerHTML = "Let's Play!!";
  funH2.innerHTML = 'SOOOO MUCH FUN';
  playTitle.innerHTML = 'Rock Paper Scissors';
});

svFlag.addEventListener('click', () => {
  languageIsSwedish = true;
  langPaper.innerHTML = 'Påse';
  langRock.innerHTML = 'Sten';
  langScissors.innerHTML = 'Sax';
  result.innerHTML = 'Nu kör vi!!';
  funH2.innerHTML = 'Åhh vad roligt!';
  playTitle.innerHTML = 'Sten Sax Påse';
});
