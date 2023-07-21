// ####################################
// ##### ----- Subject List ----- #####
// ####################################

let subjects = [
  'English',
  'Digital Technology',
  'Math',
  'Science',
]

function showSubjects() {
  // Show all the subjects
  alert(subjects)
}

function addSubject() {
  //Keep asking which subjects they want to add until told to stop.
  while(newSubject!= 'stop'){
    let newSubject = prompt('What subject do you want to add?')
    subjects.push(newSubject)
  }
}

function removeSubject() { 
  //Keep asking which subjects they want to delete until told to stop.
  let deleteNumber = prompt('Which subject do you want to delete?')
  while(deleteNumber!= 'stop'){
    subjects.splice(index, 1)
  }
}
