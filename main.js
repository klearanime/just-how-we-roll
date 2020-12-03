/**********
 * DATA *
 **********/

const sixes = [8, 3];
const doubleSixes = [8, 3];
const twelves = [8, 3];
const twenties = [8, 3];


/********************
 * HELPER FUNCTIONS *
********************/

const getRandomNumber = function(max) {
    const rand = Math.random();
    const range = rand * max;
    const result = Math.ceil(range);
    return result;
  }
  
  const sortByNumber = function(arr) {
    const byNumber = function(item1, item2) {
      return item1 - item2;
    }
    return arr.slice().sort(byNumber);
  }
  
  
  /****************
   * MATH SECTION *
   ****************/
  
  const mean = function (array) {
    let average = 0
    let sum = 0
    let arrLength = array.length
    for (number of array) {
      sum = sum + number
      average = sum / arrLength
    }
    rollResult.push(average)
    return (average)
  }
  
  
  const median = function (array) {
    array = sortByNumber(array)
    let middleCharacter = Math.floor(array.length / 2)
    rollResult.push(middleCharacter)
    return (middleCharacter)
  }
  
  
  const mode = function () { 
  
  }


/***************
 *   Queries   *
 ***************/

const d6Die = document.querySelector('#d6-roll')
d6Die.src = 'images/start/d6.png'

const d6Die1 = document.querySelector('#double-d6-roll-1')
d6Die1.src = './images/start/d6.png'

const d6Die2 = document.querySelector('#double-d6-roll-2.d6.roll')
d6Die2.src = './images/start/d6.png'

const d12Die = document.querySelector('#d12-roll.roll')
d12Die.src = './images/start/d12.jpeg'

const d20Die = document.querySelector('#d20-roll.roll')
d20Die.src = './images/start/d20.jpg'

const resetButton = document.querySelector('#reset-button') 

const mean6 = document.querySelector('#d6-rolls-mean')
const median6 = document.querySelector('#d6-rolls-median')
const mode6 = document.querySelector('#d6-rolls-mode')

const d6Mean = document.querySelector('#double-d6-rolls-mean')
const d6Median = document.querySelector('#double-d6-rolls-median')
const d6Mode = document.querySelector('#double-d6-rolls-mode')

const d12Mean = document.querySelector('#d12-rolls-mean')
const d12edian = document.querySelector('#d12-rolls-median')
const d12Mode = document.querySelector('#d12-rolls-mode')

const d20Mean = document.querySelector('#d12-rolls-mean')
const d20Median = document.querySelector('#d12-rolls-median')
const d20Mode = document.querySelector('#d12-rolls-mode')


/*******************
 * YOUR CODE BELOW *
 *******************/

// for image recognition in functions
let numbersImgSource = './images/numbers/'

let rollResult = []

const dice6Roll = function () {
  let result = getRandomNumber(6);
  let png = d6Die + `${result}.png`
  d6Die.src = png
  mean6.innerText = mean(rollResult)
  median6.innerText = median(rollResult)
  rollResult.push(result)
}

const double6Dice1Roll = function () {
  let result = getRandomNumber(6);
  let png = d6Die + `${result}.png`
  d6Die1.src = png
  d6Mean.innerText = mean(rollResult)
  d6Median.innerText = median(rollResult)
  double6Dice2Roll()
  rollResult.push(result)
}

const double6Dice2Roll = function () {
  let result = getRandomNumber(6);
  let pngImage = d6Die + `${result}.png`
  d6Die2.src = pngImage
  rollResult.push(result)
}


const twelvesDiceRoll = function () {
  let result = getRandomNumber(12)
  let pngImage = numbersImgSource + `${result}.png`
  d12Die.src = pngImage
}


const die20Roll = function () {
  let result = getRandomNumber(20)

  let pngImg = numbersImgSource + `${result}.png`

  d20Die.src = pngImg
}


/******************
 * RESET FUNCTION *
 ******************/

const reset = function () {
  sixes.length = 0;
  doubleSixes.length = 0;
  twelves.length = 0;
  twenties.length = 0;

  //  reset text in mean median mode text
  mean6.innerText = ''
  median6.innerText = ''
  mode6.innerText = ''

  // spaces in text
  d6Mean.innerText = '\n'
  d6Median.innerText = '\n'
  d6Mode.innerText = '\n'

  d12Mean.innerText = '\n'
  d12Median.innerText = '\n'
  d12Mode.innerText = '\n'

  d20ean.innerText = '\n'
  d20Median.innerText = '\n'
  d20Mode.innerText = '\n'
}
reset()



/*******************
 * EVENT LISTENERS *
 *******************/

resetButton.addEventListener('click', reset)

d6Die.addEventListener('click', dice6Roll)

doubleDiceImages.addEventListener('click', double6Dice1Roll)

doubleDiceImages.addEventListener('click', double6Dice2Roll)



