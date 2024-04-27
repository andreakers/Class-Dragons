class Dragon {

  constructor(name, color) {
    this.name = name
    this.color = color
  }

  breathesFire() {
    return `${this.name} breathes fire everywhere! BURN!!!!`
  }

  static getDragons(...dragons) {
    let newArray = []

    for (let i = 0; i < dragons.length; i++) {
      let dragon = dragons[i]
      newArray.push(dragon.name)
    }
    return newArray
  }
}



/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

try {
  module.exports = Dragon;
} catch {
  module.exports = null;
}
