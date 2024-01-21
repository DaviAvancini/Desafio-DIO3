class Heroes {
    constructor(heroName, heroAge, heroType){
        this.heroName = heroName
        this.heroAge = heroAge
        this.heroType = heroType
    }

}

let hero1 = new Heroes("Aristóteles","62","mago")
let hero2 = new Heroes("Claudio","37","guerreiro")
let hero3 = new Heroes("Ronaldo","29","ninja")
let hero4 = new Heroes("Armando","40","monge")



function atackType(heroType, heroName) {
    if(heroType === "mago") {
        console.log(`O mago ${heroName} usou Magia`)
    }
}
atackType(hero1.heroType, hero1.heroName)