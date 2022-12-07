function collision ({
    object1,
    object2
}){
    return(
            object1.position.y + object1.height >= object2.position.y &&
            //veya player'in üstü <= bloğun altından
            object1.position.y <= object2.position.y + object2.height &&
            // veya player'in sağı bloğun soluna çarparsa
            object1.position.x <= object2.position.x + object2.width &&
            // veya player'in solu bloğun sağuna çarparsa
            object1.position.x + object1.width >= object2.position.x
    )
}