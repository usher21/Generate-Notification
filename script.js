const alertContainer = document.querySelector('.alert-container')

const btnSuccess = document.querySelector('button.success')
const btnDanger = document.querySelector('button.danger')
const btnWarning = document.querySelector('button.warning')
const btnInfo = document.querySelector('button.info')

const alertSuccess = createAlert('alert success', 'fa-solid fa-circle-check', 'Notification success')
const alertDanger = createAlert('alert danger', 'fa-solid fa-circle-exclamation', 'Notification danger')
const alertWarning = createAlert('alert warning', 'fa-solid fa-triangle-exclamation', 'Notification warning')
const alertInfo = createAlert('alert info', 'fa-sharp fa-solid fa-circle-info', 'Notification info')

btnSuccess.addEventListener('click', () => {
    alertContainer.append(alertSuccess)
    
    enableAlert(alertSuccess)

    setTimeout(() => {
        enableAlert(alertSuccess)
        setTimeout(() => {
            removeAlert(alertSuccess)
        }, 500);
    }, 3000)
})

btnDanger.addEventListener('click', () => {
    alertContainer.append(alertDanger)
    enableAlert(alertDanger)
    setTimeout(() => {
        enableAlert(alertDanger)
        setTimeout(() => {
            removeAlert(alertDanger)
        }, 500);
    } , 3000)
})

btnWarning.addEventListener('click', () => {
    alertContainer.append(alertWarning)
    enableAlert(alertWarning)
    setTimeout(() => {
        enableAlert(alertWarning)
        setTimeout(() => {
            removeAlert(alertWarning)
        }, 500);
    }, 3000)
})

btnInfo.addEventListener('click', () => {
    alertContainer.append(alertInfo)
    enableAlert(alertInfo)
    setTimeout(() => {
        enableAlert(alertInfo)
        setTimeout(() => {
            removeAlert(alertInfo)
        }, 500);
    }, 3000)
})

function enableAlert(alert) {
    if (alert.classList.contains('active')) {
        alert.classList.add('inactive')
        alert.classList.remove('active')
    } else {
        alert.classList.add('active')
        alert.classList.remove('inactive')
    }
}

function removeAlert(alert) {
    alertContainer.removeChild(alert)
}

function enableTime() {
    
}

function createElement(tagName, attributs = {}, content = '') {
    const element = document.createElement(tagName)
    for (const attribut in attributs) {
        element.setAttribute(attribut, attributs[attribut])
    }
    element.textContent = content
    return element
}

function createAlert(alertClassName, iconName, alertText) {
    const alert = createElement('div', { class: alertClassName })

    const textIcon = createElement('div', { class: 'icon-text' })
    const icon = createElement('i', { class: iconName })
    const text = createElement('span', { class: 'text' }, alertText)
    textIcon.append(icon)
    textIcon.append(text)
    alert.append(textIcon)

    const closeBtn = createElement('span', { class: 'close  fa-solid fa-xmark'})
    alert.append(closeBtn)

    return alert
}