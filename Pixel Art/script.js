const colors = document.querySelectorAll('.color');
const buttonRandomColor = document.querySelector('#button-random-color');
const pixelBoard = document.getElementById('pixel-board');
const clearButton = document.getElementById('clear-board');

// #region EXECUTAR CORES
// Funcao para criar cor aleatoria
const randomBackgroundColor = () => {
  const x = Math.floor(Math.random() * 256);
  const y = Math.floor(Math.random() * 256);
  const z = Math.floor(Math.random() * 256);
  const bgColor = `rgb(${x},${y},${z})`;
  return bgColor;
};

const setButtonColor = () => {
  const arrayColor = [];

  for (let i = 1; i < colors.length; i += 1) {
    colors[i].style.backgroundColor = randomBackgroundColor();
    arrayColor.push(colors[i].style.backgroundColor);
  }
  localStorage.setItem('colorPalette', JSON.stringify(arrayColor));
};

const getOlderColors = () => {
  const buttonGroup = JSON.parse(localStorage.getItem('colorPalette'));
  if (buttonGroup == null) {
    setButtonColor();
  } else {
    for (let i = 1; i < 4; i += 1) {
      colors[i].style.backgroundColor = buttonGroup[i - 1];
    }
  }
};

// ADD TO INIT
getOlderColors();

buttonRandomColor.addEventListener('click', () => {
  setButtonColor();
});

// #endregion
const boardGenerator = () => {
  for (let x = 1; x <= 5; x += 1) {
    const pixelLine = document.createElement('div');
    pixelBoard.appendChild(pixelLine);

    for (let y = 1; y <= 5; y += 1) {
      const pixelCol = document.createElement('div');
      pixelCol.className = 'pixel';
      pixelLine.appendChild(pixelCol);
    }
  }
};
// ADD TO INIT
boardGenerator();

// const handleSelectedClass = () => {
//   for (let i = 0; i < colors.length; i += 1) {
//     colors[i].addEventListener('click', (event) => {
//       const select = document.querySelector('.selected');
//       select.classList.remove('selected');

//       event.target.classList.add('selected');
//     });
//   }
// };

function addSelectedClass(event) {
  const handleSelected = document.querySelector('.selected');
  handleSelected.classList.remove('selected');
  event.target.classList.add('selected');
}

function addListening() {
  for (let i = 0; i < colors.length; i += 1) {
    colors[i].addEventListener('click', addSelectedClass);
  }
}

// ADD TO INIT
addListening();

const arrayPixel = document.querySelectorAll('.pixel');

function pixelColors() {
  const arrayPixelColors = [];

  for (let i = 0; i < arrayPixel.length; i += 1) {
    arrayPixelColors.push(
      window
        .getComputedStyle(document.getElementsByClassName('pixel')[i], null)
        .getPropertyValue('background-color')
    );
    localStorage.setItem('pixelBoard', JSON.stringify(arrayPixelColors));
  }
}

const getOlderPixelColors = () => {
  const getPixelColors = JSON.parse(localStorage.getItem('pixelBoard'));
  if (getPixelColors !== null) {
    for (let i = 0; i < arrayPixel.length; i += 1) {
      arrayPixel[i].style.backgroundColor = getPixelColors[i];
    }
  }
};
getOlderPixelColors();

const paintPixel = (event) => {
  const selectedColor = document.querySelector('.selected');
  const cssSelectedColor = window.getComputedStyle(selectedColor, null);
  const bgColor = cssSelectedColor.getPropertyValue('background-color');
  // eslint-disable-next-line no-param-reassign
  event.style.backgroundColor = bgColor;
};

for (let i = 0; i < arrayPixel.length; i += 1) {
  arrayPixel[i].addEventListener('click', (event) => {
    paintPixel(event.target);
    pixelColors();
  });
}

// #region CLEAR BOARD
function clearBoard() {
  for (let i = 0; i < arrayPixel.length; i += 1) {
    arrayPixel[i].style.backgroundColor = 'rgb(255,255,255)';
  }
}

function clearBoardListener() {
  clearButton.addEventListener('click', clearBoard);
}
clearBoardListener();

// #endregion

function saveBoard() {
  localStorage.setItem('pixelBoard', JSON.stringify(arrayPixel));
}
saveBoard();

// for (let i = 0; i < arrayPixel.length; i += 1) {
//   arrayPixel[i].style.backgroundColor = arrayPixelColors[i];
// }

window.onload = function () {
  pixelColors();
};
