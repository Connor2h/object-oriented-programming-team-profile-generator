const Manager = require("../lib/Manager");

//creates manager object with office number
test('creates an Manager object with office number', () =>{
    const officeNumber = "1234";
    const manager = new Manager('Dave', "1", "dave@gmail.com", officeNumber);

    expect(manager.officeNumber).toBe("1234");

})

//gets manager's role
test("gets manager's role", () => {
    const manager = new Manager('Dave', "1", "dave@gmail.com");

    expect(manager.getRole()).toBe('Manager');
});