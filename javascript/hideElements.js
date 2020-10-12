const phone = document.querySelector('#phone-container')
const mail = document.querySelector('#mail-container')

function hidePhone() {
    phone.style.display = 'none'
}

function showPhone() {
    phone.style.display = 'block'
}

function hideMail() {
    mail.style.display = 'none';
}

function showMail() {
    mail.style.display = 'block';
}

function copy(text) {
    const input = document.createElement('input');
    input.setAttribute('value', text);
    document.body.appendChild(input);
    input.select();
    const result = document.execCommand('copy');
    document.body.removeChild(input);
    window.alert(text + ' copied to clipboard')
    return result;
 }
