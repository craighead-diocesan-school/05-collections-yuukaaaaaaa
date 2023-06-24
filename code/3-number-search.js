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
  1234567890
]

function searchNumbers() {
  let searchTarget = Number(prompt('What number do you want to search?'))

  for (let currentNumber of numberArray) {
    if (currentNumber == searchTarget) {
      searchResult = true
      alert(searchTarget + ' found: ' + searchResult)
    }
    else{
      searchResult = false
      alert(searchTarget + ' not found: ' + searchResult)
    }
  }
}
