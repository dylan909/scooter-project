const User = require('../src/User')

// User tests here
describe("Testing user", () => {
    test("Username isn't blank", () => {
        let newUser = new User('dylan', 'password', 20)
        expect(typeof newUser.userName).toBe(typeof '')
    })
    test("Password isn't blank", () => {
        let newUser = new User('dylan', 'password', 20)
        expect(typeof newUser.password).toBe(typeof '')
    })
    test("Underage People can't sign up", () => {
        let newUser = new User('dylan', 'password', 20)
        expect(typeof newUser.age).toBe(typeof 2)
    })

})
// test username

// test password

// test age
