let score = document.getElementById('score')
// score.textContent = 4
let scoreTwo = document.getElementById('score-2')
// scoreTwo.textContent = 4
count = 0
countTwo = 0

function plusOne() {
    count += 1
    score.textContent = count
}

function plusTwo() {
    count += 2
    score.textContent = count
}

function plusThree() {
    count += 3
    score.textContent = count
}


function plusOneTwo() {
    countTwo += 1
    scoreTwo.textContent = countTwo
}

function plusTwoTwo() {
    countTwo += 2
    scoreTwo.textContent = countTwo
}

function plusThreeTwo() {
    countTwo += 3
    scoreTwo.textContent = countTwo
}