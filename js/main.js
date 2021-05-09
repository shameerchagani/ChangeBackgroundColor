let arr = ['A', 'B', 'C', 'D', 'E', 'F', 1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
let hero = document.querySelector('.hero')
let colorName = document.getElementById('some-color')
let h1 = document.getElementById('h1')

function changeColor() {
    let code = ''
    for (i = 0; i < 6; i++) {
        let random = Math.floor(Math.random() * arr.length)
        code = code + arr[random]
    }

    hero.style.background = '#' + code
    h1.style.color = '#fff'
    colorName.innerHTML = '#' + code

}

setInterval(() => changeColor(), 2500)
