const Scooter = require('../src/Scooter')
const User = require('../src/User')

//typeof scooter === object
describe('scooter object', () => {
  test('tests to see if the scooter class makes an object', () => {
    // edit this to be a real test!
    let user1 = {username: 'dylan909', password: 'password', age:20}
    let newScooter = new Scooter('Kings Cross', user1)
    expect(typeof newScooter).toEqual(typeof {});
  }
)
})

//Method tests
describe('scooter methods', () => {
  // tests here!
  const consoleSpy = jest.spyOn(console, 'log');


  let user1 = new User('dylan909', 'password', '21')

  //rent method


  test("tests rent works if charge is over 20", () => {
    let newScooter = new Scooter('Kings Cross', user1)
    newScooter.charge = 100
    newScooter.rent()
    expect(consoleSpy).toHaveBeenCalledWith('Enjoy the ride!')
  })


  test("tests rent doesn't work if charge is less than 21", () => {
    let newScooter = new Scooter('Kings Cross', user1)
    newScooter.charge = 3
    //newScooter.rent()
    expect(()=>{newScooter.rent()}).toThrow('Scooter low on battery, please charge.')
  })


  test("tests rent if none is applicable", () => {
    let newScooter = new Scooter('Kings Cross', user1)
    newScooter.charge = undefined
    expect(()=>{newScooter.rent()}).toThrow("Scooter is broken, please send a repair request")
  })


  //dock method


  test("test if dock() changes the station of Scooter", () => {
    let newScooter = new Scooter('Kings Cross', user1)
    newScooter.dock("Euston")
    expect(newScooter.station).toBe('Euston')
  })


  test("test if dock() changes the user of Scooter", () => {
    let newScooter = new Scooter('Kings Cross', user1)
    newScooter.dock("Euston")
    expect(newScooter.user).toBe('')})


  test("tests if dock() works with no station", () => {
    let newScooter = new Scooter('Kings Cross', user1)
    expect(() => {newScooter.dock(undefined)}).toThrow("Docking station required!")
  })
  //requestRepair method

  test("requestRepair", async () => {
    const scooter = new Scooter();
    await scooter.reCharge(); // we need to wait for the charge!
    expect(scooter.isBroken).toBe(false)
  });

  //charge method

  test("charge", async () => {
    const scooter = new Scooter();
    await scooter.reCharge(); // we need to wait for the charge!
    expect(scooter.charge).toBe(100);
  });

})
