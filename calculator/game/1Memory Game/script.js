const cardsArray = [
    {
      name: 'apple',
      img: 'images/apple.png',
    },
    {
      name: 'banana',
      img: 'images/banana.png',
    },
    {
      name: 'cherry',
      img: 'images/cherry.png',
    },
    {
      name: 'grape',
      img: 'images/grape.png',
    },
    {
      name: 'kiwi',
      img: 'images/kiwi.png',
    },
    {
      name: 'orange',
      img: 'images/orange.png',
    },
    {
      name: 'peach',
      img: 'images/peach.png',
    },
    {
      name: 'strawberry',
      img: 'images/strawberry.png',
    },
  ];
  
  const gameBoard = document.querySelector('.game-board');
  const restartButton = document.querySelector('.restart-button');
  let cardsChosen = [];
  let cardsChosenIds = [];
  let cardsWon = [];
  
  function createBoard() {
    cardsArray.sort(() => 0.5 - Math.random());
    for (let i = 0; i < cardsArray.length; i++) {
      const card = document.createElement('div');
      card.classList.add('card');
      card.setAttribute('data-id', i);
      card.addEventListener('click', flipCard);
      const cardImg = document.createElement('img');
      cardImg.setAttribute('src', 'images/blank.png');
      cardImg.setAttribute('data-name', cardsArray[i].name);
      card.appendChild(cardImg);
      gameBoard.appendChild(card);
    }
  }
  
  function flipCard() {
    const cardId = this.getAttribute('data-id');
    cardsChosen.push(cardsArray[cardId].name);
    cardsChosenIds.push(cardId);
    this.firstChild.setAttribute('src', cardsArray[cardId].img);
    this.classList.add('flipped');
    if (cardsChosen.length === 2) {
      setTimeout(checkForMatch, 500);
    }
  }
  
  function checkForMatch() {
    const cards = document.querySelectorAll('.card');
    const optionOneId = cardsChosenIds[0];
    const optionTwoId = cardsChosenIds[1];
   
  }
  