const Intern = require('../lib/Intern');

//creates intern object with school
test('creates an intern object with school', () =>{
    const school = "University of Central Florida";
    const intern = new Intern('Dave', "1", "dave@gmail.com", school);

    expect(intern.school).toBe(school);

})

//gets manager's role
test("gets intern's role", () => {
    const intern = new Intern('Dave', "1", "dave@gmail.com");

    expect(intern.getRole()).toBe('Intern');
});