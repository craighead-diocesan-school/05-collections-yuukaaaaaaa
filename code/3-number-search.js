// #####################################
// ##### ----- Number Search ----- #####
// #####################################

let numberArray = [
  1,
  100,
  1000,
  10000,
  100000,
  1000000,
  10000000,
  1234567890,
  99999,
  88888
]

function searchNumbers() {
  let searchTarget = Number(prompt('What number do you want to search?'))
  let searchResult = false
  for (let currentNumber of numberArray) {
    if (currentNumber == searchTarget) {
      searchResult = true 
    }
  }

  if (searchResult == true){
    alert('Yay!' + searchTarget + ' was found! ')
  } else{
    alert('Unfortunately,' + searchTarget + ' was not found...')
  }
}
