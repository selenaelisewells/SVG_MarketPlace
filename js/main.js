let iconSet = document.querySelectorAll('.svgIcon')

function whenClicked(EventObject) {
    let clickedIcon = EventObject.currentTarget;

    console.log(EventObject.currentTarget)

    console.log(clickedIcon.id)

    console.log(EventObject)

    clickedIcon.classList.toggle('selected')
}

iconSet.forEach(function(icon) {
    icon.addEventListener('click', whenClicked, true)
})