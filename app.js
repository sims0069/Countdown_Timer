const timerInputBlock = document.querySelector('.timer-input')
const userInput = document.querySelector('.timer-input input')
const startBtn = document.querySelector('#start-btn')

const minutesH1 = document.querySelector('.minutes')
const secondsH1 = document.querySelector('.seconds')
const infoDiv = document.querySelector('.info')

let time = null

startBtn.onclick = startCountDown
    userInput.onkeydown = (evt) => {
        if (evt.key === 'Enter') {
        startCountDown()
        }
}

function startCountDown () {
    if (!userInput.value.trim()) return

    time = userInput.value * 60
    infoDiv.textContent = 'Timer in Progress'
    userInput.value = ''
    timerInputBlock.style.display = 'none'

    let timerId = setInterval(function () {
        time--
        let minutesLeft = Math.floor(time / 60)
        let secondsLeft = Math.floor(time % 60)

        if (time <= 0) {
            clearInterval(timerId)
            timerInputBlock.style.display = 'flex'
            infoDiv.textContent = 'Timer Complete'
        }
        // math.floor above is to remove the decimal point from the calculation. toFixed & toPrecision can also be used but they will round up the value of the sum to the nesrest whole number
        minutesH1.textContent = minutesLeft.toString().padStart(2, '0')
        secondsH1.textContent = secondsLeft.toString().padStart(2, '0')
    }, 1000)
}