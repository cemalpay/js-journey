const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

canvas.width = 1024
canvas.height = 576

class Player {
    constructor(position) {
        this.position = position
    }
    draw() {
        c.fillStyle = 'red'
        c.fillRect(this.position.x, this.position.y, 100, 100)
    }
    update() {
        this.draw()
        this.position.y++
    }
}
const player = new Player({
    x:0,
    y:0,
})

function animate() {
    window.requestAnimationFrame(animate)
    c.fillStyle="white"
    c.fillRect(0, 0, canvas.width, canvas.height)
    player.update()
}

animate()