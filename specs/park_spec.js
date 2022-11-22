const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {
  // let dinosaur;
  let park;
  beforeEach(function () {
    dinosaur1 = new Dinosaur('t-rex', 'carnivore', 50);
    dinosaur2 = new Dinosaur('diplodocus', 'herbivore', 30);
    dinosaur3 = new Dinosaur('Abelisaurus', 'carnivore', 135);
    dinosaur4 = new Dinosaur('Eddasaurus-rex', 'omnivore', 1);
    // dinosaur = new Dinosaur('t-rex', 'carnivore', 50);
    park = new Park('Victoria Park', 15.0)
  })

  it('should have a name', function() {
    const actual = park.parkName
    assert.strictEqual(actual, 'Victoria Park')
  });

  it('should have a ticket price', function() {
    const actual = park.ticketPrice
    assert.strictEqual(actual, 15.0)
  });

  it('should have a collection of dinosaurs', function() {
    const actual = park.dinoCollection
    assert.deepEqual(actual, [])
  });

  it('should be able to add a dinosaur to its collection', function() {
    let dinoList = [dinosaur1, dinosaur2, dinosaur3]
    park.addDinosaurArray(dinoList)
    // park.dinoCollection = []
    // park.addDinosaur(dinoList)
    const actual = park.dinoCollection
    console.log(park.dinoCollection)
    assert.deepEqual(actual, [dinosaur1, dinosaur2, dinosaur3])
  });

  it('should be able to remove a dinosaur from its collection', function () {
    let dinoList = [dinosaur1, dinosaur2, dinosaur3]
    park.addDinosaurArray(dinoList)
    
    // park.removeDinosaur(dinosaur2.species);
    park.removeDinosaur(dinosaur2)

    const actual = park.dinoCollection;

    assert.deepEqual(actual, [dinosaur1, dinosaur3]);

  });

  it('should be able to find the dinosaur that attracts the most visitors', function () {
    let dinoList = [dinosaur1, dinosaur2, dinosaur3]
    park.addDinosaurArray(dinoList)
    
    
    let mostpop = park.getMostPopular()
    const actual = 135;

    assert.strictEqual(actual, mostpop)

  });

  it('should be able to find all dinosaurs of a particular species', function () {
    let dinoList = [dinosaur1, dinosaur2, dinosaur3, dinosaur3]
    park.addDinosaurArray(dinoList)
    const dinos = park.dinosaurBySpecies('Abelisaurus');
    const actual = [dinosaur3, dinosaur3]
    assert.deepEqual(actual, dinos)
    
    
  });
  
  it('should be able to calculate the total number of visitors per day', function () {
    let dinoList = [dinosaur1, dinosaur2, dinosaur3, dinosaur3]
    park.addDinosaurArray(dinoList)
    const totalNumVisitors = park.totalNumberOfVisitors()
    const actual = 350
    assert.strictEqual(actual, totalNumVisitors)
    
  });


  it('should be able to calculate the total number of visitors per year', function () {
    let dinoList = [dinosaur1, dinosaur2, dinosaur3, dinosaur3]
    park.addDinosaurArray(dinoList)
    const totalNumVisitorsYear = park.totalNumberOfVisitorsPerYear()
    const actual = 350 * 364
    assert.strictEqual(actual, totalNumVisitorsYear)
    
  });

  it('should be able to calculate total revenue for one year', function() {
    let dinoList = [dinosaur1, dinosaur2, dinosaur3, dinosaur3]
    park.addDinosaurArray(dinoList)
    const totalRevenue = park.totalRevenue()
    const actual = 350 * 364 * 15
    assert.strictEqual(actual, totalRevenue)
  });

  it('should be able to remove all dinisaurs of a particular species', function() {
    let dinoList = [dinosaur1, dinosaur2, dinosaur3, dinosaur3]
    park.addDinosaurArray(dinoList)
    park.removeDinosaurBySpecies(dinosaur2.species)
    const actual = [dinosaur1, dinosaur3, dinosaur3]
    const parksDinoList = park.dinoCollection
    assert.deepEqual(actual, parksDinoList)
  });
  it('should be able to return an object with the number of carnivores, herbivores and omnivores ', function() {
    let dinoList = [dinosaur1, dinosaur2, dinosaur3, dinosaur4]
    park.addDinosaurArray(dinoList)
    const dietCountObject = park.getDietCount()
    const actual = {
      carnivore: 2,
      herbivore: 1,
      omnivore: 1
    }

    assert.deepEqual(actual, dietCountObject)
  });


});
