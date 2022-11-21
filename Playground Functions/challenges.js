// Desafio 1
function compareTrue(bool1, bool2) {
  let resultado
  if (bool1 === true && bool2 === true) {
    resultado = true;
  } else {
    resultado = false;
  }
  return resultado;
};

// Desafio 2
function calcArea(base, height) {
  const area = (base * height) / 2
  return area;
};

// Desafio 3
function splitSentence(phrase) {
  const arrayPhrase = phrase.split(' ');
  return arrayPhrase;
};

// Desafio 4
function concatName(arrayNames) {
  let firstName;
  let lastName;
  for (let i = 0; i <= arrayNames.length; i++) {

    if (i == 0) {

      firstName = arrayNames[i];
    } else if (i == arrayNames.length - 1) {
      lastName = arrayNames[i];
    }
  }

  return `${lastName}, ${firstName}`;
};

// Desafio 5
function footballPoints(wins, ties) {
  totalScore = (wins * 3) + ties
  return totalScore;
};

// Desafio 6
function highestCount(array) {
  let repeats = 0;
  let highestNum = array[0];

  //verifica maior numero
  for (let numero of array) {
    if (numero >= highestNum) {
      highestNum = numero;
    }
  }


  //conta quantas vezes o numero aparece
  for (let numero of array) {
    if (numero == highestNum) {
      repeats += 1;
    }
  }
  return repeats;
};

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distanceCat1 = Math.abs(cat1 - mouse);
  let distanceCat2 = Math.abs(cat2 - mouse);
  let result;
  if (distanceCat1 == distanceCat2) {
    result = `os gatos trombam e o rato foge`;
  } else if (distanceCat2 > distanceCat1) {
    result = 'cat1'
  } else {
    result = 'cat2'
  }
  return result;
};

// Desafio 8
function fizzBuzz(array) {

  for (let i = 0; i < array.length; i++) {
    if (array[i] % 3 == 0 && array[i] % 5 == 0) {
      array[i] = 'fizzBuzz';
    } else if (array[i] % 3 == 0) {
      array[i] = 'fizz';
    } else if (array[i] % 5 == 0) {
      array[i] = 'buzz'
    } else {
      array[i] = 'bug!'
    };
  }
  return array;
}

// Desafio 9
function encode(phrase) {
  phraseArray = phrase.split('')
  for (let i = 0; i < phraseArray.length; i++) {
    if (phraseArray[i] == 'a') {
      phraseArray[i] = '1'
    } else if (phraseArray[i] == 'e') {
      phraseArray[i] = '2'
    } else if (phraseArray[i] == 'i') {
      phraseArray[i] = '3'
    } else if (phraseArray[i] == 'o') {
      phraseArray[i] = '4'
    } else if (phraseArray[i] == 'u') {
      phraseArray[i] = '5'
    };
  }
  let phraseJoin = phraseArray.join('');
  return phraseJoin;
};

function decode(phrase) {
  phraseArray = phrase.split('')
  for (let i = 0; i < phraseArray.length; i++) {
    if (phraseArray[i] == 1) {
      phraseArray[i] = 'a'
    } else if (phraseArray[i] == 2) {
      phraseArray[i] = 'e'
    } else if (phraseArray[i] == 3) {
      phraseArray[i] = 'i'
    } else if (phraseArray[i] == 4) {
      phraseArray[i] = 'o'
    } else if (phraseArray[i] == 5) {
      phraseArray[i] = 'u'
    }
  }
  let phraseJoin = phraseArray.join('');
  return phraseJoin
};

// Desafio 10
function techList(arrayTech, name) {
  objectArray = [];
  if (arrayTech.length == 0 || name == '') {
    return "Vazio!"
  } else {

    for (let tech of arrayTech.sort()) {
      objectArray.push(
        {
          tech: tech,
          name: name
        }
      );
    };
    return objectArray;
  }
}



module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
  techList,
}
