const Openbutton = document.getElementById('openModal')
const CaixaEsc = document.getElementById('caixaEsc')

Openbutton.onclick = addRemoveClass
 
function addRemoveClass() {
    Openbutton.classList.add('sumido')
    CaixaEsc.classList.remove('sumido')
}

document.addEventListener('keydown', function(event) {
    const apertarEsc = event.key === 'Escape'

    if (apertarEsc) {
        CaixaEsc.classList.add('sumido')
        Openbutton.classList.remove('sumido')
    }
})

