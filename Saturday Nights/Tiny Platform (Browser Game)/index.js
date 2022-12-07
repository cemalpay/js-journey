const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')


//canvasın en'i ve boy'u
canvas.width = 1024
canvas.height = 576

const scaledCanvas = {
    width: canvas.width / 4,
    height: canvas.height / 4,
}
//yerçekimi çarpanı
const gravity = 0.4

// 36 x 27
// her 36lık satırı bölüp 2d arrayine pushladık
const floorCollisions2D = []
for (let i = 0; i < floorCollisions.length; i += 36) {
    floorCollisions2D.push(floorCollisions.slice(i, i + 36))
}
floorCollisions2D.forEach((row) => {
    row.forEach(symbol => {
        if(symbol === 199) {
            console.log('draw a block here!')
            c.fill
        }
    })
})




// new player yaratıldı ve başlangıç pozisyonu belirlendi
const player = new Player({
    x:0,
    y:0,
})

// keys adında sağ ve sol yön tuşlarının pressed durumunu belirten bir array
const keys = {
    d: {
        pressed: false
    },
    a: {
        pressed: false
    },
}

// bg adında yeni sprite oluşturup pozisyonunu belirttik
const background = new Sprite({
    position: {
        x:0,
        y:0,
    },
    imageSrc:'./img/background.png'
})

function animate() {
    window.requestAnimationFrame(animate)
    c.fillStyle="white"
    c.fillRect(0, 0, canvas.width, canvas.height)

    //save ve restore arasına alınan fonksiyonlar bir kere çalışıyor
    c.save()
    //arkaplanı 4 kat büyüttük
    c.scale(4, 4)

    //arkaplanın pozisyonunu ayarladık (x:0 y:(-bg.height) + (canvas.height / 4))
    c.translate(0,-background.image.height + scaledCanvas.height)
    background.update()
    c.restore()


    //player'in x düzlemindeki hareketi
    player.update()
    player.velocity.x = 0
    if (keys.d.pressed) player.velocity.x = 4
        else if (keys.a.pressed) player.velocity.x = -4
}

animate()

//arrow keys'in pressed true olma durumu
window.addEventListener('keydown', (event) => {
    switch (event.key) {
        case 'd':
            keys.d.pressed = true
            break
        case 'a':
            keys.a.pressed = true
           break
        case 'w':
            player.velocity.y = -15
    }
})

// arrow keys'in pressed false olma durumu
window.addEventListener('keyup', (event) => {
    switch (event.key) {
        case 'd':
            keys.d.pressed = false
            break
        case 'a':
            keys.a.pressed = false
           break
    }
})