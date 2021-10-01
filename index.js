const dailyToggleButton = document.querySelector('#dailyToggleButton')
const weeklyToggleButton = document.querySelector('#weeklyToggleButton')
const monthlyToggleButton = document.querySelector('#monthlyToggleButton')

const dailyListItems = Array.from(document.querySelectorAll('.time-slot-daily'))
const weeklyListItems = Array.from(
  document.querySelectorAll('.time-slot-weekly')
)
const monthlyListItems = Array.from(
  document.querySelectorAll('.time-slot-monthly')
)

function activateDailyButton() {
  dailyToggleButton.classList.add('active-link')

  monthlyToggleButton.classList.remove('active-link')
  weeklyToggleButton.classList.remove('active-link')

  displayDailyHours()
  hideWeeklyHours()
  hideMonthlyHours()
}

function activateWeeklyButton() {
  weeklyToggleButton.classList.add('active-link')

  dailyToggleButton.classList.remove('active-link')
  monthlyToggleButton.classList.remove('active-link')

  displayWeeklyHours()
  hideDailyHours()
  hideMonthlyHours()
}

function activateMonthlyButton() {
  monthlyToggleButton.classList.add('active-link')

  dailyToggleButton.classList.remove('active-link')
  weeklyToggleButton.classList.remove('active-link')

  displayMonthlyHours()
  hideDailyHours()
  hideWeeklyHours()
}

function displayDailyHours() {
  dailyListItems.forEach(listItem => {
    const activityBody = listItem.parentElement.parentElement
    const h1BigTime = activityBody.querySelector('.big-time')
    const hiddenSpan = listItem.querySelector('span')

    h1BigTime.textContent = hiddenSpan.textContent
    listItem.classList.remove('hide')
  })
}

function hideDailyHours() {
  dailyListItems.forEach(listItem => {
    listItem.classList.add('hide')
  })
}

function displayWeeklyHours() {
  weeklyListItems.forEach(listItem => {
    const activityBody = listItem.parentElement.parentElement
    const h1BigTime = activityBody.querySelector('.big-time')
    const hiddenSpan = listItem.querySelector('span')

    h1BigTime.textContent = hiddenSpan.textContent
    listItem.classList.remove('hide')
  })
}

function hideWeeklyHours() {
  weeklyListItems.forEach(listItem => {
    listItem.classList.add('hide')
  })
}

function displayMonthlyHours() {
  monthlyListItems.forEach(listItem => {
    const activityBody = listItem.parentElement.parentElement
    const h1BigTime = activityBody.querySelector('.big-time')
    const hiddenSpan = listItem.querySelector('span')

    h1BigTime.textContent = hiddenSpan.textContent
    listItem.classList.remove('hide')
  })
}

function hideMonthlyHours() {
  monthlyListItems.forEach(listItem => {
    listItem.classList.add('hide')
  })
}

dailyToggleButton.addEventListener('click', activateDailyButton)
weeklyToggleButton.addEventListener('click', activateWeeklyButton)
monthlyToggleButton.addEventListener('click', activateMonthlyButton)

activateWeeklyButton()
