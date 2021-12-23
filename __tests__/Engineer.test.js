const Engineer = require("../lib/Engineer");

//creates engineer object with github username
test('creates an Engineer object with github', () =>{
    const gitHubUserName = "connor2h"
    const engineer = new Engineer('Dave', "1", "dave@gmail.com", gitHubUserName);

    expect(engineer.gitHubUserName).toBe(gitHubUserName);

})

//gets manager's role
test("gets engineer's role", () => {
    const engineer = new Engineer('Dave', "1", "dave@gmail.com");

    expect(engineer.getRole()).toBe('Engineer');
});