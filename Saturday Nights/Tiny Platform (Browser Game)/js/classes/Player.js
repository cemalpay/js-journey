// player class'ı yaratıldı
class Player {
    constructor({position, collisionBlocks}) {
        this.position = position
        this.velocity = {
            x:0,
            y:1,
        }
        this.height = 100
        this.width = 60
        this.collisionBlocks = collisionBlocks
    }
    draw() {
        c.fillStyle = 'red'
        c.fillRect(this.position.x, this.position.y, this.width, this.height)
    }
    update() {
        this.draw()

        this.position.y += this.velocity.y
        this.position.x += this.velocity.x
        // eğer player'ın y deki pozisyonu canvasın height'ından küçükse (yani player zeminde değilse)
        if (this.position.y + this.height + this.velocity.y < canvas.height)
        this.velocity.y += gravity
        else this.velocity.y = 0
    }
}