// ##################################
// ##### ----- Future Job ----- #####
// ##################################

let jobs = [
  'astronaut',
  'firefighter',
  'police officer',
  'space doctor',
  'chief',
  'teacher',
]

function getJob() {
  let index = Math.floor(Math.random() * 5)

  alert('Your future job will be ' + jobs[index])
}
