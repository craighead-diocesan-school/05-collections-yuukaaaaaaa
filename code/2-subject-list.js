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
  alert(subjects)
}

function addSubject() {

  while(newSubject!= 'stop'){
    let newSubject = prompt('What subject do you want to add?')
    subjects.push(newSubject)
  }
}

function removeSubject() { 
  let deleteNumber = prompt('Which subject do you want to delete?')
  while(deleteNumber != stop){
  subjects.splice(index, 1)
  }

  

  // remove 1 item at the index position of the subjects array
  
}
