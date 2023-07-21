// #####################################
// #### ----- Subject Details ----- ####
// #####################################

let subject = {
  name: 'DigiTech',
  room: 'Room 9',
  students: 150,
  teacher: 'Random middle-aged man',
}

function showSubject() {
  // Show DigiTech, Room 9
  alert(subject.name + ',' + subject.room)
}

function changeSubject() {
// Ask the name of the new subject and change DigiTech to Typing Skills
  let newName = 'Typing Skills'
  subject.name = newName
}

function changeTeacher() [
  // Ask the name of the new teacher and change Random middle-aged man to the answer
  let newTeacher = prompt('What is the name of the new teacher?')
  subject.teacher = newTeacher
]