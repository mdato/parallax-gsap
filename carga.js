let loading = document.querySelector('.loading')
let container = document.querySelector('.container')
let body = document.querySelector('body')
container.style.visibility = "hidden"

if (window.outerWidth > 479) {
    for (var y = 0; y <= 399; y++) {
        let block = document.createElement('div')
        block.classList.add('block')
        loading.appendChild(block)
    }
} else {
    for (var y = 0; y <= 799; y++) {
        let block = document.createElement('div')
        block.classList.add('block')
        loading.appendChild(block)
    }
}

let block = document.querySelectorAll('.block')

setTimeout(myURL, 5000);
function myURL() {
    loading.style.display = "none"
    container.style.visibility = "visible"
}