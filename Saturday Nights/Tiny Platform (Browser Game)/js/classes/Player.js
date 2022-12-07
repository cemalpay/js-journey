// player class'ı yaratıldı
class Player {
    constructor({position, collisionBlocks}) {
        this.position = position
        this.velocity = {
            x:0,
            y:1,
        }
        this.height = 100 / 4
        this.width = 60 / 4
        this.collisionBlocks = collisionBlocks
    }
    draw() {
        c.fillStyle = 'red'
        c.fillRect(this.position.x, this.position.y, this.width, this.height)
    }
    update() {
        this.draw()

        this.position.y += this.velocity.y
        this.applyGravity()
        this.checkForVerticalCollisions()
    }

    applyGravity(){
        this.position.x += this.velocity.x
        this.velocity.y += gravity
    }
    checkForVerticalCollisions(){
        for (let i = 0; i <this.collisionBlocks.length; i++){
            const collisionBlock = this.collisionBlocks[i]
            //player'in altı >= block üstü
            if(
                collision({
                    object1: this,
                    object2: collisionBlock,
                })
                ) {
                    if(this.velocity.y > 0 ){
                        this.velocity.y = 0
                    }
                }
        }
    }
}