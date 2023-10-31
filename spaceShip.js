// 1. Create a class function SpaceShip
// - should set two properties: name and topSpeed
// - should have a method accelerate that logs to the console 
//   `${name} moving to ${topSpeed}`

class SpaceShip {
    constructor(name, topSpeed){
        this.name = name
        this.topSpeed = topSpeed
    }
    accelerate() {
        const {name, topSpeed} = this
        console.log(`${name} moving to ${topSpeed}`)
    }
}

const xWing = new SpaceShip("X-Wing", "999 mph")
const starshipEnterprise = new SpaceShip("The Starship Enterprise", "the speed of light")


// 2. Call the constructor with a couple ships, 
// and call accelerate on both of them.

xWing.accelerate()
starshipEnterprise.accelerate()