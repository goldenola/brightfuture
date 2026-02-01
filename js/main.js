const m = document.getElementById('message2')
let n = document.getElementById('name2');
let text = document.getElementById('text');
function processForm(e) {
    e.preventDefault()

if (!isNaN(m)) {text = "input not valid"}else {text = 'input ok'}
}