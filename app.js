const daysEl = document.querySelectorAll('h3')[0],
hoursEl = document.querySelectorAll('h3')[1],
minutesEl = document.querySelectorAll('h3')[2],
secondsEl = document.querySelectorAll('h3')[3],
cointerBox = document.querySelector('.container')

const countDown = ()=>{
    const countDate = new Date('August 15 2023 00:00:00').getTime(),
    currentDate = new Date().getTime(),
    gap = countDate - currentDate;


    //Time Thing
    const seconds = 1000,
    minutes = seconds * 60,
    hours = minutes * 60,
    days = hours * 24;

    const textDay = Math.floor(gap / days),
    textHours = Math.floor((gap % days) / hours),
    textMinutes = Math.floor((gap % hours) / minutes),
    textSeconds = Math.floor((gap % minutes) / seconds)

    daysEl.innerText = textDay
    hoursEl.innerText = textHours
    minutesEl.innerText = textMinutes
    secondsEl.innerText = textSeconds

    if (countDate <= currentDate) {
        cointerBox.innerHTML = '<h1>Oh No! Hell Gates are open.</h1>'
    }
}



setInterval(countDown , 1000);
