let answer = 0
let length = 0

document.getElementById('button').addEventListener('click', multiplication)

function multiplication () {
  length = document.getElementById('input').value

  answer = length * length

  alert(answer)
}
