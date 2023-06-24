// #####################################
// #### ----- Subject Details ----- ####
// #####################################

let subject = {
  name: 'DigiTech',
  room: 'Room 9',
  students: 150,
  teacher: 'Random middle-aged man',
  nameofteacher : 'newteacher',
}

function showSubject() {
  alert(subject.room)
}

function changeSubject() {
  let newName = 'Typing Skills'

  subject.name = newName
}

function changeTeacher() [
  let newteacher = prompt('What is the name of the new teacher?')
  name = newteacher
]