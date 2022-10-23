const Scooter = require('../src/Scooter')
const User = require('../src/User')
const ScooterApp = require('../src/ScooterApp')

// ScooterApp tests here
describe("ScooterApp tests", () => {
    const consoleSpy = jest.spyOn(console, 'log');

    let user1 = new User('dylan909', 'password', '21')

    let newScooter = new Scooter('Kings Cross', user1)


    // register user
    test("Register User: testing works", () => {
        register(user.username)
    })

    // log in

    // add scooter

    // remove scooter

})
