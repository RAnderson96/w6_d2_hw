const Park = function (parkName, ticketPrice) {
    this.parkName = parkName;
    this.ticketPrice = ticketPrice;
    this.dinoCollection = [];

}

Park.prototype.addDinosaur = function (dinosaur) {
    this.dinoCollection.push(dino)
    
    // if (typeof dinosaur == Array) {
    //     for (dino of dinosaur) {
    //         this.dinoCollection.push(dino);
    //     }
    // }
    // else if (typeof dinosaur == Object) {
    //     this.dinoCollection.push(dinosaur);
    // };
}

Park.prototype.removeDinosaur = function (dinosaur) {
    // let dinoIndex = this.dinoCollection.findIndex(dinosaur)
    // this.dinoCollection.splice(dinoIndex,1)

    let dinoIndex = 0; 
    for (dino of this.dinoCollection) {
        if (dino.species === dinosaur.species && dino.diet === dinosaur.diet && dino.guestsAttractedPerDay === dinosaur.guestsAttractedPerDay) {
            this.dinoCollection.splice(dinoIndex, 1);


        }
        dinoIndex++
    }
}

Park.prototype.getMostPopular = function () {
    let mostPopDino = 0
    for (dino of this.dinoCollection) {
        if (dino.guestsAttractedPerDay > mostPopDino) {
            mostPopDino = dino.guestsAttractedPerDay
        }
    }
    return mostPopDino
}

Park.prototype.dinosaurBySpecies = function (species) {
    let dinoBySpecies = []
    for (dino of this.dinoCollection) {
        if (dino.species === species){
            dinoBySpecies.push(dino)
        }
    }
    return dinoBySpecies
}

Park.prototype.addDinosaurArray = function (dinoArray) {
    for (dino of dinoArray) {
        this.addDinosaur(dino);
      };
}

Park.prototype.totalNumberOfVisitors = function () {
    let totalNumberOfVisitors = 0;
    for (dino of this.dinoCollection) {
        totalNumberOfVisitors = totalNumberOfVisitors + dino.guestsAttractedPerDay;
    };
    return totalNumberOfVisitors;
}


Park.prototype.totalNumberOfVisitorsPerYear = function () {
    let totalNumberOfVisitorsPerYear = this.totalNumberOfVisitors() * 364;
    return totalNumberOfVisitorsPerYear

}

Park.prototype.totalRevenue = function () {
    // dailyRevenue = 0;
    // for (dino in this.dinoCollection){
    //     dailyRevenue = dailyRevenue + (dino.guestsAttractedPerDay * this.
    // }
    
    let totalNumberOfVisitorsPerYear = this.totalNumberOfVisitors() * 364;
    let totalRevenue = totalNumberOfVisitorsPerYear * this.ticketPrice

    return totalRevenue

}


Park.prototype.removeDinosaurBySpecies = function (species) {
    let newDinoCollection = []
    for (dino of this.dinoCollection) {
        if (dino.species === species) {
            continue;
        }
        newDinoCollection.push(dino)
    }
    this.dinoCollection = newDinoCollection
}

Park.prototype.getDietCount = function() {
    let carnivore_count = 0;
    let herbivore_count = 0; 
    let omnivore_count = 0;
    for (dino of this.dinoCollection) {
        if (dino.diet === 'carnivore') {
            carnivore_count++
        }
        if (dino.diet === 'herbivore') {
            herbivore_count++
        }
        if (dino.diet === 'omnivore') {
            omnivore_count++
        }

    }
    let dietCount = {
        carnivore: carnivore_count,
        herbivore: herbivore_count,
        omnivore: omnivore_count,
    }
    console.log(dietCount)
    return dietCount
    

}

module.exports = Park