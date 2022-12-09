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
const gravity = 0.1

// 36 satır x 27 sütun
// her block 16x16
// her 36lık satırı bölüp 2d arrayine pushladık
const floorCollisions2D = []
for (let i = 0; i < floorCollisions.length; i += 36) {
    floorCollisions2D.push(floorCollisions.slice(i, i + 36))
}
const platformCollisions2D = []
for (let i = 0; i < platformCollisions.length; i += 36) {
    platformCollisions2D.push(platformCollisions.slice(i, i + 36))
}

/*
rowlardaki değerler bizim y deki pozisyonumuzu veriyor
column(symbol)'deki değerler ise x deki pozisyonumuzu.

bu şekilde 199 değerinin x ve y deki pozisyonunu bularak
orada bir collision block oluşturulmasını sağlayacağız
*/
const collisionBlocks = []
floorCollisions2D.forEach((row, y) => {
    row.forEach((symbol, x) => {
        if(symbol === 199) {
            console.log('draw a block here!')
            collisionBlocks.push(new CollisionBlock({
                position: {
                    x: x * 16,
                    y: y * 16,
                }
            }))
        }
    })
})
const platformCollisionBlocks = []
platformCollisions2D.forEach((row, y) => {
    row.forEach((symbol, x) => {
        if(symbol === 199) {
            console.log('draw a block here!')
            //!!! değiştirmeyi unutma!!! geçici olarak platform collisionları floor ile aynı yaptık
            platformCollisionBlocks.push(new CollisionBlock({
                position: {
                    x: x * 16,
                    y: y * 16,
                },
                height: 4,
            }))
        }
    })
})


// new player yaratıldı ve başlangıç pozisyonu belirlendi
const player = new Player({
    position:{
        x:100,
        y:100
    },
    collisionBlocks,
    platformCollisionBlocks,
    imageSrc:'./img/warrior/Idle.png',
    frameRate: 8,
    animations: {
        Idle: {
            imageSrc: './img/warrior/Idle.png',
            frameRate: 8,
            frameBuffer: 3,
        },
        Run: {
            imageSrc: './img/warrior/Run.png',
            frameRate: 8,
            frameBuffer: 5,
        },
        Jump: {
            imageSrc: './img/warrior/Jump.png',
            frameRate: 2,
            frameBuffer: 3,
          },
          Fall: {
            imageSrc: './img/warrior/Fall.png',
            frameRate: 2,
            frameBuffer: 3,
          },
          FallLeft: {
            imageSrc: './img/warrior/FallLeft.png',
            frameRate: 2,
            frameBuffer: 3,
          },
          RunLeft: {
            imageSrc: './img/warrior/RunLeft.png',
            frameRate: 8,
            frameBuffer: 5,
          },
          IdleLeft: {
            imageSrc: './img/warrior/IdleLeft.png',
            frameRate: 8,
            frameBuffer: 3,
          },
          JumpLeft: {
            imageSrc: './img/warrior/JumpLeft.png',
            frameRate: 2,
            frameBuffer: 3,
          },
    }
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
const backgroundImageHeight = 432
const camera = {
    position: {
      x: 0,
      y: -backgroundImageHeight + scaledCanvas.height,
    },
}

function animate() {
    window.requestAnimationFrame(animate)
    c.fillStyle="white"
    c.fillRect(0, 0, canvas.width, canvas.height)

    //save ve restore arasına alınan fonksiyonlar bir kere çalışıyor
    c.save()
    //arkaplanı 4 kat büyüttük
    c.scale(4, 4)

    // //arkaplanın pozisyonunu ayarladık (x:0 y:(-bg.height) + (canvas.height / 4))
    c.translate(0,-background.image.height + scaledCanvas.height)
    background.update()

    //map yüklendiğinde collision blockların yüklenmesini sağlıyoruz.
    //
    //restore satırının üstünde olmalı çünkü scale ediliyor harita
    collisionBlocks.forEach((CollisionBlock) => {
        CollisionBlock.update()
    })
    platformCollisionBlocks.forEach((block) => {
        block.update()
    })

    //player'in x düzlemindeki hareketi
    player.update()
    player.velocity.x = 0
    if (keys.d.pressed) player.velocity.x = 2
    else if (keys.a.pressed) player.velocity.x = -2

    c.restore()

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
            player.velocity.y = -6
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