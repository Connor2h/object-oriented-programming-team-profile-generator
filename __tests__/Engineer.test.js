const Engineer = require("../lib/Engineer");

//creates engineer object with github username
test('creates an Engineer object with github', () =>{
    const github = "connor2h"
    const engineer = new Engineer('Dave', "1", "dave@gmail.com", github);

    expect(engineer.github).toBe(github);

})

//gets manager's role
test("gets engineer's role", () => {
    const engineer = new Engineer('Dave', "1", "dave@gmail.com");

    expect(engineer.getRole()).toBe('Engineer');
});