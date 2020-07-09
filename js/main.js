let iconSet = document.querySelectorAll('.svgIcon')

function whenClicked(EventObject) {
    let clickedIcon = EventObject.currentTarget;

    console.log(`the id of the svg clicked is ${clickedIcon.id}`)

    // console.log(EventObject.currentTarget)

    // console.log(clickedIcon.id)

    // console.log(EventObject)

    clickedIcon.classList.toggle('selected')
    updateCount()
}

iconSet.forEach(function(icon) {
    icon.addEventListener('click', whenClicked, true)
})


function updateCount() {

    const countElement = document.querySelector('.count')
    countElement.dataset.count = document.querySelectorAll('.svgIcon.selected').length
    countElement.innerHTML = countElement.dataset.count
}