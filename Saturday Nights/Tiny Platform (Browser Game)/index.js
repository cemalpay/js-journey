const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

canvas.width = 1024
canvas.height = 576
const gravity = 0.4

class Sprite {
    constructor({position, imageSrc}) {
        this.position = position
        this.image = new Image()
        this.image.src = imageSrc 
    }
    draw(){
        if (!this.image) return
        c.drawImage(this.image, this.position.x, this.position.y)
    }
    update() {
        this.draw()
    }
}

class Player {
    constructor(position) {
        this.position = position
        this.velocity = {
            x:0,
            y:1,
        }
        this.height = 100
    }
    draw() {
        c.fillStyle = 'red'
        c.fillRect(this.position.x, this.position.y, 100, this.height)
    }
    update() {
        this.draw()
    
        this.position.y += this.velocity.y
        this.position.x += this.velocity.x

        if (this.position.y + this.height + this.velocity.y< canvas.height)
        this.velocity.y += gravity
        else this.velocity.y = 0
    }
}
const player = new Player({
    x:0,
    y:0,
})

const keys = {
    d: {
        pressed: false
    },
    a: {
        pressed: false
    },
    w: {
        pressed: false
    },
}

function animate() {
    window.requestAnimationFrame(animate)
    c.fillStyle="white"
    c.fillRect(0, 0, canvas.width, canvas.height)
    player.update()
    player.velocity.x = 0
    if (keys.d.pressed) player.velocity.x = 4
        else if (keys.a.pressed) player.velocity.x = -4
}

animate()


window.addEventListener('keydown', (event) => {
    switch (event.key) {
        case 'd':
            keys.d.pressed = true
            console.log('move right')
            break
        case 'a':
            keys.a.pressed = true
           console.log('move left')
           break
        case 'w':
            player.velocity.y = -15
            console.log('jump')
    }
})

window.addEventListener('keyup', (event) => {
    switch (event.key) {
        case 'd':
            keys.d.pressed = false
            console.log('move right')
            break
        case 'a':
            keys.a.pressed = false
           console.log('move left')
           break
    }
})