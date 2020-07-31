let topS = document.querySelector('#top')
let mainView = document.querySelector('#mainView')
let bottom = document.querySelector('#bottom')

skills = [
    'Need a data scientist',
    'Need an android app',
    'Need a web app',
    'Need a website'
]

let skillsIndex = 1
let skillsIndexTop = 2
let skillsIndexBottom = 3

const topBottomStyles = {
    color: 'grey',
    opacity: 0.4,
    border: '1px solid black'
}

const loopMainView = () => {
    // shift the divs per 1 second interval
    topS.innerHTML = '<div>' + skills[skillsIndex] + '</div>'
    skillsIndex += 1
    skillsIndex > 3 ? skillsIndex = 0 : skillsIndex;
    setTimeout(() => loopMainView(), 1200)
}

const loopTopView = () => {
    // shift the divs per 1 second interval
    mainView.innerHTML = '<div>' + skills[skillsIndexTop] + '</div>'
    skillsIndexTop += 1
    skillsIndexTop > 3 ? skillsIndexTop = 0 : skillsIndexTop;
    setTimeout(() => loopTopView(), 1200)
}

const loopBottomView = () => {
    // shift the divs per 1 second interval
    bottom.innerHTML = '<div>' + skills[skillsIndexBottom] + '</div>'
    skillsIndexBottom += 1
    skillsIndexBottom > 3 ? skillsIndexBottom = 0 : skillsIndexBottom;
    setTimeout(() => loopBottomView(), 1200)
}

const initializer = () => {
    loopMainView()
    loopTopView()
    loopBottomView()
}

window.onload = initializer
